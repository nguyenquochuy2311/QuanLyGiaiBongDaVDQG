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
    let result = await fetch("http://127.0.0.1:8000/api/clb");
    result = await result.json();
    // console.log('<<<<<<<<<<<<result'+ result);
    setBxhClb(result);
  }

  async function getBxhClb() {
    let result = await fetch("http://127.0.0.1:8000/api/clb");
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

function to_slug(str)
{
    // Chuyển hết sang chữ thường
    str = str.toLowerCase();     
 
    // xóa dấu
    str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
    str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
    str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
    str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
    str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
    str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
    str = str.replace(/(đ)/g, 'd');
 
    // Xóa ký tự đặc biệt
    str = str.replace(/([^0-9a-z-\s])/g, '');
 
    // Xóa khoảng trắng thay bằng ký tự -
    str = str.replace(/(\s+)/g, '-');
 
    // xóa phần dự - ở đầu
    str = str.replace(/^-+/g, '');
 
    // xóa phần dư - ở cuối
    str = str.replace(/-+$/g, '');
 
    // return
    return str;
}
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
            {
              cardsSorted.map((item, index) =>
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
                        <p>
                          {hlv.map((element) =>
                            element.c_l_b.TenCLB === item.TenCLB
                              ? element.TenHLV
                              : ""
                          )}
                        </p>
                      </td>
                      <td>
                        <p>{e.stadium}</p>
                      </td>
                      <td>{item.Thang}</td>
                      <td>{item.Hoa}</td>
                      <td>{item.Thua}</td>
                      <td>{item.Diem}</td>
                      <td>
                        <Link to={`/admin/club/edit/`+ to_slug(item.TenCLB)}>
                          <button className="edit">Sửa</button>
                        </Link>
                      </td>
                      <td>
                        <button onClick={()=> deleteClub()} className="remove">Xóa</button>
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
