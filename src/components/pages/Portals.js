import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
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
                className="relative  p-2 rounded-full   bg-white  border animate-waterEffect"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="size-20 text-custom-orange ">
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm14.024-.983a1.125 1.125 0 0 1 0 1.966l-5.603 3.113A1.125 1.125 0 0 1 9 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113Z"
                    clipRule="evenodd"
                  />
                </svg>
              </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}
