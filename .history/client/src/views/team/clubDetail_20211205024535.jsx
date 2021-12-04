import { useParams, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";

import Helmet from "../../components/Helmet/Helmet";
import Header from "../../containers/header/header";
//ip data

////////////////////////////////
import "../../styles/_variables.scss";
import "../../styles/global.scss";

const TeamDetail = (props) => {
  let n = 1;
  const [clb, setclb] = useState([]);
  const [InfoPlayer, setInfoPlayer] = useState([]);

  useEffect(() => {
    // getclb();
    getInfoPlayer();
  }, []);
  // async function getclb() {
  //   let result = await fetch("http://127.0.0.1:8000/api/clb");
  //   result = await result.json();
  //   // console.log('<<<<<<<<<<<<result'+ result);
  //   setclb(result);
  // }

  console.log(">>>>>>>>>>>>>>>>>>" + window.location.href);
  // lay cau thu
  async function getInfoPlayer() {
    let result = await fetch("http://127.0.0.1:8000/api/cauthu");
    result = await result.json();
    setInfoPlayer(result);
  }

  let { slug } = useParams();
  let history = useHistory();

  function backData() {
    history.push("/doi-bong");
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
    <Helmet title="Chi tiết CLB ">
      <Header title="Chi tiết câu lạc bộ " />
      <div className="component">
        <div className="table">
          <div className="btn__back">
            <button onClick={backData}>
              <i class="bx bx-arrow-back"></i>
              <p>Trở lại</p>
            </button>
          </div>
          <h1 className="table__title">
            Thông tin chi tiết câu lạc bộ
            <h2 style={{ color: "#189267", fontSize: "1.4rem" }}>
              {"Becamex Bình Dương"}
            </h2>
          </h1>
          <table className="table__content">
            <tr>
              <th>STT</th>
              <th>Cầu thủ</th>
              <th>Số áo </th>
              <th>Vị trí </th>
              <th>Chiều cao</th>
              <th>Năm sinh</th>
            </tr>
            {InfoPlayer.map((e) =>
              // clb.map(
              //   (item, index) =>
              //     e.TenCT === item.TenCT &&
                 sl === "Kiatisuk Senamuang" &&
                   (
                    <tr>
                      <td>{n++}</td>
                      <td>
                        <div className="img">
                          <img
                            src={
                              require(`../../assets/img/AnhCauthu/${
                                e.clb.TenCLB
                              }/${
                                e.AnhDaiDien === "Anh_HAGL_NguyenHuuT uan"
                                  ? "Anh_HAGL_VuVanThanh"
                                  : e.AnhDaiDien
                              }${".jpg" || ".png"}`).default
                            }
                            alt="not found"
                          />
                        </div>
                        <p>{item.TenCT}</p>
                      </td>
                      <td>{e.SoAo}</td>
                      <td>{e.ViTri}</td>
                      <td>{e.ChieuCao}</td>
                      <td>{e.NgaySinh}</td>
                    </tr>
                  )
              
            )
            }
          </table>
        </div>
      </div>
    </Helmet>
  );
};

export default TeamDetail;
