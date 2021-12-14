import { Link } from "react-router-dom";
import ReactNotification, { store } from "react-notifications-component";
import { useEffect, useState } from "react";
import Helmet from "../../../components/Helmet/Helmet";
import AdminHeader from "../header/adminHeader";
import Header from "../../../containers/header/header";

//ip data
// import card_team_data from "../../../assets/fake-data/CardTeams";

const Goal = (props) => {
  let n = 1;
  const [Goal, setGoal] = useState([]);
  // const [clb, setClb] = useState([]);

  useEffect(() => {
    getGoal();
    // getRefe();
    // getCLB();
  }, []);

 

  async function getGoal() {
    let result = await fetch("http://127.0.0.1:8000/api/ghiban");
    result = await result.json();
    setGoal(result);
  }

  // lay trong tai
  // async function getRefe() {
  //   let result = await fetch("http://127.0.0.1:8000/api/totrongtai");
  //   result = await result.json();
  //   setRefe(result);
  // }

  // sap xep vong dau

  //sort high to low
  function compare(a, b) {
    if (Number(a.idKQ) < Number(b.idKQ)) {
      return -1;
    }
    if (Number(a.idKQ) > Number(b.idKQ)) {
      return 1;
    }
    return 0;
  }
  const cardsSorted = Goal.sort(compare);

  let taikhoan = JSON.parse(localStorage.getItem("taikhoan"));

  async function deleteGoal(id) {
    await fetch("http://localhost:8000/api/auth/ghiban/delete/" + id, {
      method: "delete",
      headers: {
        Authorization: "Bearer " + taikhoan.access_token,
        "X-Requested-With": "XMLHttpRequest",
      },
    });
    // console.log(  Authorization);
    setTimeout(() => {
      window.location.reload();
    }, 1000);

    store.addNotification({
      title: "Xóa thành công",
      message: "Hãy kiểm tra",
      type: "success",
      insert: "top",
      container: "top-right",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 1000,
        onScreen: true,
      },
    });
  }
  //

  return (
    <Helmet title="Ghi bàn">
      <AdminHeader />

      <ReactNotification />
      <Header title="Quản lý ghi bàn" />
      <div className="component admin">
        <div className="table">
          <h1 className="table__title">Thông tin bàn thắng</h1>
          <Link to="/admin/ghi-ban/add">
            <button className="add">
              <i class="bx bx-plus"></i>
              <p>Thêm</p>
            </button>
          </Link>
          <table className="table__content">
            <tr>
              <th>STT</th>
              <th>ID Kết Quả Trận đấu</th>
              <th>ID Cầu thủ</th>

              <th>Cầu thủ</th>
              <th>Thời điểm </th>
              <th>Loại bàn thắng</th>
              <th>Sửa</th>
              <th>Xóa</th>
            </tr>

            {cardsSorted.map((item) => (
              <tr key={item.idGB}>
                <td>{n++}</td>
                <td>{item.idKQ}</td>
                <td>{item.cauthu.idCT}</td>

                <td>{item.cauthu.TenCT}</td>
                <td>{item.ThoiDiem}</td>
                <td>{item.LoaiBT}</td>
                <td>
                  <Link to={`/admin/ghi-ban/edit/${item.idGB}`}>
                    <button className="edit">Sửa</button>
                  </Link>
                </td>
                <td>
                  <button
                    onClick={() => deleteGoal(item.idGB)}
                    className="remove"
                  >
                    Xóa
                  </button>
                </td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </Helmet>
  );
};

export default Goal;
