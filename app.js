const express = require('express')

const app = express()

const checklistRouter = require('./src/routes/checklists')

app.use(express.json())

app.use(checklistRouter) //ou, app.use('/checklists', checklistRouter)

app.listen(3000, () => {
    console.log('Servidor iniciado') 
})

