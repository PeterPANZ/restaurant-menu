import React, { Component } from "react";
import axios from "axios";
import Detail from "./Detail";

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detailLoading: false,
      list: null,
      detail: null,
      errMes: null
    }
  }

  componentDidMount() {
    axios
      .get("https://stream-restaurant-menu-svc.herokuapp.com/category")
      .then(res => {
        this.setState({ list: res.data });
      })
      .catch(err => {
        this.setState({ errMes: "there is an err to get menu" });
      });
  }

  handleClick = (shortName) => {
    this.setState({ detailLoading: true }, () => {
      axios
        .get(
          `https://stream-restaurant-menu-svc.herokuapp.com/item?category=${shortName}`
        )
        .then(res => {
          this.setState({ detail: res.data });
          this.setState({ detailLoading: false });
        })
        .catch(err => {
          this.setState({ errMes: "there is an error to load details" });
        });
    });
  }

  render() {
    const { detailLoading, list, detail, errMes } = this.state;

    return (
      <div>
        <div className="page">
          <div className="list">
            <h3>Menu Categories</h3>
            <ul>
              {errMes ? (
                <div>{errMes}</div>
              ) : list === null ? (
                <div>...isLoading</div>
              ) : (
                list.map((elem, index) => {
                  return (
                    <li
                      key={index}
                      onClick={() => this.handleClick(elem.short_name)}
                    >
                      {`${elem.name} - (${elem.short_name})`}
                    </li>
                  );
                })
              )}
            </ul>
          </div>
          <div className="detail">
            <h3>Detail</h3>
            <Detail menu={detail} errMes={errMes} isLoading={detailLoading} />
          </div>
        </div>
      </div>
    );
  }
}

export default Category;
