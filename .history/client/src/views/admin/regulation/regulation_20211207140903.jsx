import { useEffect, useState } from "react";
import {Link} from 'react-router-dom';
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
      <div className="component admin" style={{marginTop:'100px'}}>
        <section className="body-content">
          <h2 className="body-title ">Quản lý quy định về mùa giải</h2>
          {/* <button className="add">
          <i class="bx bx-plus"></i>
          <p>Thêm quy định mới</p>
        </button> */}
          <div className="table reulation__player">

            <h3 className="table__title title__regulation body-text">
              Quy định cầu thủ
            </h3>
            {/* <button className="add">
          <i class="bx bx-plus"></i>
          <p>Thêm</p>
        </button> */}
            <table className="table__content">
              <tr>
                <th>Tuổi tối thiểu</th>
                <th>Tuổi tối đa</th>
                <th>Số lượng tối thiểu</th>
                <th>Số lượng tối đa</th>
                <th>Số lượng cầu thủ nước ngoài</th>
                <th>Sửa</th>
                {/* <th>Xóa</th> */}
              </tr>
              {rgPlayer.map((item, i) => (
                <tr>
                  <td>{item.TuoiToiThieu}</td>
                  <td>{item.TuoiToiDa}</td>

                  <td>{item.SLToiThieu}</td>
                  <td>{item.SLToiDa}</td>
                  <td>{item.SLNuocNgoai}</td>

                  <td>
                    <button className="edit">Sửa</button>
                  </td>
                  {/* <td>
                    <button className="remove">Xóa</button>
                  </td> */}
                </tr>
              ))}
            </table>
          </div>

          <div className="table reulation__goal">
            <h3 className="table__title body-text title__regulation">
              Quy định bàn thắng
            </h3>
            {/* <button className="add">
          <i class="bx bx-plus"></i>
          <p>Thêm</p>
        </button> */}
            <table className="table__content">
              <tr>
                <th>Loại bàn thắng</th>
                <th>Thời điểm bắt đầu(phút)</th>
                <th>Thời điểm kết thúc(phút)</th>
                <th>Sửa</th>
                {/* <th>Xóa</th> */}
              </tr>
              {rgWin.map((item, i) => (
                <tr>
                  <td>{item.LoaiBT}</td>
                  <td>{item.ThoiDiemBatDau}</td>

                  <td>{item.ThoiDiemKetThuc}</td>
                  <td>
                  <Link to={'/admin/quy-dinh/laoi/edit/'+ e.idQUYDINHDIEMSO}>
                    <button className="edit">Sửa</button>
</Link>
                  </td>
                  {/* <td>
                    <button className="remove">Xóa</button>
                  </td> */}
                </tr>
              ))}
            </table>
          </div>

          <div className="table reulation__score">
            <h3 className="body-text title__regulation table__title">
              Quy định điểm số
            </h3>
            {/* <button className="add">
          <i class="bx bx-plus"></i>
          <p>Thêm</p>
        </button> */}
            <table className="table__content">
              <tr>
                <th>Thắng</th>
                <th>Hòa </th>
                <th>Thua</th>
                <th>Sửa</th>
                {/* <th>Xóa</th> */}
              </tr>
              {rgScore.map((e, i) => (
                <tr key={i}>
                  <td>{e.DiemThang}</td>
                  <td>{e.DiemHoa}</td>
                  <td>{e.DiemThua}</td>
                  <td>
                    <Link to={'/admin/quy-dinh/diem-so/edit/'+ e.idQUYDINHDIEMSO}>
                    <button  className="edit">Sửa</button>
                    </Link>
                  </td>
                  {/* <td>
                    <button className="remove">Xóa</button>
                  </td> */}
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
