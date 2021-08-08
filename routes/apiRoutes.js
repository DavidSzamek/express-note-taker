// Dependencies
const db = require("../db/db.json");
const fs = require("fs");

// Routing
module.exports = function (app) {
    // GET Request
    app.get("/api/notes/", function(req, res) {
        res.json(note_data);
    });

    // POST request
    app.post("/api/notes", function (req, res) {
        db.push(req.body);

        
    })    
}