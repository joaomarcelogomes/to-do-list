const express = require('express')
const app = express()
const checklistRouter = require('./src/routes/checklists')
const rootRouter = require('./src/routes/index')
const path = require('path')

require('./config/database')

app.set('views', path.join(__dirname, 'src/view'))
app.set('view engine', 'ejs')

app.use(express.json())

app.use('/', rootRouter)
app.use('/checklists', checklistRouter) //ou, app.use('/', checklistRouter)

app.listen(3000, () => {
    console.log('Servidor iniciado') 
})

