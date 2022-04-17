let customers = require('../data')

const getCustomers = ((req, res) => {
    res.status(200).json({success: true, data: customers})
})

const getCustomer = ((req, res) => {
    const singleCustomer = customers.find((customer) => customer.id === Number(req.params.id))
    if (!singleCustomer) {
        return res.status(404).json({ success: false, msg: `no customer with id ${req.params.id}`})
    }
    res.status(200).json({success: true, data: singleCustomer})
})

const createCustomer = ((req, res) => {
    //const { name, surname, email, birthdate } = req.body
    const { body } = req
    if (!body.name || !body.surname || !body.email || !body.birthdate) {
        return res.status(400).json({ success: false, msg: 'please provide all the required information' })
    }
    const newCustomer = {
        id: customers.length + 1,
        name: body.name,
        surname: body.surname,
        email: body.email,
        birthdate: body.birthdate
    }
    customers.push(newCustomer)
    res.status(201).json({success: true, data: newCustomer})
})

const updateCustomer = ((req, res) => {
const { id } = req.params
const { name, surname, email, birthdate } = req.body

const customer = customers.find((customer) => customer.id === Number(id))

if (!customer) {
    return res.status(404).json({ success: false, msg: `no customer with id ${id}`})
}
const newCustomers = customers.map((customer) => {
    if (customer.id === Number(id)) {
    customer.name = name
    customer.surname = surname
    customer.email = email
    customer.birthdate = birthdate
    }
    return customer
    })
    res.status(200).json({ success: true, data: newCustomers })
})

const deleteCustomer = ((req, res) => {
    const customer = customers.find((customer) => customer.id === Number(req.params.id))

    if (!customer) {
        return res.status(404).json({ success: false, msg: `no customer with id ${req.params.id}`})
    }
    const newCustomers = customers.filter((customer) => customer.id !== Number(req.params.id))
    return res.status(200).json({ success: true, data: newCustomers })
})

module.exports = {
    getCustomers,
    getCustomer,
    createCustomer,
    updateCustomer,
    deleteCustomer
}