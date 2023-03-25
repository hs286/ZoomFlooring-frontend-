import React from "react";
import { Link } from "react-router-dom";
import img from "./zoomLogo.png";

const Footer = () => {
  return (
    <>
      <div className="container-fluid bg-dark mt-5 pt-5">
        <div className="row px-xl-5 pt-5">
          <div className="col-12 mb-5 pr-3  d-flex justify-content-around align-items-center">
            <p className="text-light">
               Copyright © 2023 | Zoom Flooring | All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
