var express = require('express')
var http = require('http')
var routes = require('./routes')
var methodOverride = require('method-override')
var bodyParser = require('body-parser')
var errorHandler = require('errorhandler')
var path = require('path')
//const layout = require('express-layout')
var app = express()
// esto cambio
app.set('port',8000)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')
app.use(methodOverride())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


/*const middleware = [
  layout(),
  express.static(path.join(__dirname, 'public')),
  bodyParser.urlencoded(),
]
app.use(middleware)
*/

//Routes
app.get('/', routes.getUsers)
app.post('/create', routes.createUser)

if (app.get('env') === 'development') {
  app.use(errorHandler())
}
var server = http.createServer(app)
server.listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'))
})

/*
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

app.listen(8080, () => {
  console.log(`App running at http://localhost:8080`)
})*/
