
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { store } from 'react-notifications-component';

import Helmet from "../../../components/Helmet/Helmet";
import AdminHeader from "../header/adminHeader";
import Header from "../../../containers/header/header";

//ip data
import card_team_data from "../../../assets/fake-data/CardTeams";

const Club = (props) => {
  

  return (
    <Helmet title="Not found">

      <div className="component admin">
        <h3 className="table__title">Trang này không tồn tại</h3>
        <Link to="/">
          <button className="add">
            <i class="bx bx-plus"></i>
            <p>Trở về trang chủ</p>
          </button>
        </Link>
      
      </div>
    </Helmet>
  );
};

export default Club;
