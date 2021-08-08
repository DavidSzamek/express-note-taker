// Dependencies
const express = require("express");
const path = require("path");

// Initialise PORT 
const PORT = process.env.PORT || 8080;

// Create an express server 
const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.urlencoded({ extended: true }))
app.use(express.json());

app.use(express.static('public'));

// Created routes that will serve up the correct pages for the user
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// Initialise server. If error, console.log the error. 
app.listen(PORT, (err) => {
    if (err) {
        console.log(err);
        return
    } 
    console.log(`Server is listening on port: ${PORT}`)
})

