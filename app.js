const express = require("express");
const bodyParser = require("body-parser");

/**
 * init app
 * @type {app}
 */
const app = express();

/**
 * middleware
 */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/**
 * view engine
 */
app.set('view engine', 'pug');
app.set('views', './views');

app.get("/", (req, res) => {
   res.render("index");
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
   console.log(`Server is running on ${port}`);
});