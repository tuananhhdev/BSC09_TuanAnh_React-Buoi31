import React, { Component } from "react";
import dataGlasses from "./dataGlasses.json";

export default class Glasses extends Component {
  state = {
    selectedGlasses: {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./glassesImage/v1.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  };

  handleChangeGlasses = (glasses) => {
    this.setState({ selectedGlasses: glasses });
  };

  renderGlassesList = () => {
    return dataGlasses.map((item, index) => {
      return (
        <img
          onClick={() => {
            this.handleChangeGlasses(item);
          }}
          key={index}
          className="ml-2 p-2 border border-width-1"
          style={{ width: "110px", cursor: "pointer" }}
          src={item.url}
          alt={item.name}
        />
      );
    });
  };

  render() {
    return (
      <div
        style={{
          backgroundImage: "url(./glassesImage/background.jpg)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          minHeight: "1000px",
        }}>
        <div
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            minHeight: "1000px",
          }}>
          <h3
            style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
            className="text-center text-light p-5">
            TRY GLASSES APP ONLINE
          </h3>
          <div className="container">
            <div className="row mt-5 text-center">
              <div className="col-6">
                <div className="position-relative">
                  <img
                    src="./glassesImage/model.jpg"
                    alt="model"
                    className="position-absolute"
                    style={{ width: "250px" }}
                  />
                  <img
                    src={this.state.selectedGlasses.url}
                    className="position-absolute"
                    style={{
                      width: "150px",
                      top: "75px",
                      right: "117px",
                      opacity: "0.7",
                    }}
                    alt="model"
                  />
                  <div
                    style={{
                      width: "250px",
                      top: "200px",
                      left: "318px",
                      paddingLeft: "15px",
                      backgroundColor: "rgba(255, 127, 0, 0.5)",
                      textAlign: "left",
                      height: "105px",
                    }}
                    className="position-relative">
                    <span
                      className="font-weight-bold"
                      style={{
                        fontSize: "17px",
                        color: "blue",
                      }}>
                      {this.state.selectedGlasses.name}
                    </span>
                    <br />
                    <span
                      style={{
                        fontSize: "14px",
                        fontWeight: "600",
                        paddingRight: "5px",
                        color: "white",
                      }}>
                      {this.state.selectedGlasses.desc}
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <img
                  src="./glassesImage/model.jpg"
                  alt="model"
                  style={{ width: "250px" }}
                />
              </div>
            </div>
          </div>
          <div className="bg-light container text-center mt-5 d-flex justify-content-center p-5">
            {this.renderGlassesList()}
          </div>
        </div>
      </div>
    );
  }
}
