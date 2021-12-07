import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReactNotification, { store } from "react-notifications-component";

import Helmet from "../../../components/Helmet/Helmet";
import AdminHeader from "../header/adminHeader";
import Header from "../../../containers/header/header";

//ip data
import card_team_data from "../../../assets/fake-data/CardTeams";
import { LogoSoccer } from "../../../assets/img";

const Club = (props) => {
  let n = 1;
  const [bxhClb, setBxhClb] = useState([]);
  const [clb, setClb] = useState([]);
  const [hlv, setHlv] = useState([]);

  useEffect(() => {
    getBxhClb();
    getHlv();
    getClb();
  }, []);

  async function getClb() {
    let result = await fetch("http://127.0.0.1:8000/api/clb");
    result = await result.json();
    // console.log('<<<<<<<<<<<<result'+ result);
    setClb(result);
  }

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
    if (Number(a.Diem) > Number(b.Diem)) {
      return -1;
    }
    if (Number(a.Diem) < Number(b.Diem)) {
      return 1;
    }
    return 0;
  }

  const cardsSorted = bxhClb.sort(compare);

  let taikhoan = JSON.parse(localStorage.getItem("taikhoan"));

  // console.log(taikhoan.access_token);
  async function deleteClub(id) {
    console.log(">>>>>>>>>>>.." + id);

    await fetch("http://localhost:8000/api/auth/clb/delete/" + id, {
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
    <Helmet title="Quản Lý CLB">
      <AdminHeader />
      <ReactNotification />
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
              <th>Tên Viết Tắt</th>
              <th>Trụ Sở</th>
              <th>Sân Vận Động</th>
              <th>Thắng</th>
              <th>Hòa</th>
              <th>Thua</th>
              <th>Số điểm</th>
              <th>Sửa</th>
              <th>Xóa</th>
            </tr>
            {clb.map((item, index) => (
              <tr key={item.idCLB}>
                <td>{index + 1}</td>
                <td>
                  <picture className="img logo">
                    <source
                      srcSet={card_team_data.getAllCards().find((e) =>{
                       return e.title === item.TenCLB ? e.img : ''}
                          // ? e.img
                          // : // <img src={item.Logo} alt="not found" />
                          //   " "
                      )}
                    />

                    {/* <img
                      src={LogoSoccer}
                      alt="not found"
                    /> */}
                  </picture>
                  <p>{item.TenCLB}</p>
                </td>
                <td>
                  {/* <p>
                      {hlv.map((element) =>
                        element.c_l_b.TenCLB === item.TenCLB
                          ? element.TenHLV
                          : ""
                      )}
                    </p> */}
                  {item.VietTat}
                </td>
                <td>
                  <p>{item.TruSo}</p>
                </td>
                <td>
                  <p>{item.SanNha}</p>
                </td>
                <td>
                  {cardsSorted.map((e) =>
                    e.TenCLB === item.TenCLB ? e.Thang : ""
                  )}
                </td>
                <td>
                  {cardsSorted.map((e) =>
                    e.TenCLB === item.TenCLB ? e.Hoa : ""
                  )}
                </td>
                <td>
                  {cardsSorted.map((e) =>
                    e.TenCLB === item.TenCLB ? e.Thua : ""
                  )}
                </td>
                <td>
                  {cardsSorted.map((e) =>
                    e.TenCLB === item.TenCLB ? e.Diem : ""
                  )}
                </td>
                <td>
                  <Link to={`/admin/club/edit/` + item.idCLB}>
                    <button className="edit">Sửa</button>
                  </Link>
                </td>
                <td>
                  <button
                    onClick={() => deleteClub(item.idCLB)}
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

export default Club;
