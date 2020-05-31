const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 8000

app.set('view engine', 'ejs')
app.use('/assets', express.static('public'))
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.render('index.ejs')
})

app.post('/complete', (req, res) => {
  res.send({id: 1})
})

app.use((req, res, next) => {
  res.status(404).send('The page does not exist')
})
app.listen(port)