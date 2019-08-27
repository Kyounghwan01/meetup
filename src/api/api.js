import axios from "axios";

function getNewData(lat, lon) {
  return new Promise((res, rej) => {
    axios({
      method: "get",
      headers: {
        Authorization: "bearer fd9c6fb1c849eeff13b6a9134d2f482d"
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
        Authorization: "bearer fd9c6fb1c849eeff13b6a9134d2f482d"
      },
      url: `https://cors-anywhere.herokuapp.com/api.meetup.com/${url}/events/${eventId}/hosts?&sign=true&photo-host=public`
    }).then(data => res(data));
  });
}

function getMapData() {
  return new Promise((res, rej) => {});
}
export { getMapData, getNewData, getHostInfoData };
