const mongoose = require("mongoose")

const story = mongoose.Schema({
     id: Number,
     by: String,
     title: String,
     score: String
})

module.exports = mongoose.model("Story", story)



let MongoClient = require('mongodb').MongoClient;

// Specify your local MongoDB instance
var url = "mongodb://localhost:27017/";


// Add a story 
app.post('/api/story', (req, res) => {
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("put database name here");
        dbo.collection("collection name here").insertOne({
            id: req.body.id,
            by: req.body.by,
            title: req.body.title,
            score: req.body.score
        }, 
        function(err, result) {
            if (err) throw err;
            res.json(result);
            db.close();
        });
    });
});
// Get all stories
app.get('/api/stories', (req, res) => {
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("put database name here");
        dbo.collection("collection name here").findOne({
            id: req.params.id,
            by: req.params.by,
            title: req.params.title,
            score: req.body.score
        }, 
        function(err, result) {
            if (err) throw err;
            res.json(result);
            db.close();
        });
    });
});

