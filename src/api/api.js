import axios from "axios";

function getNewData(lat, lon) {
  return new Promise((res, rej) => {
    axios({
      method: "get",
      headers: {
        Authorization: "bearer ca476b90eb117bd560592e9c26967145"
      },
      url: `https://cors-anywhere.herokuapp.com/api.meetup.com/find/upcoming_events?&sign=true&photo-host=public&lon=${lat}&page=10&lat=${lon}`
    }).then(data => res(data));
  });
}

function getHostInfoData(eventId, url) {
  return new Promise((res, rej) => {
    axios({
      method: "get",
      headers: {
        Authorization: "bearer ca476b90eb117bd560592e9c26967145"
      },
      url: `https://cors-anywhere.herokuapp.com/api.meetup.com/${url}/events/${eventId}/hosts?&sign=true&photo-host=public`
    }).then(data => res(data));
  });
}

function getMapData() {
  return new Promise((res, rej) => {});
}
export { getMapData, getNewData, getHostInfoData };
