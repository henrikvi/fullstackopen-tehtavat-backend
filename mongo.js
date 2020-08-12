const mongoose = require('mongoose');

if (process.argv.length < 3) {
  console.log('Usage:')
  console.log('  retrieve all contacts: node mongo.js DBpassword')
  console.log('  add a contact: node mongo.js DBpassword "Contact Name" number')
  process.exit(1)
}

const password = process.argv[2]
const url = `mongodb+srv://notemanager_admin:${password}@cluster0-41b81.mongodb.net/phonebook?retryWrites=true&w=majority`

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const contactSchema = new mongoose.Schema({
  name: String,
  number: String
})

const Contact = mongoose.model('Contact', contactSchema)

const getAllContacts = () => {
  Contact.find({}).then(result => {
    console.log('Phonebook:')
    result.forEach(contact => console.log(contact.name, contact.number))

    mongoose.connection.close()
  })
}

const createContact = () => {
  const name = process.argv[3]
  const number = process.argv[4]

  const contact = new Contact({
    name: name,
    number: number
  })
  saveContact(contact)
}

const saveContact = (contact) => {
    contact.save().then(response => {
      console.log(`Added ${response.name}, number: ${response.number} to phonebook.`)
      mongoose.connection.close()
    })
}

if (process.argv.length === 3) {
  console.log('Retrieving all contacts')
  getAllContacts()
} else if (process.argv.length === 5) {
  console.log('Adding a contact')
  createContact()
}