const express = require('express')
const router = express.Router()

const {
    getCustomers,
    getCustomer,
    createCustomer,
    updateCustomer,
    deleteCustomer} = require('../controllers/customers')

    router.route('/').get(getCustomers).post(createCustomer)
    router.route('/:id').get(getCustomer).patch(updateCustomer).delete(deleteCustomer)
    
module.exports = router