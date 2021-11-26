import React from "react";

import { Bgheader } from "../../assets/img";

import "./header.scss";
const Header = (props) => {
  return (
    <div className="header">
      <img src={Bgheader} alt="not found" />

      <h2 className="title">
      <i className='bx bxs-right-arrow'></i>
        {props.title}</h2>
    </div>
  );
};

export default Header;
