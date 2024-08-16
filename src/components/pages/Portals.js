import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaRegCirclePlay } from "react-icons/fa6";
import House3 from "../../assests/images/House3.jpg";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Youtube Vedio
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <video width="750" height="500" controls autoPlay playsInline>
          <source src="https://ik.imagekit.io/ikmedia/example_video.mp4" />
        </video>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default function App() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div
      className="flex items-center justify-center bg-cover mt-10 h-[350px]"
      style={{
        backgroundImage: `url(${House3})`,
      }}
    >
      <Button
        variant="primary"
        onClick={() => setModalShow(true)}
        className="relative  p-3 rounded-full  text-white  animate-waterEffect"
      >
        <FaRegCirclePlay size="3rem" />
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}
