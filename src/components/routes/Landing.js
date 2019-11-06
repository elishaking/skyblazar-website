//@ts-check
import React, { Component } from 'react';
import See from '../icons/See';
import './Landing.scss';

//components
import Navbar from '../layout/Navbar';

// assets
import art from '../../assets/images/art.svg';
import calcen from '../../assets/images/projects/CalcEn.svg'
import ImageModal from '../ImageModal';

const projects = [
  {
    name: "CalcEn: Complex Calculator",
    source: calcen,
    description: "CalcEn is a complex number calculator that handles arithmetic of complex expressions, matrices and functions"
  },
  {
    name: "CalcEn: Complex Calculator",
    source: calcen,
    description: "CalcEn is a complex number calculator that handles arithmetic of complex expressions, matrices and functions"
  },
  {
    name: "CalcEn: Complex Calculator",
    source: calcen,
    description: "CalcEn is a complex number calculator that handles arithmetic of complex expressions, matrices and functions"
  },
  {
    name: "CalcEn: Complex Calculator",
    source: calcen,
    description: "CalcEn is a complex number calculator that handles arithmetic of complex expressions, matrices and functions"
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
                    CalcEn: Complex Calculator
              </a>
                </div>
              ))
            }
          </div>
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
