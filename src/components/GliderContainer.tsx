//@ts-check
import React, { Component } from "react";
import "./GliderContainer.scss";

interface Slide {
  title: string;
  src: string;
  description: string;
}

interface GliderContainerProps {
  slides: Slide[];
}

export default class GliderContainer extends Component<GliderContainerProps> {
  componentDidMount() {
    this.initializeGlider();
  }

  initializeGlider() {
    // @ts-ignore
    new window.Glider(document.querySelector(".glider"), {
      slidesToShow: 1,
      slidesToScroll: 1,
      draggable: true,
      dots: "#dots",
      arrows: {
        prev: ".glider-prev",
        next: ".glider-next"
      }
    });
  }

  render() {
    const { slides } = this.props;

    return (
      <div className="glider-contain multiple gallery">
        <div className="glider">
          {slides.map(slide => (
            <div className="img-slide">
              <img src={slide.src} alt="" />
              <h3>{slide.title}</h3>
              <p>{slide.description}</p>
            </div>
          ))}
        </div>

        <button className="glider-prev">«</button>
        <button className="glider-next">»</button>
        <div role="tablist" className="dots"></div>
      </div>
    );
  }
}
