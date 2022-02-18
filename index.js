require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const path = require('path')
const Person = require('./models/person')

const app = express()
const PORT = process.env.PORT

const errorHandler = (error, request, response, next) => {
  console.error(error.message)

  if (error.name === 'CastError') {
    response.status(400).send({ error: 'malformatted id' })
  }

  if (error.name === 'ValidationError') {
    const { errors } = error
    const keys = Object.keys(errors)
    let message = ''

    keys.forEach((key) => {
      if (errors[key].kind === 'required') {
        message += `${errors[key].path} is a required field. `
      }

      if (errors[key].kind === 'minlength') {
        message += `${errors[key].path} needs to have at least ${errors[key].properties.minlength} characters. `
      }

      if (errors[key].kind === 'user defined') {
        message += `${errors[key].message}.`
      }
    })
    response.status(400).send({ error: message })
  }

  if (error.name === 'MongoServerError' && error.code === 11000) {
    const key = Object.keys(error.keyValue)
    response
      .status(409)
      .send({ error: `${key[0]} ${error.keyValue[key[0]]} already exists.` })
  }

  next(error)
}

app.use(cors())
app.use(express.static(path.join(__dirname, 'build')))
app.use(express.json())
app.use(morgan('tiny', { skip: (req) => req.method === 'POST' }))
morgan.token('request-body', (request) => JSON.stringify(request.body))

app.get('/info', (request, response, next) => {
  Person.find({})
    .then((persons) => {
      response.send(
        `<div>
      <p>Phone book has info for ${persons.length}
       people</p>
      <p>${new Date()}</p>
    </div>`
      )
    })
    .catch(next)
})

app
  .route('/api/persons')
  .get((request, response, next) => {
    Person.find({})
      .then((persons) => response.json(persons))
      .catch(next)
  })
  .post(
    morgan(
      ':method :url :status :res[content-length] - :response-time ms :request-body'
    ),
    (request, response, next) => {
      const contact = new Person({
        name: request.body.name,
        number: request.body.number,
      })

      contact
        .save()
        .then((newContact) => response.status(201).json(newContact))
        .catch((error) => next(error))
    }
  )

app
  .route('/api/persons/:id')
  .get((request, response, next) => {
    Person.findById(request.params.id)
      .then((person) =>
        person
          ? response.json(person)
          : response.status(404).json({ error: 'no such contact' })
      )
      .catch(next)
  })
  .delete((request, response, next) => {
    Person.findByIdAndDelete(request.params.id)
      .then(() => response.status(204).end())
      .catch(next)
  })
  .put((request, response, next) => {
    const body = request.body

    const contact = {
      name: body.name,
      number: body.number,
    }

    Person.findByIdAndUpdate(request.params.id, contact, {
      new: true,
      runValidators: true,
    })
      .then((updatedContact) => response.status(201).json(updatedContact))
      .catch(next)
  })

app.use(errorHandler)
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
