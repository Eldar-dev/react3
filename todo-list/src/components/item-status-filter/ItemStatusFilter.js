import React, { Component } from "react";

import "./item-status-filter.css";

class ItemStatusFileter extends Component {
  render() {
    return (
      <div className="btn-group">
        <button className="btn btn-info active">All</button>
        <button className="btn btn-info">Active</button>
        <button className="btn btn-info">Done</button>
      </div>
    );
  }
}

export default ItemStatusFileter;
