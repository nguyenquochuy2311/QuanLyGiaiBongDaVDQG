import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import card_team_data from "../../assets/fake-data/CardTeams";
import CardTeam from "../cards/cardTeam/cardTeam";

import "./rankTables.scss";
const NewStyleCard = styled.div``;
const RankTeam = () => {
  return (
    <div
      className="table 
    rankteam container"
    >
      <table className="rankteam__table container">
        <tr>
          <th>Câu Lạc Bộ</th>
          <th>Sân Vận Động</th>
          <th>Chi Tiết</th>
        </tr>
        {card_team_data.getSortCards(8).map((item, index) => (
          <tr className=''>
            <td >
              <img className="team__logo" src={item.logo} alt="not found" />
              <p className="team__title">{item.title}</p>
            </td>
            <td>
              <p className="team__stadium">{item.stadium}</p>
            </td>
            <td>
              <p className="team__description">
                {item.description}
                <i className="bx bx-right-arrow-alt bx-flashing"></i>
              </p>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default RankTeam;
