// import modules
import express from 'express'
import { students } from './data/student-data.js'

// Create Express app
const app = express()

// configure the app (app.set)
app.set('view engine', 'ejs')


// Mount Middleware (app.use)


// Mount routes

// app.get('/home', function(req, res) {
//   res.render('home')
// })

app.get('/', function(req, res) {
  res.redirect ('/students')
})

// Tell the app to listen on port 3

app.listen(3000, function() {
  console.log ('Listening on port 3000')
})

app.get('/students', function(req, res) {
  res.render('students/index', {
    students: students
  })
})