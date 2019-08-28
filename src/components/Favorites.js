import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Map.css";

export default class Favorites extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favoriteData: []
    };
  }
  componentDidMount() {
    for (let i = 0; i < localStorage.length; i++) {
      this.setState({
        favoriteData: (this.state.favoriteData = this.state.favoriteData.concat(
          JSON.parse(localStorage.getItem(Object.keys(localStorage)[i]))
        ))
      });
    }
  }

  render() {
    const addList = this.state.favoriteData.map(list => {
      return (
        <div className="favorites-block" key={list.id} data-id={list.id}>
          <div className="favorites-desc">
            <p className="favorites-title">{list.name}</p>
            <p>
              {list.local_date} / {list.local_time}
            </p>
          </div>
          <div
            className="favorites-btn"
            onClick={e => {
              let index = e.currentTarget.parentNode.dataset.id;
              localStorage.removeItem(index);
              var fi = this.state.favoriteData.findIndex(function(el) {
                return el.id === index;
              });
              var slice = this.state.favoriteData.slice();
              slice.splice(fi, 1);
              this.setState({ favoriteData: slice });
            }}
          >
            <span>제거</span>
          </div>
        </div>
      );
    });

    const unaddedFavoritesList = this.props.location.state.lists.map(
      (list, index) => {
        return (
          <div className="favorites-block" key={list.id} data-id={index}>
            <div className="favorites-desc">
              <p className="favorites-title">{list.name}</p>
              <p>
                {list.local_date} / {list.local_time}
              </p>
            </div>
            <div
              className="favorites-btn"
              onClick={e => {
                let index = e.currentTarget.parentElement.dataset.id;
                localStorage.setItem(
                  this.props.location.state.lists[index].id,
                  JSON.stringify(this.props.location.state.lists[index])
                );
                this.setState({
                  favoriteData: (this.state.favoriteData = this.state.favoriteData.concat(
                    JSON.parse(
                      localStorage.getItem(
                        Object.keys(localStorage)[localStorage.length - 1]
                      )
                    )
                  ))
                });
                e.currentTarget.style = "display : none"
              }}
            >
              <span>추가</span>
            </div>
          </div>
        );
      }
    );
    return (
      <div className="favorites-container">
        <div className="header">
          <img
            alt="logo"
            className="logo"
            src="https://secure.meetupstatic.com/s/img/5455565085016210254/logo/svg/logo--script.svg"
          ></img>
          <NavLink
            to={{
              pathname: "/"
            }}
            className="go-to-home"
          >
            <span>홈</span>
          </NavLink>
        </div>
        <div className="favorites-unadd">
          <div className="favorites-list-title"></div>
          {unaddedFavoritesList}
        </div>
        <div className="favorites-add">
          <div>{addList}</div>
        </div>
        <div className="footer">
          <span>바닐라코딩 front-end test</span>
        </div>
      </div>
    );
  }
}
