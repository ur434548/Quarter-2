import React from "react";
import Aprtments from "../../assests/images/Aprtments.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "../Button/Button"
export default function ApartmentsPlan() {
  const ApartmentsPlan = [
    {
      text2: "Double Height",
      text3:
        "Enimad minim veniam quis nostrud exercitation ullamco laboris. Lorem ipsum dolor sit amet cons aetetur adipisicing elit sedo eiusmod tempor.Incididunt labore et dolore magna aliqua. sed ayd minim veniam.",
      text4: "Total Area ---------------------------------2800 Sq. Ft",
      text5: "Bedroom--------------------------------- 150 Sq. Ft",
      text6: "Bathroom--------------------------------- 45 Sq. Ft",
      text7: "Balcony/Pets---------------------------------  Allowed",
      text8: "Lounge--------------------------------- 650 Sq. Ft",
      img: Aprtments,
    },
  ];

  return (
      <div className="mt-20">
        <div className="flex flex-col items-center  mx-auto my-10">
          <Button className="bg-red-100 p-2 w-[170px] h-[30px] mt-10 rounded-full text-center text-custom-orange mb-4">
            Apartments Sktech
          </Button>
          <h1 className="3xl font-bold font-sans tracking-tight  text-center text-gray-900 text-[44px]">
            Apartments Plan
          </h1>
        </div>
        <div >
          <Navbar className="text-[20px] font-bold  ml-[500px] mb-2  " data-bs-theme="light">
            <Container>
              <Nav className="me-auto gap-5  ">
                <Nav.Link href="#home" > The Studio</Nav.Link>
                <Nav.Link href="#home"> Deluxe Portion</Nav.Link>
                <Nav.Link href="#features"> Penthouse</Nav.Link>
                <Nav.Link href="#pricing">Top Garden</Nav.Link>
                <Nav.Link href="#pricing">Double Height</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        </div>
    <div>
        {ApartmentsPlan.map((items,index) => (
          //parent div
          <div key={index} className="flex w-[1200px] mx-auto justify-center   p-4">
            <div className="bg-custom-orange w-2/4 p-20 w-[600px] h-[550px]">
              <div className="flex flex-col gap-5">
                <div  className="text-[30px] text-white  font-bold">
                  {items.text2}
                </div>
                  <div className="text-white text-lg">{items.text3}</div>
                <div className="text-white text-lg flex  flex-col ">
                  <div>{items.text4}</div>
                  <div>{items.text5}</div>
                  <div>{items.text6}</div>
                  <div>{items.text7}</div>
                  <div>{items.text8}</div>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center p-4">
              <img src={items.img} alt="Item Image" className="w-[570px] h-[546px] "  />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
