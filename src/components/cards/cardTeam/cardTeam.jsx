import React from "react";
import {Link} from 'react-router-dom';
import PropTypes from "prop-types";

import "./cardTeam.scss";

const CardTeam = (props) => {
  return (
      <Link to={props.path} className="card" style={{ minWidth: "18rem;" }}>
        <img src={props.img} className="card-img-top" alt="not found" />
        <div className="card-body">
          <img src={props.logo} alt="not-found" className="card-logo" />
          <h5 className="card-title">{props.title}</h5>
          <h3 className="card-subTitle">{props.stadium}</h3>
          <p className="card-description">
            <p>{props.description}</p>
            <span>Chi tiết</span>
            <i className="bx bx-right-arrow-alt bx-flashing" ></i>
          </p>
        </div>
      </Link>
  );
};

CardTeam.propTypes = {
  path: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  stadium: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,


}
export default CardTeam;
