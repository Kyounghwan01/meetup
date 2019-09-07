import axios from 'axios';

function getNewData(lon, lat) {
  return new Promise((res, rej) => {
    axios({
      method: 'get',
      headers: {
        Authorization: 'bearer 54b6b542be3b3b58f6aea6f4592cf12f'
      },
      url: `http://localhost:8080/?lon=${lon}&lat=${lat}`
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
      method: 'get',
      headers: {
        Authorization: 'bearer 54b6b542be3b3b58f6aea6f4592cf12f'
      },
      url: `http://localhost:8080/detail/?url=${url}&eventId=${eventId}`
    })
      .then(data => res(data))
      .catch(function(err) {
        rej(err);
      });
  });
}

export { getNewData, getHostInfoData };
