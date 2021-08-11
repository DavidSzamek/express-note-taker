// Dependencies
const db = require("../db/db.json");
const fs = require("fs");

// Routing
module.exports = function (app) {
    // GET Request
    app.get("/api/notes", function (req, res) {
        res.json(db);
    });

    // POST Request
    app.post("/api/notes", function (req, res) {
        db.push(req.body);

        db.forEach((obj, i) => {
            obj.id = i +1;
        });

        fs.writeFile("./db/db.json", JSON.stringify(db), function () {
            res.json(db);
        });
    });

      // DELETE Request
      app.delete("/api/notes/:id", function (req, res) {
        const id = req.params.id;

        db.splice(id - 1, 1);

        db.forEach((obj, i) => {
            obj.id = i + 1;
        });

        fs.writeFile("./db/db.json", JSON.stringify(db), function () {
            res.json(db);
        });
    });
};