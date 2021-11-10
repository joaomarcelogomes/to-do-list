const express = require('express')
const methodOverride = require('method-override')
const checklistRouter = require('./src/routes/checklists')
const taskRouter = require('./src/routes/task')
const rootRouter = require('./src/routes/index')
const path = require('path')

require('./config/database')

const app = express()
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method', {methods: ['POST', 'GET']}))

app.set('views', path.join(__dirname, 'src/view'))
app.set('view engine', 'ejs')

app.use(express.json())

app.use(express.static(path.join(__dirname, 'public')))

app.use('/', rootRouter)
app.use('/checklists', checklistRouter)
app.use('/checklists', taskRouter.checklistDependent)
app.use('/tasks', taskRouter.simple)

app.listen(3000, () => {
    console.log('Servidor iniciado') 
})

