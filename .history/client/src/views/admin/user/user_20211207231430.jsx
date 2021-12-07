import { useEffect, useState } from "react";
import ReactNotification, { store } from "react-notifications-component";
import Helmet from "../../../components/Helmet/Helmet";
import AdminHeader from "../header/adminHeader";
import Header from "../../../containers/header/header";
//ip data
const AdminAccount = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    getUser();
  }, []);

  // let index = 1;
  let taikhoan = JSON.parse(localStorage.getItem("taikhoan"));
  async function getUser() {
    let result = await fetch("http://127.0.0.1:8000/api/auth/all-user", {
      method: "get",
      headers: {
        Authorization: "Bearer " + taikhoan.access_token,
        "X-Requested-With": "XMLHttpRequest",
      },
    });
    result = await result.json();
    setUser(result);
  }

  async function deleteAccount(id) {
    await fetch("http://127.0.0.1:8000/api/auth/delete/" + id, {
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
  return (
    <Helmet title="Admin user">
      <AdminHeader />
      <ReactNotification />
      <Header title="Tài khoản người dùng" />
      <div className="component admin">
        <div className="table" style={{ transform: "translateY(-120px)" }}>
          <h1 className="table__title">Danh sách Tài khoản </h1>
          <button className="add">
            <i class="bx bx-plus"></i>
            <p>Thêm</p>
          </button>
          <table className="table__content">
            <tr>
              <th>STT</th>
              <th>Tên đăng nhập</th>
              <th>Email</th>
              <th>Mật khẩu</th>
              <th>Role</th>
              <th>Sửa</th>
              <th>Xóa</th>
            </tr>

            {user.map((e,index) => (
              <tr key={e.UID}>
                <td>{index+1}</td>
                <td>{e.username}</td>
                <td>{e.email}</td>
                <td>******Đã ẩn</td>
                <td>{e.Role}</td>
                <td>
                  <Link to='/admin/'>
                     </Link>
                  <button className="edit">Sửa</button>
                </td>
                <td>
                  <button
                    onClick={() => deleteAccount(e.UID)}
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

export default AdminAccount;
