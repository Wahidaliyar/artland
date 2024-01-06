import React from "react";
import { NavLink } from "react-router-dom";

export default function LinkButton({ text, link }) {
  return (
    <div>
      <NavLink
        to={link}
        className="font-IRanSans bg-red-700 text-white px-6 py-3 border border-white rounded-sm md:px-12"
      >
        {text}
      </NavLink>
    </div>
  );
}
