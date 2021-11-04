const express = require('express')
const app = express()
const checklistRouter = require('./src/routes/checklists')
require('./config/database')

app.use(express.json())

app.use('/checklists', checklistRouter) //ou, app.use('/', checklistRouter)

app.listen(3000, () => {
    console.log('Servidor iniciado') 
})

