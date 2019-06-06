const express = require("express");
const bodyParser = require("body-parser");

module.exports = app => {
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.set('view engine', 'pug');
    app.set('views', './views');
    app.use(express.static(path.join(__dirname, '/public')));
};