const express = require('express')
const checklistRouter = require('./src/routes/checklists')

const rootRouter = require('./src/routes/index')
const path = require('path')

require('./config/database')

const app = express()
app.use(express.urlencoded({extended: true}))

app.set('views', path.join(__dirname, 'src/view'))
app.set('view engine', 'ejs')

app.use(express.json())

app.use(express.static(path.join(__dirname, 'public')))

app.use('/', rootRouter)
app.use('/checklists', checklistRouter) //ou, app.use('/', checklistRouter)

app.listen(3000, () => {
    console.log('Servidor iniciado') 
})

