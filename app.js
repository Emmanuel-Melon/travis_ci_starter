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
app.get("/", (req, res) => {
   res.send("hello, elasticbeanstalk");
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
   console.log(`Server is running on ${port}`);
});