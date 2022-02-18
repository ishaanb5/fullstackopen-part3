const mongoose = require('mongoose')
const [, , password, name, number] = process.argv

if (process.argv.length < 3) {
  console.log(
    'Please enter a password for connecting to the database. Example: node mongo.js <password>'
  )
  process.exit(0)
}

mongoose.connect(
  `mongodb+srv://fullstack:${password}@phonebook.kbd9t.mongodb.net/phonebook?retryWrites=true&w=majority`
)

const personSchema = mongoose.Schema({
  name: String,
  number: String,
})

const Person = mongoose.model('Person', personSchema)

if (process.argv.length === 3) {
  Person.find({}).then((result) => {
    result.forEach((result) => console.log(result))
    mongoose.connection.close()
  })
} else {
  const person = new Person({
    name,
    number,
  })

  person.save().then(() => {
    console.log(`Added ${name} number ${number} to phonebook`)
    mongoose.connection.close()
  })
}
