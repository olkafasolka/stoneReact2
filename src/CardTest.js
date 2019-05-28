import React, { Component } from "react";
import "./CardCSS.css";
import { withRouter, Link } from "react-router-dom";

class CardTest extends Component {
  render() {
    const { onePerson } = this.props;
    return (
      <div className="card" style={{ width: "18rem" }}>
        <img src={onePerson.picture} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">
            {onePerson.firstName + " " + onePerson.lastName}
          </h5>
          <p className="card-text">{onePerson.position}</p>

          <Link to={`/Test/${onePerson.id}`} className="btn btn-outline-dark">
            See more
          </Link>
        </div>
      </div>
    );
  }
}

export default withRouter(CardTest);
