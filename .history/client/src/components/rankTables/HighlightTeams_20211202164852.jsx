import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import card_team_data from "../../assets/fake-data/CardTeams";
import CardTeam from "../cards/cardTeam/cardTeam";

const HlTeam = () => {
  return (
    <div className=" table" style={{transform: 'translateY(20px)'}}>
      <h3 className="table__title">Các câu lạc bộ nổi bật</h3>
      <table className="table__content" style={{width: '50vw'}}>
        <tr>
          <th>STT</th>
          <th>Câu Lạc Bộ</th>
          <th>Sân Vận Động</th>
          <th>Chi Tiết</th>
        </tr>
        {card_team_data.getSortCards(5).map((item, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>
              <div className="img logo">
                <img src={item.img} alt="not found" />
              </div>
              <p>{item.title}</p>
            </td>
            <td>
              <p>{item.stadium}</p>
            </td>
            <td>
              <i className="bx bx-right-arrow-alt bx-flashing"></i>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default HlTeam;
