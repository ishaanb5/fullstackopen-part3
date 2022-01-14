const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const path = require('path')
const app = express()

app.use(cors())
app.use(express.static(path.join(__dirname, 'build')))
app.use(express.json())
app.use(morgan('tiny', { skip: (req, res) => req.method === 'POST' }))
morgan.token('request-body', (request, response) =>
  JSON.stringify(request.body)
)

let persons = [
  {
    id: 1,
    name: 'Arto Hellas',
    number: '040-123456',
  },
  {
    id: 2,
    name: 'Ada Lovelace',
    number: '39-44-5323523',
  },
  {
    id: 3,
    name: 'Dan Abramov',
    number: '12-43-234345',
  },
  {
    id: 4,
    name: 'Mary Poppendieck',
    number: '39-23-6423122',
  },
]

app.get('/info', (request, response) => {
  response.send(
    `<div>
      <p>Phone book has info for ${persons.length} people</p>
      <p>${new Date()}</p>
    </div>`
  )
})

app
  .route('/api/persons')
  .get((request, response, next) => {
    response.json(persons)
  })
  .post(
    morgan(
      ':method :url :status :res[content-length] - :response-time ms :request-body'
    ),
    (request, response) => {
      const contact = {
        id: Math.floor(Math.random() * 10 ** 10),
        name: request.body.name,
        number: request.body.number,
      }

      if (!contact.name) {
        if (!contact.number) {
          response
            .status(400)
            .json({ error: 'contact name and number missing' })
        } else {
        }
      } else if (!contact.number) {
        response.status(400).json({ error: 'contact number missing' })
      } else if (persons.some((person) => person.name === contact.name)) {
        response.status(400).json({ error: 'name must be unique' })
      } else {
        persons = persons.concat(contact)
        response.status(201).json(contact)
      }
    }
  )

app
  .route('/api/persons/:id')
  .get((request, response) => {
    const id = Number(request.params.id)
    const person = persons.find((person) => person.id === id)
    person
      ? response.json(person)
      : response.status(404).json({ error: 'no such contact' })
  })
  .delete((request, response) => {
    const id = +request.params.id
    persons = persons.filter((person) => person.id !== id)
    response.sendStatus(204)
  })

const PORT = process.env.PORT || 3001
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
