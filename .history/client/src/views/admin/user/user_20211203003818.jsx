import { useEffect, useState } from "react";

import Helmet from "../../../components/Helmet/Helmet";
import AdminHeader from "../header/adminHeader";
import Header from "../../../containers/header/header";
//ip data
import card_player_data from "../../../assets/fake-data/CardPlayers";
const AdminAccount = (props) => {
  const [getuser, setUser] = useState([]);
  useEffect(() => {
    getUser();
  }, []);

  async function getUser() {
    let result = await fetch("http://127.0.0.1:8000/api/getuser");
    result = await result.json();
    setUser(result);
  }

  return (
    <Helmet title="Admin user">
      <AdminHeader />

      <Header title="Tài khoản người dùng" />
      <div className="componen admin">
        <div className="table">
          <h1 className="table__title">Tài khoản </h1>
          <button className="add">
            <i class="bx bx-plus"></i>
            <p>Thêm</p>
          </button>
          <table className="table__content" style={{marginTop: "0" }}>
            <tr>
              <th>STT</th>
              <th>Tên đăng nhập</th>
              <th>Email</th>

              <th>Mật khẩu</th>
              <th>Sửa</th>
              <th>Xóa</th>
            </tr>
            {/* {card_player_data.getSortCards(10).map((item, index) => (
            ))} */}
              <tr>
                <td>{ 1}</td>

                <td>{'quochuy2311'}</td>
                <td>{'ab@gmail.com'}</td>

                <td>{'******'}</td>

                <td>
                  <button className="edit">Sửa</button>
                </td>
                <td>
                  <button className="remove">Xóa</button>
                </td>
              </tr>
              <tr>
                <td>{ 1}</td>

                <td>{'huy'}</td>
                <td>{'test@gmail.com'}</td>

                <td>{'******'}</td>

                <td>
                  <button className="edit">Sửa</button>
                </td>
                <td>
                  <button className="remove">Xóa</button>
                </td>
              </tr>
              <tr>
                <td>{ 1}</td>

                <td>{'huy'}</td>
                <td>{'huy@gmail.com'}</td>

                <td>{'******'}</td>

                <td>
                  <button className="edit">Sửa</button>
                </td>
                <td>
                  <button className="remove">Xóa</button>
                </td>
              </tr>
          </table>
        </div>
      </div>
    </Helmet>
  );
};

export default AdminAccount;
