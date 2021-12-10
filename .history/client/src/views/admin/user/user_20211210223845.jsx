import { useEffect, useState } from "react";
import ReactNotification, { store } from "react-notifications-component";
// import { Link } from "react-router-dom";
import Helmet from "../../../components/Helmet/Helmet";
import AdminHeader from "../header/adminHeader";
import Header from "../../../containers/header/header";
import { useHistory } from "react-router-dom";

import "./user.scss";
//ip data
const AdminAccount = () => {
  const [val, setValidator] = useState([]);
  const [user, setUser] = useState([]);
  const [infoUser, setInfoUser] = useState([]);
  const [role, setRole] = useState([]);
  var userID = 0;

  useEffect(() => {
    getUser();
    // getInfoUser();
  }, []);

  // get info user theo id
  async function getInfoUser(id) {
    let result = await fetch("http://127.0.0.1:8000/api/clb" + id);
    result = await result.json();
    setInfoUser(result);
  }

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

  // edit user
  let history = useHistory();

  async function editUser(id) {
    // const info = document.getElementById("id__user");
    const user = document.getElementById("username");
    const role = document.getElementById("role");
    const formData = new FormData();
    formData.append("TenCLB", user.value);
    formData.append("VietTat", role.value);

    let taikhoan = JSON.parse(localStorage.getItem("taikhoan"));
    let result = await fetch(
      "http://127.0.0.1:8000/api/auth/ketqua/update/" + id,
      {
        method: "post",
        headers: {
          Authorization: "Bearer " + taikhoan.access_token,
          "X-Requested-With": "XMLHttpRequest",
        },
        body: formData,
      }
    );

    result = await result.json();

    // console.log(
    //   "Trả về addClub>>>>>>>id->>>>>. :" + typeof(id) +

    //     " <<<<<<<<," +
    //    ''
    // );
    console.log("Trả về addproduct :", JSON.stringify(result));

    if (result.status !== 200) {
      store.addNotification({
        title: "Chỉnh sửa  thất bại!",
        message: "Hãy kiểm tra thông tin của bạn !",
        type: "danger",
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 1000,
          onScreen: true,
        },
      });
      //Nếu có lối thì truyền vào cho setValidator
      setValidator(result.message);
    } else {
      setTimeout(() => history.push("/admin"), 1000);
      store.addNotification({
        title: "Chỉnh sửa  thành công !",
        message: "Hãy kiểm tra list của bạn !",
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
          {/* <button className="add">
            <i className="bx bx-plus"></i>
            <p>Thêm</p>
          </button> */}
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

            {user.map((e, index) => (
              <tr key={e.UID}>
                <td>{index + 1}</td>
                <td>{e.username}</td>
                <td>{e.email}</td>
                <td>******Đã ẩn</td>
                <td>{e.Role}</td>
                <td>
                  {/* <Link to={"/admin/tai-khoan/edit/" + e.UID}> */}
                  <button
                    id="id__user"
                    type="button"
                    className="btn btn-primary edit"
                    data-toggle="modal"
                    data-target="#exampleModal"
                    onClick={() =>
                    (
                      userID =
                        e.UID console.log(userID) && getInfoUser(e.UID))
                    }
                    // value= {e.UID}
                  >
                    Sửa
                  </button>
                  {/* </Link> */}
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

        <div
          className="modal fade"
          id="exampleModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Chỉnh sửa user
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="modal-body-item">
                  <label htmlFor="">User name:</label>
                  <input
                    id="username"
                    type="text"
                    defaultValue={infoUser.username}
                  />
                </div>
                <div className="modal-body-item">
                  <label htmlFor="">Role:</label>
                  <input id="role" type="number" defaultValue={infoUser.Role} />
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Cancel
                </button>
                <button
                  onClick={() => editUser(userID)}
                  type="button"
                  className="btn btn-primary"
                >
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Helmet>
  );
};

export default AdminAccount;
