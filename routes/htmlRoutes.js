// Dependencies
const path = require("path");

// Handle HTML GET requests
module.exports = function(app) {
    app.get("/notes", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/notes.html"))
      })
    
      app.get("*", (req, res)=>{
        res.sendFile(path.join(__dirname, "../public/index.html"))
      })
    };
