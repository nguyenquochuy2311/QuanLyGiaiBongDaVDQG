
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { store } from 'react-notifications-component';

import Helmet from "../../../components/Helmet/Helmet";
import AdminHeader from "../header/adminHeader";
import Header from "../../../containers/header/header";

//ip data
import card_team_data from "../../../assets/fake-data/CardTeams";

const Club = (props) => {
  let n = 1;
  const [bxhClb, setBxhClb] = useState([]);
  const [hlv, setHlv] = useState([]);

  useEffect(() => {
    getBxhClb();
    getHlv();
  }, []);
  async function getBxhClb() {
    let result = await fetch("http://127.0.0.1:8000/api/bxh_clb");
    result = await result.json();
    // console.log('<<<<<<<<<<<<result'+ result);
    setBxhClb(result);
  }

  //lay thong tin hlv
  async function getHlv() {
    let result = await fetch("http://127.0.0.1:8000/api/hlv");
    result = await result.json();
    // console.log('<<<<<<<<<<<<result'+ result);
    setHlv(result);
  }

  //sort high to low
  function compare(a, b) {
    if (Number(a.Thang*3 + a.Hoa) > Number(b.Thang*3 + b.Hoa)) {
      return -1;
    }
    if (Number(a.Thang*3 + a.Hoa) < Number(b.Thang*3 + b.Hoa)) {
      return 1;
    }
    return 0;
  }
  const cardsSorted = bxhClb.sort(compare);

  
async function deleteClub(id) {
  await fetch("http://localhost:8000/api/clb/" + id, {
    method: "DELETE",
  });
  window.location.reload();
  store.addNotification({
    title: "Xóa thành công",
    message: "Hãy kiểm tra",
    type: "success",
    insert: "top",
    container: "top-right",
    animationIn: ["animate__animated", "animate__fadeIn"],
    animationOut: ["animate__animated", "animate__fadeOut"],
    dismiss: {
        duration: 5000,
        onScreen: true
      }
  });
}


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
