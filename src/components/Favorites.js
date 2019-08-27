import React, { Component } from "react";
import "./Map.css";

export default class Favorites extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favoriteData: [],
      test: []
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
    const addList = this.state.favoriteData.map((list, index) => {
      console.log(list);
      return (
        <div className="favorites-block" key={list.id} data-id={list.id}>
          <div className="favorites-desc">
            <p>{list.name}</p>
            <div>
              {list.local_date} / {list.local_time}
            </div>
          </div>
          <div
            className="favorites-btn"
            onClick={e => {
              let index = e.currentTarget.parentNode.dataset.id;
              localStorage.removeItem(index);
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
              <p>{list.name}</p>
              <div>
                {list.local_date} / {list.local_time}
              </div>
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
              }}
            >
              <span>추가</span>
            </div>
          </div>
        );
      }
    );
    return (
      <>
        <h3>즐겨찾기 목록</h3>
        <div className="favorites-container">
          <div className="left">
            <div className="favorites-list-title">
              <span>추가 가능 즐겨찾기 목록</span>
            </div>
            {unaddedFavoritesList}
          </div>
          <div className="right">
            <div className="favorites-list-title">
              <span>즐겨찾기 목록</span>
            </div>
            <div>{addList}</div>
          </div>
        </div>
      </>
    );
  }
}
