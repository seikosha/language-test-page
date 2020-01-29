// connect dependencies and libraries
const dotenv = require('dotenv');
dotenv.config();

var path = require('path');
const express = require('express');
const mockAPIResponse = require('./mockAPI.js');
const cors = require('cors');
const bodyParser = require('body-parser');
var AYLIENTextAPI = require('aylien_textapi');

//initiate SDK
var textapi = new AYLIENTextAPI({
  application_id: process.env.API_ID,
  application_key: process.env.API_KEY
});

//variables
let projectData = {};

//set up instances of apps
const app = express();
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('dist'))

//initiate routes
app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

app.post('/language', function(req, res) {
    console.log(req);
    const textUser = req.body.text;

    textapi.language({text: textUser}, function(error, response) {
      if (error === null) {
        projectData['language'] = response;

        res.status(200).send(projectData);
        console.log(projectData)
      } else {
        console.log(error)
      }
    });
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
