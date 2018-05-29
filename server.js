const bodyParser = require('body-parser');
const flash = require('connect-flash');
const cookieParser = require('cookie-parser');
const express = require('express');
const session = require('express-session');

const routes = require('./routes/routes');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

// Sets up Express to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// used for storing flash messages. requires sessions and cookies.
app.use(cookieParser());
app.use(session({ secret: 'secret', cookie: { maxAge: 60000 } }));
app.use(flash());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

routes(app);

// starts the server
app.listen(PORT, function() {
  console.log('App listening on PORT: ' + PORT);
});
