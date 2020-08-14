require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const Contact = require('./models/contact')

const app = express()

// a custom token to display the body of http POST requests
morgan.token('post-body', (req, res) => {
    if (req.method === 'POST' && req.body) {
        return JSON.stringify(req.body)
    }
})

app.use(cors())
app.use(express.static('build'))
app.use(express.json())
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :post-body'))


app.get('/info', (req, res) => {
    Contact.estimatedDocumentCount().then(count => {
        res.send(`Phonebook has info for ${count} people. <br/><br/>${new Date()}`)
    })
})

app.get('/api/persons', (req, res) => {
    Contact.find({}).then(result => {
        res.json(result)
    })
})

app.get('/api/persons/:id', (req, res) => {
    Contact.findById(req.params.id).then(person => {
        if (person) {
            res.json(person)
        } else {
            res.status(404).end()
        }
    })
})

app.delete('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    persons = persons.filter(person => person.id !== id)

    res.status(204).end()
})

app.post('/api/persons', (req, res) => {

    const body = req.body
    
    if (!body.name || !body.number) {
        return res.status(400).json({
            error: 'request must contain a name and a number'
        })
    }

    const contact = new Contact({
        name: body.name,
        number: body.number
    })

    contact.save()
    .then(result => {
        res.json(result)
        console.log('new contact added')
    })
    .catch(error => console.log('Error saving contact: ', error))
})

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`Phonebook server running on port ${PORT}`)
})