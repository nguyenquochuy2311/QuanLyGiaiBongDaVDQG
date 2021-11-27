import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import card_team_data from "../../assets/fake-data/CardTeams";
import CardTeam from "../cards/cardTeam/cardTeam";

const NewStyleCard = styled.div``;
const RankTeam = () => {
  return (
    <div
      className="
    rankteam"
    >
      <table className="rankteam__table">
        <tr>
          <th>Câu Lạc Bộ</th>
          <th>Sân Vận Động</th>
          <th>Chi Tiết</th>
        </tr>
        <tr>
          {card_team_data.getSortCards(8).map((item, index) => (
            <td>

            </td>
             <td>
              
             </td>
             
          ))}
        </tr>
      </table>
    </div>
  );
};

export default RankTeam;
