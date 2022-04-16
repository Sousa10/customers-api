const express = require('express')
const app = express()

const customers = require('./routes/customer')

// parse json
app.use(express.json())

app.use('/api/customer', customers)
  
const port = 5000;
app.listen(port, () => console.log(`Server is listening port ${port}...`));