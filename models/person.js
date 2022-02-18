const mongoose = require('mongoose')

const url = process.env.MONGODB_URI
console.log('connecting to MongoDB:', url)

mongoose
  .connect(url)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log('Error connecting to MongoDB: ', err.message))

const personSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, '{Path} is a required field'],
    unique: true,
    minLength: [3, 'Minimum length of {PATH} should be 3'],
    lowercase: true,
  },
  number: {
    type: String,
    validate: {
      validator: (v) => /^(\d{8,}|\d{2}-\d{6,}|\d{3}-\d{5,})/.test(v),
      message: 'Please enter a valid phone number',
    },
    required: true,
    unique: true,
  },
})

personSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  },
})

// personSchema.post('save', (error, doc, next) => {
//   if (error.name === 'MongoServerError' && error.code === 11000) {
//     error.message = `The contact ${doc.name} already exists`
//     return next(error)
//   }

//   if (error.errors.name.kind === 'minlength') {
//     error.message = `${error.errors.name.path} should be longer than 3 characters`
//     return next(error)
//   }

//   next()
// })

module.exports = mongoose.model('Person', personSchema)
