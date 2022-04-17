const express = require('express')
const app = express()

const customers = require('./routes/customer')

// parse json
app.use(express.json())

app.use('/api/customer', customers)
app.use((req, res, next) => {
    res.status(404).send(
        "<h1>Page not found on the server</h1>")
})
  
const port = 5000;
app.listen(port, () => console.log(`Server is listening port ${port}...`));