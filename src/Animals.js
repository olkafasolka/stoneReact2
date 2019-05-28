import React, { Component } from "react";
import Card from "./Card";
import "./Animals.css";

class Animals extends Component {
  data = [
    {
      id: 1,
      name: "Cat",
      link: "./cat-4199084_640.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget aliquam libero. Nullam eget eros scelerisque, porttitor tortor in, commodo orci. Sed vitae consectetur libero. Nam cursus eu dolor sit amet tempus. Vestibulum dictum massa et ante ultricies, ut pellentesque lorem bibendum."
    },
    {
      id: 2,
      name: "Dog",
      link: "./dog-4203184_640.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget aliquam libero. Nullam eget eros scelerisque, porttitor tortor in, commodo orci. Sed vitae consectetur libero. Nam cursus eu dolor sit amet tempus. Vestibulum dictum massa et ante ultricies, ut pellentesque lorem bibendum."
    },
    {
      id: 3,
      name: "Sheep",
      link: "./sheep-4196562_640.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget aliquam libero. Nullam eget eros scelerisque, porttitor tortor in, commodo orci. Sed vitae consectetur libero. Nam cursus eu dolor sit amet tempus. Vestibulum dictum massa et ante ultricies, ut pellentesque lorem bibendum."
    },
    {
      id: 4,
      name: "Cow",
      link: "./cow-1715829_640.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget aliquam libero. Nullam eget eros scelerisque, porttitor tortor in, commodo orci. Sed vitae consectetur libero. Nam cursus eu dolor sit amet tempus. Vestibulum dictum massa et ante ultricies, ut pellentesque lorem bibendum."
    },
    {
      id: 5,
      name: "Alpaca",
      link: "./alpaca-4173060_640.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget aliquam libero. Nullam eget eros scelerisque, porttitor tortor in, commodo orci. Sed vitae consectetur libero. Nam cursus eu dolor sit amet tempus. Vestibulum dictum massa et ante ultricies, ut pellentesque lorem bibendum."
    }
  ];

  render() {
    return (
      <div className="resContainer">
        {this.data.map(v => {
          return (
            <div
              onClick={e => {
                this.props.history.push(`/Animals/${v.id}`);
              }}
            >
              <Card
                title={v.name}
                imgSrc={v.link}
                description={v.description}
              />
            </div>
          );
        })}
      </div>
    );
  }
}

export default Animals;
