import React from 'react';
import {Link} from 'react-router-dom';
import Modal from 'react-modal';
import Resume from './resume';


class MainPage extends React.Component {
  constructor(props){
    super(props);

    this.state = { modalOpen: false };

    this.resume = this.resume.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentWillMount(){
    Modal.setAppElement('body');
    Modal.defaultStyles.content.border = "none";
    Modal.defaultStyles.content.background = "transparent";
    Modal.defaultStyles.overlay.backgroundColor = "rgba(255, 255, 255, 0.5)";
  }

  openModal(){
    this.setState({ modalOpen: true });
  }

  closeModal(){
    this.setState({ modalOpen: false });
  }

  resume(e){
    e.preventDefault();
    this.openModal();
  }

  render(){
    return(
      <div className = "main-page">
        <div className="main-content">
          <h1>HI, I'M ROBIN</h1>
          <h3>I'M A SOFTWARE DEVELOPER</h3>
          <div className="splash-icons">
            <a href="https://www.github.com/wilbooorn"><i className="fa fa-github fa-3x"></i></a>
            <a href="https://www.linkedin.com/in/rwilborn/"><i className="fa fa-linkedin-square fa-3x"></i></a>
          </div>
        </div>
        <div className="splash-navigation">
          <Link to="/about">About</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/contact">Contact</Link>
          <a onClick={this.resume}>Resume</a>
        </div>

        <Modal
          isOpen={this.state.modalOpen}
          shouldCloseOnOverlayClick={true}
          onRequestClose={this.closeModal}
          contentLabel="Resume Modal"
          className="resume-modal">

          <Resume />
        </Modal>
      </div>
    );
  }
}

export default MainPage;
