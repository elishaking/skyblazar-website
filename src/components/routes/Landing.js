//@ts-check
import React, { Component } from 'react';
import See from '../icons/See';
import './Landing.scss';

//components
import Navbar from '../layout/Navbar';

// assets
import art from '../../assets/images/art.svg';
import calcen from '../../assets/images/projects/CalcEn.svg';
import dizt from '../../assets/images/projects/Dizt.svg';
import gracelites from '../../assets/images/projects/Gracelites.svg';
import quotz from '../../assets/images/projects/Quotz.svg';
import ImageModal from '../ImageModal';

const projects = [
  {
    name: "CalcEn: Complex Calculator",
    source: calcen,
    description: "CalcEn is a complex number calculator for android that handles arithmetic of complex expressions, matrices and functions"
  },
  {
    name: "Gracelites International School",
    source: gracelites,
    description: "Gracelites is an outstanding Nursery/Primary committed to laying the crucial foundations that will set your child on the right path to all-round excellence spiritually, intellectually and physically"
  },
  {
    name: "Dizt: Navigation App",
    source: dizt,
    description: "Dizt is a simple and intuitive mobile app that enables you to determine the road distance between two locations and the exact travel time using your car, the bus, your bicycle or by walking. You also get to see the transport fare if you are using a bus along some routes"
  },
  {
    name: "Quotz: Quotes App",
    source: quotz,
    description: "Quotz is an elegant mobile app that displays several mindfully selected quotes in a simple and elegant interface that can be used as a screensaver. It contains words of wisdom from several great men and woman who have had a great impact on the world"
  },
];

export default class Landing extends Component {

  state = {
    showModal: false,
    modalImageSrc: '',
    modalImgCaption: '',
    modalImgDescription: ''
  };

  /**@param {React.MouseEvent} e */
  closeModal = (e) => {
    this.setState({ showModal: false });
  };

  // /** @param {React.MouseEvent} e */
  openModal = (e) => {
    const img = e.target.parentElement.getElementsByTagName('img')[0];
    this.setState({
      showModal: true,
      modalImageSrc: img.src,
      modalImgCaption: img.alt,
      modalImgDescription: img.dataset.description
    });
  };

  render() {
    const { showModal, modalImgCaption, modalImgDescription, modalImageSrc } = this.state;

    return (
      <div id="landing">
        <div className="home container">
          <Navbar />

          <div className="content">
            <div className="left">
              <h1>
                We build stunning websites, web apps and mobile apps
              </h1>

              <p>
                We are dedicated to giving your brand by building a unique and compelling digital presence
              </p>

              <a href="#contact">Start a Project</a>
            </div>

            <div className="right">
              <img src={art} alt="Web/App Design and Development" />
            </div>
          </div>
        </div>

        <div className="services container">
          <h2>WHAT WE DO</h2>


        </div>

        <div className="projects container">
          <h2>RECENT PROJECTS</h2>

          <div className="content">
            {
              projects.map((project) => (
                <div className="project">
                  <div className="image">
                    <div>
                      <img src={project.source} alt={project.name} data-description={project.description} />
                    </div>

                    <div className="hover" onClick={this.openModal}>
                      <See />
                    </div>
                  </div>

                  <a className="contributor" href="https://www.linkedin.com/in/elishaking/" rel="noopener noreferrer" target="_blank">
                    <small><strong>Contributor: </strong> Elisha King</small>
                  </a>

                  <a href="https://calcen.skyblazar.com" rel="noopener noreferrer" target="_blank">
                    {project.name}
                  </a>
                </div>
              ))
            }
          </div>
        </div>

        <div className="contact container">
          <h2>YOUR PROJECT</h2>

          <div className="categories">

          </div>

          <form method="POST">

          </form>
        </div>

        {
          showModal && (
            <ImageModal
              imgSrc={modalImageSrc}
              imgCaption={modalImgCaption}
              imgDescription={modalImgDescription}
              close={this.closeModal} />
          )
        }
      </div>
    )
  }
}
