import { useState } from "react";
import { Modal } from "react-bootstrap";
import classes from "./ModalBootstrap.module.scss";

const ModalBootstrap = (props) => {
  return (
    <Modal
      size="lg"
      animation={false}
      show={props.show}
      onHide={props.close}
      dialogClassName={classes.modal}
      backdropClassName={classes.backdrop}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      <Modal.Header closeButton closeVariant="white"></Modal.Header>
      <Modal.Body
        style={{
          height: "100vh",
          maxHeight: "80vh",
          width: "100%",
          padding: "0.3rem",
          background: "#fff",
          borderRadius: "4px",
        }}
      >
        {props.children}
      </Modal.Body>
    </Modal>
  );
};

export default ModalBootstrap;
