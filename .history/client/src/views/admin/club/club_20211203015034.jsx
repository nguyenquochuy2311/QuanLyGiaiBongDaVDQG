import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Helmet from "../../../components/Helmet/Helmet";
import AdminHeader from "../header/adminHeader";
import Header from "../../../containers/header/header";
//ip data
import card_team_data from "../../../assets/fake-data/CardTeams";

const Club = (props) => {
  let n = 1;
  const [bxhClb, setBxhClb] = useState([]);
  useEffect(() => {
    getclb();
    getclb()
  }, []);
  async function getclb() {
    let result = await fetch("http://127.0.0.1:8000/api/bxh_clb");
    result = await result.json();
    // console.log('<<<<<<<<<<<<result'+ result);
    setBxhClb(result);
  }

  async function getclb() {
    let result = await fetch("http://127.0.0.1:8000/api/bxh_clb");
    result = await result.json();
    // console.log('<<<<<<<<<<<<result'+ result);
    setBxhClb(result);
  }


  //sort high to low
  function compare(a, b) {
    if (Number(a.Diem) > Number(b.Diem)) {
      return -1;
    }
    if (Number(a.Diem) < Number(b.Diem)) {
      return 1;
    }
    return 0;
  }
  const cardsSorted = bxhClb.sort(compare);

  return (
    <Helmet title="Quản Lý CLB">
      <AdminHeader />
      <Header title="Quản lý CLB" />

      <div className="component admin">
        <h3 className="table__title">Danh sách câu lạc bộ</h3>
        <Link to="/admin/club/add">
          <button className="add">
            <i class="bx bx-plus"></i>
            <p>Thêm</p>
          </button>
        </Link>
        <div className="table">
          <table className="table__content" style={{ width: "50vw" }}>
            <tr>
              <th>STT</th>
              <th>Câu Lạc Bộ</th>
              <th>HLV trưởng</th>
              <th>Sân Vận Động</th>
              <th>Thắng</th>
              <th>Hòa</th>
              <th>Thua</th>

              <th>Số điểm</th>
              <th>Sửa</th>
              <th>Xóa</th>
            </tr>
            {cardsSorted.map((item, index) =>
              card_team_data.getAllCards().map(
                (e) =>
                  e.title === item.TenCLB && (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>
                        <div className="img logo">
                          <img src={e.img} alt="not found" />
                        </div>
                        <p>{item.TenCLB}</p>

                      </td>
                      <td>
                        <p>{e.stadium}</p>
                      </td>
                      <td>
                        <p>{e.stadium}</p>
                      </td>
                      <td>{item.Thang}</td>
                      <td>{item.Hoa}</td>
                      <td>{item.Thua}</td>
                      <td>{item.Diem}</td>
                      <td>
                        <Link to="/admin/club/edit">
                          <button className="edit">Sửa</button>
                        </Link>
                      </td>
                      <td>
                        <button className="remove">Xóa</button>
                      </td>
                    </tr>
                  )
              )
            )}
          </table>
        </div>
      </div>
    </Helmet>
  );
};

export default Club;
