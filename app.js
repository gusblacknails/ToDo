const express = require('express')
const session = require('express-session')
const bodyParser = require('body-parser')
const FileStore = require('session-file-store')(session)
const routes = require('./routes/index');

const app = express()
const PORT = 3000


app.set('view engine', 'pug')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(express.static(__dirname + '/public'));
app.use('/bower_components',  express.static(__dirname + '/bower_components'));
app.use(session({
  name: 'TodoList-session-id', // is the name of our cookie
  secret: 'secreckey', // created you secret word
  saveUninitialized: true,
  resave: true, // save in memory
  store: new FileStore() // and save into file
}))


app.use('/', routes)

// This route receives the posted form.
// As explained above, usage of 'body-parser' means
// that `req.body` will be filled in with the form elements
app.post('/', function(req, res){
  var userName = req.body.userName;
  var html = 'Hello: ' + userName + '.<br>' +
             '<a href="/">Try again.</a>';
  res.send(html);
});



app.listen(PORT, () => console.log(`🤘 On faia! PORT ${PORT}...`))