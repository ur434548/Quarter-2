import React from "react";
import { TbCircleArrowLeftFilled } from "react-icons/tb";

import { TbCircleArrowRightFilled } from "react-icons/tb";

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      
      onClick={onClick}
    >
      <TbCircleArrowLeftFilled
        style={{ fontSize: "54px", color: "white" ,   marginLeft: "-50px" , }}
      />
    </div>
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "60px",
        height: "50px",
        borderRadius: "30%",
        cursor: "pointer",
        position: "absolute",
        marginLeft: "-30px",
      }}
      onClick={onClick}
    >
      <TbCircleArrowRightFilled
      style={{ fontSize: "54px", color: "white" ,   marginLeft: "-50px" }}
      />
    </div>
  );
}

export { NextArrow, PrevArrow };
