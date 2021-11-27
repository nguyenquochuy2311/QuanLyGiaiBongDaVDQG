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
      <h3></h3>
      <table className="rankteam__table container">
        <tr>
          <th>Câu Lạc Bộ</th>
          <th>Sân Vận Động</th>
          <th>Chi Tiết</th>
        </tr>
        {card_team_data.getSortCards(8).map((item, index) => (
          <tr className='team__item'>
            <td >
              <img className="team__logo" src={item.logo} alt="not found" />
              <p className="team__title">{item.title}</p>
            </td>
            <td className="team__stadium">
              <p >{item.stadium}</p>
            </td>
            <td className="team__description">
              <p >
                {item.description}
              </p>
                <i className="bx bx-right-arrow-alt bx-flashing"></i>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default RankTeam;
