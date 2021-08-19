const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const fs = require("fs");



app.use(express.static(path.join(__dirname, 'static')));

let port = process.env.PORT || 3000;

app.use(bodyParser.json({}));

app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => console.log("App Started"));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'index.html'));
});