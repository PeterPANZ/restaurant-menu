import React, { Component } from "react";
import Home from "./Home";
import Category from "./Category";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      element: null
    };
  }

  handleContent = (elementName) => {
    this.setState({ element: elementName });
  };

  render() {
    const { element } = this.state;

    let elementComponent = null;
    if (element === "Home") {
      elementComponent = <Home />;
    } else if (element === "Category") {
      elementComponent = <Category />;
    }

    return (
      <div>
        <h2 className="title">1. Welcome to Chef Chu's Restaurant</h2>
        <div>
          <input
            type="button"
            value="Home"
            className="button"
            onClick={() => this.handleContent("Home")}
          />
          <input
            type="button"
            value="Categories"
            className="button"
            onClick={() => this.handleContent("Category")}
          />
        </div>
        { elementComponent }
      </div>
    );
  }
}

export default App;
