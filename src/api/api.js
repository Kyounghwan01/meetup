import axios from "axios";

function getNewData(lon, lat) {
  return new Promise((res, rej) => {
    axios({
      method: "get",
      headers: {
        Authorization: "bearer 54b6b542be3b3b58f6aea6f4592cf12f"
      },
      url: `https://cors-anywhere.herokuapp.com/api.meetup.com/find/upcoming_events?&sign=true&qphoto-host=public&lon=${lon}&page=10&lat=${lat}`
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
        Authorization: "bearer 54b6b542be3b3b58f6aea6f4592cf12f"
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
