const express = require('express')
const exphbs = require('express-handlebars')
const path = require("path");
const router = require('./router/users')
const PORT = process.env.PORT || 7000

const app = express()
const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')
app.use(express.static(path.join(__dirname, 'public')))

app.use(express.urlencoded({ extended: true }))
app.use(router)

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})