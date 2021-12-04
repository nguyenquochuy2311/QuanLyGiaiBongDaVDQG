import React from "react";
import {Link} from 'react-router-dom';
import PropTypes from "prop-types";

import "./cardTeam.scss";

const CardTeam = (props) => {
  return (
      <div className="card" style={{ minWidth: "18rem;" }}>
       {props.children}
      </div>
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
