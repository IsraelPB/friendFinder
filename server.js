const bodyParser = require('body-parser');
const express = require("express");
const path = require("path");

let app = express();
let PORT = process.env.PORT || 8000;

app.use(bodyParser.urlencoded({extended: false})),
app.use(bodyParser.json())


//displays apiroutes before html routes
require('./app/routing/apiRoutes.js')(app)
require('./app/routing/htmlRoutes.js')(app)


app.listen(PORT, () => {
    console.log("El servidor esta escuchando en: http://localhost:" + PORT);
});