import React, { Component } from "react";
import Favorites from "./Favorites";
import "./Map.css";

export default class Map extends Component {
  constructor(props) {
    super(props);
    this.checkContainer = React.createRef();
    this.state = {
      initLat: "126.997616",
      initLon: "37.519245"
    };
  }
  componentDidMount() {
    this.getDataFunc(this.state.initLat, this.state.initLon);
    this.mapSetUp();
  }

  mapSetUp = () => {
    const that = this;

    this.mapOption = {
      center: new window.kakao.maps.LatLng(
        this.state.initLon,
        this.state.initLat
      ),
      level: 7
    };

    this.map = new window.kakao.maps.Map(
      this.checkContainer.current,
      this.mapOption
    );

    var mapTypeControl = new window.kakao.maps.MapTypeControl();
    this.map.addControl(
      mapTypeControl,
      window.kakao.maps.ControlPosition.TOPRIGHT
    );

    var zoomControl = new window.kakao.maps.ZoomControl();
    this.map.addControl(zoomControl, window.kakao.maps.ControlPosition.RIGHT);

    window.kakao.maps.event.addListener(this.map, "dragend", function() {
      let center = that.map.getCenter();
      that.setState({ initLat: center.Ga, initLon: center.Ha });
      that.getDataFunc(center.Ga, center.Ha);
    });
  };

  getDataFunc = async (initLat, initLon) => {
    await this.props.onNewLoad(initLat, initLon);

    for (let i = 0; i < this.props.meetupData.length; i++) {
      this.props.hostInfoLoad(
        this.props.meetupData[i].id,
        this.props.meetupData[i].group.urlname
      );
    }
  };

  componentDidUpdate() {
    const that = this;
    this.mapOption = {
      center: new window.kakao.maps.LatLng(
        this.state.initLon,
        this.state.initLat
      ),
      level: 7
    };

    setTimeout(function() {
      var position = that.props.meetupData.map(list => {
        return {
          content: `
                <div class="info">
                    <div class="title">
                        <span class="marker-name">${list.name}</span>
                    </div>
                    <div class="body">
                        <div class="img">
                            <img src="${list.hostImg}" width="73" height="70">
                       </div>
                        <div class="desc">
                            <div class="ellipsis">${list.group.name}</div>
                            <div class="jibun ellipsis">날짜 : ${list.local_date} 시간 : ${list.local_time} </div>
                            <div class="jibun ellipsis">주최자 : ${list.hostName}</div>
                            <div class="jibun ellipsis">참여 확정 인원 : ${list.yes_rsvp_count}</div>
                            <div class="desc-event">
                              <div><a href=${list.link} target="_blank" class="link">상세보기</a></div>
                              <div onclick="testFunc()">즐겨찾기 </div>
                            </div>
                        </div>
                    </div>
                </div>
            `,
          latlng: new window.kakao.maps.LatLng(list.venue.lat, list.venue.lon)
        };
      });

      for (let i = 0; i < position.length; i++) {
        var marker = new window.kakao.maps.Marker({
          map: that.map,
          position: position[i].latlng
        });

        var infowindow = new window.kakao.maps.InfoWindow({
          content: position[i].content,
          removable: true
        });

        window.kakao.maps.event.addListener(
          marker,
          "click",
          that.makeClickListener(that.map, marker, infowindow)
        );
      }
    }, 500);
  }

  makeClickListener = (map, marker, infowindow) => {
    return function() {
      infowindow.open(map, marker);
    };
  };

  render() {
    const Mapstyle = {
      width: "100vw",
      height: "80vh"
    };
    return (
      <div className="header">
        <span className="header-title">header</span>
        <div className="App" ref={this.checkContainer} style={Mapstyle}></div>
        <Favorites data={this.props.meetupData}></Favorites>
      </div>
    );
  }
}
