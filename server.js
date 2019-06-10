// Dependencies:
const express = require('express');
const cookieParser = require('cookie-parser');

// Sets up the Express App:
const app = express();
const PORT = process.env.PORT || 3001;
console.log(`Port: ${PORT}`)

const routes = require("./routes");

// Requiring our models for syncing
const db = require('./models');

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({
  extended: true,
}));
app.use(express.json());

app.use(cookieParser());

// If the app is in production, then serve up client/build as static in express
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.use(routes);


// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, function () {
    console.log('App listening on PORT ' + PORT);
  });
});