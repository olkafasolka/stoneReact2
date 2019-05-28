import React, { Component } from "react";
import "./CardCSS.css";
import { withRouter } from "react-router-dom";

class Card extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div class="card" style={{ width: "18rem" }}>
        <img src={this.props.imgSrc} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{this.props.title}</h5>
          <p class="card-text">{this.props.description}</p>
          <a href="#" class="btn btn-outline-dark">
            See more
          </a>
        </div>
      </div>
    );
  }
}

export default withRouter(Card);
