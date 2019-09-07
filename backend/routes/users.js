const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/', function(req, res, next) {
  axios({
    method: 'get',
    headers: {
      Authorization: req.headers.authorization
    },
    url: `https://api.meetup.com/find/upcoming_events?&sign=true&qphoto-host=public&lon=${req.query.lon}&page=10&lat=${req.query.lat}`
  }).then(data => res.send(data.data));
});

router.get('/detail', function(req, res, next) {
  axios({
    method: 'get',
    headers: {
      Authorization: req.headers.authorization
    },
    url: `https://api.meetup.com/${req.query.url}/events/${req.query.eventId}/hosts?&sign=true&photo-host=public`
  }).then(data => res.send(data.data));
});

module.exports = router;
