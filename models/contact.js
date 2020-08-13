const mongoose = require('mongoose')

const url = process.env.MONGODB_URI
console.log(`Connecting to ${url}`)

mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(result => console.log('...Connected to MongoDB'))
    .catch(error => console.log('Error connecting: ', error))

const contactSchema = new mongoose.Schema({
    name: String,
    number: String
})

// add a transform function to be called when toJSON is run
// this is used to clean up the output before sending it forward
contactSchema.set('toJSON', {
    transform: (doc, ret) => {
        ret.id = ret._id.toString()
        delete ret._id
        delete ret.__v

        return ret
    }
})

module.exports = mongoose.model('Contact', contactSchema)