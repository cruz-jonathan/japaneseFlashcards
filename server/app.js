const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

/* Word Models */
const Adjective = require('./models/adjectives.model');
const Adverb = require('./models/adverb.model');
const Colour = require('./models/colours.model');
const Expression = require('./models/expressions.model');
const Noun = require('./models/nouns.model');
const Verb = require('./models/verbs.model');
const Time = require('./models/time.model');

const app = express();
app.use(bodyParser.json());
const router = express.Router();

//Connect to mongoDb database
mongoose.connect('mongodb+srv://admin:passwordpassword@cluster0.iftmg.mongodb.net/japaneseDictionary?retryWrites=true&w=majority')
    .then(() => {
        console.log("Connected to Database")
    })
    .catch(() => {
        console.log("Connection Failed")
    });

//test
app.get('/test', (req, res, next) => {
    res.send({express: 'Hello from Express'});
});

app.get('/dictionary/verbs', (req, res, next) => {
    Verb.find().then(documents=>{
        res.send({
            verbs: documents
        })
    });
})

module.exports = app;