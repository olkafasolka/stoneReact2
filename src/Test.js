import React, { Component } from "react";
import CardTest from "./CardTest";
import Loader from "./Loader";

class Test extends Component {
  constructor(props) {
    super(props);
    this.state = { people: null, isLoading: false };
  }
  componentDidMount() {
    this.setState({ isLoading: true });
    fetch("https://us-central1-react-mspm.cloudfunctions.net/api/people")
      .then(res => {
        return res.json();
      })
      .then(resp => {
        console.log(resp);

        this.setState({
          people: resp,
          isLoading: false
        });
      });
  }

  render() {
    return (
      <div>
        {this.state.isLoading && <Loader />}
        {this.state.people &&
          this.state.people.map(item => (
            <CardTest key={item.id} onePerson={item} />
          ))}
      </div>
    );
  }
}

export default Test;
