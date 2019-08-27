import React, { Component } from 'react'
import "./Map.css";

export default class Favorites extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="favorites-container">
        즐겨찾기
      </div>
    )
  }
}
