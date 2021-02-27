const express = require('express');
const exphbs = require('express-handlebars');
const session = require("express-session");
const passport = require("passport");
const bodyParser = require('body-parser');
// const helpers = require('handlebars-helpers')


// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 8080;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

// Sets up the Express app to handle data parsing
//app.use(express.urlencoded({ extended: true }));
//app.use(express.json());

// Configure template Engine and Main Template File
app.engine('handlebars', exphbs({
  defaultLayout: 'main',
  extname: '.handlebars',
}));
// Setting template Engine
app.set('view engine', 'handlebars');

app.use(
  session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());


app.use(require('./controllers/html-routes.js'));
app.use(require('./controllers/item-api-routes.js'));
app.use(require('./controllers/order-api-routes.js'));
app.use(require('./controllers/user-api-routes.js'));

// Requiring our models for syncing
const db = require('./models');

// Static directory
app.use(express.static('public'));


// Syncing our sequelize models and then starting our Express app
db.sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
});