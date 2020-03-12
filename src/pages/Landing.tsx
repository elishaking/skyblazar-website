//@ts-check
import React, { Component } from "react";
import axios from "axios";
import See from "../components/icons/See";
import "./Landing.scss";

// image assets
// import art from "../../assets/images/art.svg";
import website from "../../assets/images/services/website.svg";
// import desktop from '../../assets/images/services/desktop.svg';
import mobile from "../../assets/images/services/mobile.svg";
import ux from "../../assets/images/services/ux.svg";

//components
import Navbar from "../components/layout/Navbar";
import ImageModal from "../components/ImageModal";
import TextInput from "../components/form/TextInput";
import Spinner from "../components/Spinner";
import GliderContainer from "../components/GliderContainer";
import Button from "../components/Button";

import projects from "../data/projects";

interface Errors {
  email: string;
  name: string;
  phone: string;
  title: string;
  description: string;
}

export default class Landing extends Component {
  state = {
    showModal: false,
    modalImageSrc: "",
    modalImgCaption: "",
    modalImgDescription: "",

    name: "",
    email: "",
    phone: "",
    title: "",
    description: "",

    errors: {} as Errors,
    loading: false
  };

  closeModal = e => {
    this.setState({ showModal: false });
  };

  openModal = e => {
    const img = e.target.parentElement.getElementsByTagName("img")[0];
    this.setState({
      showModal: true,
      modalImageSrc: img.src,
      modalImgCaption: img.alt,
      modalImgDescription: img.dataset.description
    });
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();

    const { name, email, phone, title, description } = this.state;
    const formData = {
      name,
      email,
      phone,
      title,
      description
    };
    const { errors, isValid } = this.validateInput(formData);
    this.setState({ errors });

    if (isValid) {
      this.setState({ loading: true });

      axios.post("https://express.skyblazar.com/project").then(res => {
        console.log(res.data);
        this.setState({ loading: false });
      });
    }
  };

  /** @param {{name: string, email: string, phone: string, title: string,  description: string,}} formData */
  validateInput = formData => {
    const errors = {} as Errors;

    if (formData.name === "") errors.name = "Your name is required";
    else if (formData.name.length < 5 || formData.name.length > 30)
      errors.name = "Your name should be between 5-30 characters";

    if (formData.email === "") errors.email = "Your email is required";
    else if (
      !new RegExp(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      ).test(formData.email)
    )
      errors.email = "Please enter a valid email";
    else if (formData.email.length < 5 || formData.email.length > 30)
      errors.email = "Your email should be between 5-30 characters";

    if (formData.phone.length > 30)
      errors.phone = "Your phone number should be less than 30 characters";
    else if (
      formData.phone !== "" &&
      !new RegExp(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/).test(
        formData.phone
      )
    )
      errors.phone = "Please enter a valid phone number";

    if (formData.title === "") errors.title = "Your project needs a title";
    else if (formData.title.length < 5 || formData.title.length > 30)
      errors.title = "Your title should be between 5-30 characters";

    if (formData.description.length > 300)
      errors.description =
        "Your description should be less than 300 characters";

    return {
      isValid: Object.keys(errors).length === 0,
      errors: errors
    };
  };

  render() {
    const {
      showModal,
      modalImgCaption,
      modalImgDescription,
      modalImageSrc,
      errors,
      loading
    } = this.state;

    return (
      <div id="landing">
        <div id="home" className="home container">
          <Navbar />

          <div className="content">
            <div className="left">
              <h1>We build stunning websites, web apps and mobile apps</h1>

              <p>
                We are dedicated to distinguishing your brand by building a
                unique and compelling digital presence
              </p>

              <Button link="/#contact" text="Start a Project" />
            </div>

            {/* <div className="right">
              <img src={art} alt="Web/App Design and Development" />
            </div> */}
          </div>
        </div>

        <div id="services" className="services container">
          <h2>WHAT WE DO</h2>

          <GliderContainer
            slides={[
              {
                src: website,
                title: "Web Development",
                description:
                  "Your Hello to the internet. Let us help you create a unique and compelling Web Interface to make your business available and appealing to a broad array of prospective clients"
              },
              {
                src: mobile,
                title: "Mobile App Development",
                description:
                  "We can translate your business process into a functional and appealing mobile application integrated with the cloud"
              },
              // {
              //   src: desktop,
              //   title: "Desktop App Development",
              //   description: "Sometimes, mobile apps just won't do it and you need a more advanced and featureful application to meet your  user demands. We have been there and we can help you translate those big dreams to real apps with real impact"
              // },
              {
                src: ux,
                title: "UI/UX Designs",
                description:
                  "For every product we create, UX Design / Research is a fundamental step. The end result is an elegant and user friendly app/website"
              }
            ]}
          />
        </div>

        <div id="projects" className="projects container">
          <h2>RECENT PROJECTS</h2>

          <div className="content">
            {projects.map(project => (
              <div className="project">
                <div className="image">
                  <div>
                    <img
                      src={project.source}
                      alt={project.name}
                      data-description={project.description}
                    />
                  </div>

                  <div className="hover" onClick={this.openModal}>
                    <See />
                  </div>
                </div>

                <a
                  className="contributor"
                  href="https://www.linkedin.com/in/elishaking/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <small>
                    <strong>Contributor: </strong> Elisha King
                  </small>
                </a>

                <a
                  href={project.link}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {project.name}
                </a>
              </div>
            ))}
          </div>
        </div>

        <div id="contact" className="contact container">
          <h2>NEW PROJECT ENQUIRY</h2>

          <div className="categories"></div>

          <div className="contact-form">
            <form onSubmit={this.onSubmit}>
              <TextInput
                type="text"
                name="name"
                placeholder="* Your name"
                onChange={this.onChange}
                error={errors.name}
              />

              <TextInput
                type="email"
                name="email"
                placeholder="* Your email"
                onChange={this.onChange}
                error={errors.email}
              />

              <TextInput
                type="tel"
                name="phone"
                placeholder="Your phone number"
                onChange={this.onChange}
                error={errors.phone}
              />

              <TextInput
                type="text"
                name="title"
                placeholder="Project Title"
                onChange={this.onChange}
                error={errors.title}
              />

              <TextInput
                type="text"
                name="description"
                placeholder="Short Project Description"
                onChange={this.onChange}
                error={errors.description}
              />

              {loading ? (
                <Spinner />
              ) : (
                <input type="submit" value="Send" className="submit" />
              )}
            </form>
          </div>
        </div>

        {showModal && (
          <ImageModal
            imgSrc={modalImageSrc}
            imgCaption={modalImgCaption}
            imgDescription={modalImgDescription}
            close={this.closeModal}
          />
        )}
      </div>
    );
  }
}
