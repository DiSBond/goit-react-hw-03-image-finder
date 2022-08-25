import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import './modal.css';
import propTypes from 'prop-types';

const modalRoot = document.querySelector(`#modalRoot`);

export default class Modal extends Component {
  static propTypes = {
    closeModal: propTypes.func.isRequired,
  };
  componentDidMount() {
    window.addEventListener('keydown', this.hadleKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.hadleKeyDown);
  }

  hadleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.closeModal();
    }
  };

  backDropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.closeModal();
    }
  };

  render() {
    return createPortal(
      <div className="modalBackdrop" onClick={this.backDropClick}>
        <div className="modalContainer">{this.props.children}</div>
      </div>,
      modalRoot
    );
  }
}
