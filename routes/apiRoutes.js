// Dependencies
const db = require("../db/db.json");
const fs = require("fs");

// Routing
module.exports = function (app) {
    // GET Request
    app.get("/api/notes/", function (req, res) {
        res.json(db);
    });

    // POST Request
    app.post("/api/notes", function (req, res) {
        db.push(req.body);
    });
    
    fs.writeFile("./db/db,json", JSON.stringify(db), function () {
        res.json(db);
    })

}