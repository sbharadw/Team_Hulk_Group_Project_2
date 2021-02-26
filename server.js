const express = require('express');
const exphbs = require('express-handlebars');
const session = require("express-session");
const passport = require("./config/passport");
const bodyParser = require('body-parser');
// const helpers = require('handlebars-helpers')

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 8080;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

// Configure template Engine and Main Template File
app.engine('handlebars', exphbs({
  defaultLayout: 'main',
  extname: '.handlebars',
}));
// Setting template Engine
app.set('view engine', 'handlebars');

app.use(require('./controllers/html-routes.js'));
app.use(require('./controllers/item-api-routes.js'));
app.use(require('./controllers/order-api-routes.js'));
app.use(require('./controllers/user-api-routes.js'));

// Requiring our models for syncing
const db = require('./models');

// Static directory
app.use(express.static('public'));

// We need to use sessions to keep track of our user's login status
app.use(
  session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());

// Syncing our sequelize models and then starting our Express app
db.sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
});
