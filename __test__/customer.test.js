const customers = require('../routes/customer')
const request = require('supertest')
const express = require('express')
let customersData = require('../data')

const app = express()


// parse json
app.use(express.json())

app.use('/api/customer', customers)

describe('Customers API', () => {
    test('GET /customers --> all customers', () => {
        return request(app)
            .get('/api/customer/')
            .expect('Content-Type', 'application/json; charset=utf-8')
            .expect(200)
            .then((response) => {
                expect(response.body).toEqual(
                    expect.objectContaining({
                        success: true,
                        data: expect.arrayContaining([
                            expect.objectContaining({
                                id: expect.any(Number),
                                name: expect.any(String),
                                surname: expect.any(String),
                                email: expect.any(String),
                                birthdate: expect.any(String),
                            })
                        ])
                    })
                )
            })
    })
    test('GET /customers --> Return no customers', () => {
        return request(app)
            .get('/api/customers/')
            .expect('Content-Type', 'text/html; charset=utf-8')
            .expect(404)
    })

    it('GET /customers/id --> specific customer by ID', () => {
        return request(app)
            .get('/api/customer/1')
            .expect('Content-Type', 'application/json; charset=utf-8')
            .expect(200)
            .then((response) => {
                expect(response.body).toEqual(
                    expect.objectContaining({
                        success: true,
                        data: expect.objectContaining({
                            id: expect.any(Number),
                            name: expect.any(String),
                            surname: expect.any(String),
                            email: expect.any(String),
                            birthdate: expect.any(String),
                        })
                    })
                )
            })
    })

    it('GET /customers/id --> 404 if specific customer not found', () => {
        return request(app)
            .get('/api/customer/9999')
            .expect('Content-Type', 'application/json; charset=utf-8')
            .expect(404)
            .then((response) => {
                expect(response.body).toEqual(
                    expect.objectContaining({
                        success: false,
                        msg: 'no customer with id 9999'
                    })
                )
            })
    })

    it('POST /customers --> create customer', () => {
        const data = { id: customersData.length + 1, name: "Lorem", surname: 'Ipsum', email: 'lorem@gmail.com', birthdate: '12/03/1994' };
        return request(app).post('/api/customer/').send(data)
            .expect('Content-Type', 'application/json; charset=utf-8')
            .expect(201)
            .then((response) => {
                expect(response.body).toEqual(
                    expect.objectContaining({
                        success: true,
                        data: data
                    })
                )
            })
    })

    it('PUT /customers/id --> update customer', async () => {
        console.log(newCustomer.response);
        return await request(app)
            .patch(`/api/customer/1`)
            .send({ name: "Lorem2" })
            .expect(200)
            .then((response) => {
                expect(response.body).toEqual(
                    expect.objectContaining({
                        success: true,
                        data: expect.arrayContaining([
                            expect.objectContaining({
                                id: expect.any(Number),
                                name: expect.any(String),
                                surname: expect.any(String),
                                email: expect.any(String),
                                birthdate: expect.any(String),
                            })
                        ])
                    })
                )
            })
    })

    it('DELETE /customers/id --> delete customer', () => {
        return request(app)
            .delete('/api/customer/1')
            .expect('Content-Type', 'application/json; charset=utf-8')
            .expect(200)
            .then((response) => {
                expect(response.body).toEqual(
                    expect.objectContaining({
                        success: true,
                        data: expect.arrayContaining([
                            expect.objectContaining({
                                id: expect.any(Number),
                                name: expect.any(String),
                                surname: expect.any(String),
                                email: expect.any(String),
                                birthdate: expect.any(String),
                            })
                        ])
                    })
                )
            })
    })
})