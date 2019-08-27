import Map from "../components/Map";
import { connect } from "react-redux";
import { getNewData, getHostInfoData } from "../api/api";
import { initalMeetupData, getHostData } from "../actions";

const mapStateToProps = state => {
  state.meetupData = state.meetupData.filter(el => {
    return el.venue;
  });

  console.log(state);
  if (state.hostData.length === state.meetupData.length) {
    state.meetupData.map((list, index) => {
      if (state.hostData[index].photo === undefined) {
        return (state.hostData[index]["photo"] = {
          photo_link: "http://cfile181.uf.daum.net/image/250649365602043421936D"
        });
      }
      list["hostName"] = state.hostData[index].name;
      list["hostImg"] = state.hostData[index].photo.photo_link;
    });
  }

  return {
    meetupData: state.meetupData,
    hostData: state.hostData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onNewLoad: (lat, lon) => {
      return new Promise((resolve, reject) => {
        getNewData(lat, lon)
          .then(res => {
            dispatch(initalMeetupData(res));
          })
          .then(data => resolve(data));
      });
    },
    hostInfoLoad: (id, url) => {
      return new Promise((resolve, reject) => {
        getHostInfoData(id, url)
          .then(res => {
            dispatch(getHostData(res));
          })
          .then(data => resolve(data));
      });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Map);
