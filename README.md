# Customer data api
A node js api to manage customer data using express.js

To test the endpoints you can use POSTMAN - https://learning.postman.com/docs/getting-started/introduction/#testing-apis

Get all customers endpoint
http://localhost:5000/api/customer/ using GET method

Get a single customer
http://localhost:5000/api/customer/id where id should be an integer

Create a customer
http://localhost:5000/api/customer whith POST method and passing a customer object to the body

Update customer
http://localhost:5000/api/customer/id using PATCH method, passing id as a paramater and sending the the data to update to the body

Delete customer
http://localhost:5000/api/customer/id using DELETE method and passing id as a paramater
