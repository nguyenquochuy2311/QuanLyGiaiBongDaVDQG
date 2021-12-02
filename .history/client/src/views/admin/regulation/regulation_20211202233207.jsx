import { useEffect, useState } from "react";

import Helmet from "../../../components/Helmet/Helmet";
import AdminHeader from "../header/adminHeader";
import Header from "../../../containers/header/header";
//ip data
import card_player_data from "../../../assets/fake-data/CardPlayers";
const AdminRegulation = (props) => {
  const [rgScore, setRgScore] = useState([]);
  const [rgWin, setRgWin] = useState([]);
  const [rgPlayer, setRgPlayer] = useState([]);

  useEffect(() => {
    getRgScore();
    getRgWin();
    getRgPlayer();
  }, []);

  //get ragulation score
  async function getRgScore() {
    let result = await fetch("http://127.0.0.1:8000/api/qd-diemso");
    result = await result.json();
    setRgScore(result);
  }

  //get ragulation goal

  async function getRgWin() {
    let result = await fetch("http://127.0.0.1:8000/api/qd-banthang");
    result = await result.json();
    setRgWin(result);
  }
  //get ragulation player

  async function getRgPlayer() {
    let result = await fetch("http://127.0.0.1:8000/api/qd-cauthu");
    result = await result.json();
    setRgPlayer(result);
  }

  return (
    <Helmet title="Admin quy định">
      <AdminHeader />
      <Header title="Quản lý quy định" />
      <div className="component">
        <section className="body-content">
          <h2 className="body-title ">Một số quy định về mùa giải</h2>
          <div className="table reulation__player">

            <h3 className="table__title title__regulation body-text">
              Quy định cầu thủ
            </h3>
            <ul className="body-text-list list__regulation">
              {rgPlayer.map((item, i) => (
                <li key={i} className="item__regulation">
                  <p className="item__regulation__content">
                    <p className="item__regulation__title">Tuổi tối thiểu: </p>

                    {item.TuoiToiThieu}
                  </p>
                  <p className="item__regulation__content">
                    <p className="item__regulation__title">Tuổi tối đa: </p>
                    {item.TuoiToiDa}
                  </p>
                  <p className="item__regulation__content">
                    <p className="item__regulation__title">
                      Số lượng tối thiểu:{" "}
                    </p>
                    {item.SLToiThieu}
                    <td>
                    <button className="edit">Sửa</button>
                  </td>
                  <td>
                    <button className="remove">Xóa</button>
                  </td>
                  </p>
                  <p className="item__regulation__content">
                    <p className="item__regulation__title">Số lượng tối đa: </p>
                    {item.SLToiDa}
                  </p>
                  <p className="item__regulation__content">
                    <p className="item__regulation__title">
                      Số lượng cầu thủ nước ngoài:{" "}
                    </p>
                    {item.SLNuocNgoai}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div className="table reulation__player">
            <h3 className="table__title body-text title__regulation">
              Quy định bàn thắng
            </h3>
            <table className="table__content">
              <tr>
                <th>Loại bàn thắng</th>
                <th>Thời điểm bắt đầu(phút)</th>
                <th>Thời điểm kết thúc(phút)</th>
                <th>Sửa</th>
                <th>Xóa</th>
              </tr>
              {rgWin.map((item, i) => (
                <tr>
                  <td>{item.LoaiBT}</td>
                  <td>{item.ThoiDiemBatDau}</td>

                  <td>{item.ThoiDiemKetThuc}</td>
                  <td>
                    <button className="edit">Sửa</button>
                  </td>
                  <td>
                    <button className="remove">Xóa</button>
                  </td>
                </tr>
              ))}
            </table>
          </div>

          <div className="table">
            <h3 className="body-text title__regulation table__title">
              Quy định điểm số
            </h3>
            <table className="table__content">
              <tr>
                <th>Thắng</th>
                <th>Hòa </th>
                <th>Thua</th>
                <th>Sửa</th>
                <th>Xóa</th>
              </tr>
              {rgScore.map((e, i) => (
                <tr key={i}>
                  <td>{e.DiemThang}</td>
                  <td>{e.DiemHoa}</td>
                  <td>{e.DiemThua}</td>
                  <td>
                    <button className="edit">Sửa</button>
                  </td>
                  <td>
                    <button className="remove">Xóa</button>
                  </td>
                </tr>
              ))}
            </table>
          </div>
        </section>
      </div>
    </Helmet>
  );
};

export default AdminRegulation;
