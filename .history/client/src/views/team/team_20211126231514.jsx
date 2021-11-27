import React from "react";
import styled from "styled-components";

// ip data
import card_team_data from "../../assets/fake-data/CardTeams";

//ip component
import Helmet from "../../components/Helmet/Helmet";
import Header from "../../containers/header/header";
import SortBar from "../../components/sortBar/sortBar";
import CardTeam from "../../components/cards/cardTeam/cardTeam";
import Dunors from "../../components/dunors/dunors";

//css
import "../../styles/_variables.scss";
import "../../styles/global.scss";
import "./team.scss";

const StyleTopTeamTitle = styled.h3`
  color: $primary-color;
  margin-top: 50px;
  padding: 20px 0;
`;
const StyleSortBar = styled.div`
  .sortbar__category-season {
    text-align: left;
    margin-left: 20px;
    // display: flex;
    // align-items: center;
    // justify-content: center;
    // flex-direction: column;
  }
  .season__option {
    padding: 10px 20px;
  }
`;
const Team = () => {
  return (
    <Helmet title="Câu Lạc Bộ" className="component">
      <Header title="Các Câu Lạc Bộ"></Header>

      <SortBar>
        <div className="col">
          <StyleSortBar>
          <div className="sortbar__category sortbar__category-season">
            <p>Lọc theo mùa:</p>
            <select
              name="season__option"
              className="season__option"
              id="season__option"
            >
              <option value="0">2021/22</option>
              <option value="0">2020/21</option>
              <option value="0">2019/20</option>
            </select>
          </div>
          {/* </StyleSortBar> */}
        </div>
      </SortBar>
      <div className="container container-xxl container-xl ">
        {/* get all team */}
        <div className="row">
          {card_team_data.getAllCards().map((item, index) => (
            <div
              key={index}
              className="col col-xl-3 col-lg-4 col-md-6 col-sm-1"
            >
              <CardTeam
                img={item.img}
                title={item.title}
                logo={item.logo}
                stadium={item.stadium}
                description={item.description}
              />
            </div>
          ))}
        </div>

        {/* get top 8 team */}
        {/* <StyleTopTeamTitle> */}
          <h3
            className="top__team__title"
            // style={{color:`${'$primary-color'}`, marginTop:'50px', padding: '20px'}}
          >
            Các Câu Lạc Bộ Nổi Bật Tại Việt Nam
          </h3>
        {/* </StyleTopTeamTitle> */}
        <div className="row">
          {card_team_data.getSortCards(8).map((item, index) => (
            <div
              key={index}
              className="col col-xl-3 col-lg-4 col-md-6 col-sm-1"
            >
              <CardTeam
                img={item.img}
                title={item.title}
                logo={item.logo}
                stadium={item.stadium}
                description={item.description}
              />
            </div>
          ))}
        </div>

        {/* dunors */}
        <Dunors/>
      </div>
    </Helmet>
  );
};

export default Team;
