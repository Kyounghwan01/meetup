import axios from "axios";

function getNewData(lat, lon) {
  return new Promise((res, rej) => {
    axios({
      method: "get",
      headers: {
        Authorization: "bearer b52d4dc00d0b201c256b3abd9aa046bc"
      },
      url: `https://cors-anywhere.herokuapp.com/api.meetup.com/find/upcoming_events?&sign=true&photo-host=public&lon=${lat}&page=10&lat=${lon}`
    })
      .then(data => res(data))
      .catch(function(err) {
        rej(err);
      });
  });
}

function getHostInfoData(eventId, url) {
  return new Promise((res, rej) => {
    axios({
      method: "get",
      headers: {
        Authorization: "bearer b52d4dc00d0b201c256b3abd9aa046bc"
      },
      url: `https://cors-anywhere.herokuapp.com/api.meetup.com/${url}/events/${eventId}/hosts?&sign=true&photo-host=public`
    })
      .then(data => res(data))
      .catch(function(err) {
        rej(err);
      });
  });
}

export { getNewData, getHostInfoData };
