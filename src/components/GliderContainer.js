//@ts-check
import React, { Component } from 'react';
import './GliderContainer.scss';

export default class GliderContainer extends Component {

  componentDidMount() {
    this.initializeGlider();
  }

  initializeGlider() {
    // @ts-ignore
    new window.Glider(document.querySelector(".glider"), {
      slidesToShow: 1,
      slidesToScroll: 1,
      draggable: true,
      dots: '#dots',
      arrows: {
        prev: '.glider-prev',
        next: '.glider-next'
      }
    });
  }

  render() {
    const { images } = this.props;

    return (
      <div className="glider-contain multiple gallery">
        <div className="glider">
          {
            images.map((image) => (
              <div className="img-slide">
                <img src={image.src} alt="" />
                <h3>{image.title}</h3>
                <p>{image.description}</p>
              </div>
            ))
          }
        </div>

        <button className="glider-prev">«</button>
        <button className="glider-next">»</button>
        <div role="tablist" className="dots"></div>
      </div>
    )
  }
}
