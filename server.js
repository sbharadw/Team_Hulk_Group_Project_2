const express = require('express');
const exphbs = require('express-handlebars');

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 8080;


// Configure template Engine and Main Template File
app.engine('handlebars', exphbs({
  defaultLayout: 'main',
  extname: '.handlebars'
}));
// Setting template Engine
app.set('view engine', 'handlebars');

app.use(require('./controllers/html-routes.js'));
app.use(require('./controllers/item-api-routes.js'));
app.use(require('./controllers/order-api-routes.js'));
app.use(require('./controllers/user-api-routes.js'));

// Requiring our models for syncing
const db = require('./models');

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static('public'));

// Syncing our sequelize models and then starting our Express app
db.sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
});
