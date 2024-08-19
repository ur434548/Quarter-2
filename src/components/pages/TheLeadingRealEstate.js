import React from "react";
import House1 from "../../assests/images/House1.jpg";
import { FcHome } from "react-icons/fc";
import Button from "../Button/Button";
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
export default function TheLeadingRealEstate() {
  const [modalShow, setModalShow] = React.useState(false);
  const leadingEstate = [
    {
      img: House1,
      text1: "The Leading Real Estate Rental MarketPlace.",
      text2:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem",
      text3: "Smart Home Design",
      text4: "Beautiful Scene Around",
      text5: "Exceptional Lifestyle",
      text6: "Complete 24/7 Security",
      text7:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.",
    },
  ];
  return (
    <div>
      {leadingEstate.map((items, index) => (
        <div key={index} className="flex justify-center mt-60 relative">
          <div className="shadow ">
            <img
              src={items.img}
              alt="Pics"
              className="w-[550px] h-[650px]  p-3"
            />
            <div
              className="flex items-center justify-center bg-cover mt-[-250px] ml-[-30px] rounded shadow h-[223px] w-[300px] absolute"
              style={{
                backgroundImage: `url(${House3})`,
              }}
            >
              <Button
                variant="primary"
                onClick={() => setModalShow(true)}
                className="relative  p-2 rounded-full  text-custom-orange bg-white  animate-waterEffect"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="size-20">
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
          </div>
          <div className=" ml-20  ">
            <Button
              className="bg-red-100 p-2   w-[110px] h-[30px] rounded-full  text-custom-orange
             "
            >
              About Us
            </Button>
            <h1 className=" font-bold font-sans w-[670px] text-gray-900 text-[44px]">
              {items.text1}
            </h1>

            <p className="text-slate-600  mt-10  w-[500px]">{items.text2}</p>
            <div className="flex gap-[9px]  mt-12 items-center text-slate-600 text-base ">
              <span className="bg-red-100 w-12 h-12 p-2 rounded-full">
                <FcHome size="2rem" />
              </span>
              {items.text3}

              <span className="bg-red-100 w-12 h-12 p-2 rounded-full">
                <FcHome size="2rem" />
              </span>
              {items.text4}
            </div>
            <div className="flex  gap-[9px]  items-center mt-10 text-slate-600 text-base">
              <span className="bg-red-100 w-12 h-12 p-2 rounded-full">
                <FcHome size="2rem" />
              </span>
              {items.text5}

              <span className="bg-red-100 w-12 h-12 p-2 rounded-full">
                <FcHome size="2rem" />
              </span>
              {items.text6}
            </div>
            <div className=" text-slate-500 mt-5 w-[600px] mt-20 bg-orange-50 p-7 text-slate-500 text-base ">
              {items.text7}
            </div>
            <Button className="mt-16 text-white hover:border-black border-1 border-transparent font-bold  text-[16px] h-[50px] w-[170px] relative text-white bg-custom-orange px-4 py-2  overflow-hidden group ">
              <span className="absolute inset-0 w-full h-full bg-white transform -translate-x-full transition-transform duration-300 group-hover:translate-x-0"></span>
              <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
                Our Services
              </span>
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}
