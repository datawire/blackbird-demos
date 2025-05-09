var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var axios = require('axios');

var app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.get('/health', function (req, res, next) {
  res.send({ status: 200, message: "The service is healthy!" });
});

app.post('/chat', function (req, res, next) {
  axios.post(`${process.env.AI_URL}/chat/completions`,
    {
      "model": "o4-mini",
      "messages": [
        {
          "role": "system",
          "content": "You are a helpful assistant."
        },
        {
          "role": "user",
          "content": `${req.body.message}`
        }
      ]
    },
    {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.AI_KEY}`
      }
    })
    .then(response => {
      if (response.data.choices[0]) {
        const chatResponse = response.data.choices[0].message.content;
        //const chatResponse = "Response from a code run instance! I am debugging an issue right now...";

        res.send({ response: chatResponse, timestamp: new Date().toISOString() })
      } else {
        res.send({ response: `Error: no choices returned in the response`, timestamp: new Date().toISOString() })
      }
    })
    .catch(err => {
      console.log(err)
      res.send({ response: `Error: ${err}`, timestamp: new Date().toISOString() })
    })
});

module.exports = app;
