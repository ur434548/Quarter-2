import React from "react";

export default function Button({ children, className, style }) {
  return (
    <button
      className={`${(className =
        "bg-orange-100 p-2 w-40 rounded-full text-center text-red-900 mb-4")}`}
      style={style}
    >
      {children}
    </button>
  );
}
