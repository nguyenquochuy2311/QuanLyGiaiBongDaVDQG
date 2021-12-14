import React, { useState } from "react";

import "./card.scss";
import { NavLink, Link } from "react-router-dom";
import {
  XuanTruong,
  QuangHai,
  CongPhuong,
  DangVanLam,
} from "../../../assets/img";

const CardPLayer = () => {
  const [state, setState] = useState([
    {
      title: "Quang Hải",
      img: { QuangHai },
      description:
        "Nguyễn Quang Hải sinh năm 1997 tại huyện Đông Anh, Hà Nội. Anh bắt đầu gia nhập lò đào tạo trẻ Hà Nội T&T khi mới 9 tuổi vào năm 2006.. Năm 2013, Nguyễn Quang Hải giành chức vô địch U21 quốc gia 2013",
    },
  ]);
  return (
    <div className="card" style={{ width: "18rem;" }}>
      <div className="card-img">
        <img className="card-img-top" src={QuangHai} alt="Card image cap" />
      </div>
      <div className="card-body">
        <h5 className="card-title">{setState(state.title)}</h5>
        <p className="card-text">{setState(state.description)}</p>
        <Link to="#" className="btn card-icon" title="Xem thêm thông tin">
          <i class="bx bxs-quote-right bx-tada"></i>
        </Link>
      </div>
    </div>
  );
};

export default CardPLayer;
