import React, { useState } from "react";
import Helmet from "../../../components/Helmet/Helmet";
import AdminHeader from "../header/adminHeader";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import { store } from "react-notifications-component";
import Header from "../../../containers/header/header";

export default function AddResult() {
  const [val, setValidator] = useState([]);
  const [BTDoi1, setBTDoi1] = useState("");
  const [BanThangDoi2, setBanThangDoi2] = useState("");
  const [IdTranDau, setIdTranDau] = useState("");
  const [XuPhat, setXuPhat] = useState([]);
  const [BanThang, setBanThang] = useState([]);
  // const [ThoiGian, setThoiGian] = useState([]);
  // const [NgayThiDau, setNgayThiDau] = useState([]);
  // const [GioThiDau, setGioThiDau] = useState([]);




  async function addResult() {
    const formData = new FormData();
    formData.append("BTDoi1", BTDoi1);
    formData.append("BanThangDoi2", BanThangDoi2);
    // formData.append("XuPhat", XuPhat);
    // formData.append("BanThang", BanThang);
    // formData.append("TenDoi1", TenDoi1);
    // formData.append("TenDoi2", TenDoi2);
    // formData.append("ThoiGian", ThoiGian);
    formData.append("idTD", IdTranDau);


    

    console.log(BTDoi1, XuPhat, BanThang, XuPhat, BanThang);

    let taikhoan = JSON.parse(localStorage.getItem("taikhoan"));
    let result = await fetch("http://127.0.0.1:8000/api/auth/ketqua/store", {
      method: "post",
      headers: {
        Authorization: "Bearer " + taikhoan.access_token,
        "X-Requested-With": "XMLHttpRequest",
        // "Content-Type": "multipart/form-data",
        // Accept: "application/json",
        type: "formData",
      },
      body: formData,
    });
    result = await result.json();

console.log(result);
    if (result.status !== 200) {
      //Nếu có lối thì truyền vào cho setValidator

      store.addNotification({
        title: "Thêm thất bại !",
        message: " Kiểm tra lại thông tin của bạn !",
        type: "danger",
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 2000,
          onScreen: true,
        },
      });
      setValidator(result.message);
    } else {
      setTimeout(() => history.push("/admin/ket-qua-tran-dau"), 1000);

      store.addNotification({
        title: "Thêm  thành công !",
        message: "Hãy kiểm tra danh sách của bạn !",
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
  

  let history = useHistory();
  function backData() {
    history.push("/admin/ket-qua-tran-dau");
  }

//   format date
//   function formatDate(date) {
//     let d = new Date(date),
//         month = '' + (d.getMonth() + 1),
//         day = '' + d.getDate(),
//         year = d.getFullYear();

//     if (month.length < 2) 
//         month = '0' + month;
//     if (day.length < 2) 
//         day = '0' + day;

//     return [year, month, day].join('-');
// }
  return (
    <Helmet title="Thêm câu lạc bộ">
      <AdminHeader />
      <Header title="Thêm câu lạc bộ" />
      <ReactNotification />
      <Row style={{ paddingTop: "50px", background: "#ccc" }}>
        <div className="btn__back" style={{ transform: "translateX(100px)" }}>
          <button onClick={backData}>
            <i class="bx bx-arrow-back"></i>
            <p>Trở lại</p>
          </button>
        </div>
        <Col md={{ span: 4, offset: 4 }}>
          <Form className="form">
          <Form.Group className="mb-3" controlId="form------">
              <Form.Label>
                <b>ID trận đấu</b>
              </Form.Label>
              <Form.Control
                type="number"
                placeholder="Nhập id trận đấu"
                onChange={(e) => setIdTranDau(e.target.value)}
              />
              <Form.Text className="text-muted"></Form.Text>
              <Form.Label className="err">--</Form.Label>
              <Form.Label className="err">{val.idTrandau}</Form.Label>
            </Form.Group>
          {/* <Form.Group className="mb-3" controlId="form------">
              <Form.Label>
                <b>Tên đội 1</b>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Nhập tên đội"
                onChange={(e) => setTenDoi1(e.target.value)}
              />
              <Form.Text className="text-muted"></Form.Text>
              <Form.Label className="err">--</Form.Label>
              <Form.Label className="err">{val.TenDoi1}</Form.Label>
            </Form.Group> */}

            <Form.Group className="mb-3" controlId="form------">
              <Form.Label>
                <b>Bàn thắng đội 1</b>
              </Form.Label>
              <Form.Control
                type="number"
                maxLength='5'
                placeholder="Nhập bàn thắng đội 1"
                onChange={(e) => setBTDoi1(e.target.value)}
              />
              <Form.Text className="text-muted"></Form.Text>
              <Form.Label className="err">--</Form.Label>
              <Form.Label className="err">{val.BTDoi1}</Form.Label>
            </Form.Group>

            {/* <Form.Group className="mb-3" controlId="form------">
              <Form.Label>
                <b>Tên đội 2</b>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Nhập tên đội"
                onChange={(e) => setTenDoi2(e.target.value)}
              />
              <Form.Text className="text-muted"></Form.Text>
              <Form.Label className="err">--</Form.Label>
              <Form.Label className="err">{val.BanThangDoi2}</Form.Label>
            </Form.Group> */}

            <Form.Group className="mb-3" controlId="form------">
              <Form.Label>
                <b>Bàn thắng đội 2</b>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Nhập tên đội"
                onChange={(e) => setBanThangDoi2(e.target.value)}
              />
              <Form.Text className="text-muted"></Form.Text>
              <Form.Label className="err">--</Form.Label>
              <Form.Label className="err">{val.BanThangDoi2}</Form.Label>
            </Form.Group>

            {/* <Form.Group className="mb-3" controlId="form------">
              <Form.Label>
                <b>Xử phạt</b>
              </Form.Label>
              <Form.Control
                maxLength="20"
                type="text"
                placeholder="Nhập thông tin xử phạt"
                onChange={(e) => setXuPhat(e.target.value)}
              />
              <Form.Text className="text-muted">------</Form.Text>
              <Form.Label className="err">{val.XuPhat}</Form.Label>
            </Form.Group>
            <Form.Group className="mb-3" controlId="form------">
              <Form.Label>
                <b>Bàn thắng</b>
              </Form.Label>
              <Form.Control
                maxLength="11"
                type="text"
                placeholder="Hãy nhập sân vận động"
                onChange={(e) => setBanThang(e.target.value)}
              />
              <Form.Text className="text-muted">------</Form.Text>
              <Form.Label className="err">{val.BanThang}</Form.Label>
            </Form.Group> */}
            {/* <Form.Group className="mb-3" controlId="form------">
              <Form.Label>
                <b>Chọn tổ trọng tài</b>
              </Form.Label>
              <Form.Control
                id="idToTT"
                type="number"
                placeholder="Chọn idToTT câu lạc bộ"
                onChange={(event) => setIdToTT(event.target.value)}
              />

              <Form.Text className="text-muted">-</Form.Text>
              <Form.Label className="err">{val.idToTT}</Form.Label>
            </Form.Group> */}
            {/* <Form.Group className="mb-3" controlId="form------">
              <Form.Label>
                <b>
                    Ngày thi đấu</b>
              </Form.Label>
              <Form.Control
                type="date"
                placeholder="Thời gian thi đấu"
                onChange={(e) => setNgayThiDau(formatDate(e.target.value))}
              />
              <Form.Text className="text-muted">-</Form.Text>
              <Form.Label className="err">{val.ThoiGian}</Form.Label>
            </Form.Group>
            <Form.Group className="mb-3" controlId="form------">
              <Form.Label>
                <b>
                    Giờ thi đấu</b>
              </Form.Label>
              <Form.Control
                type="date"
                placeholder="Giờ thi đấu"
                onChange={(e) => setGioThiDau(e.target.value)}
              />
              <Form.Text className="text-muted">-</Form.Text>
              <Form.Label className="err">{val.ThoiGian}</Form.Label>
            </Form.Group> */}
            {/* <Link
              to={
                BTDoi1 && idToTT && ThoiGian && XuPhat && BanThang
                  ?
                  "/admin"
                  : "#" 
              }
            > */}
            <Button  onClick={addResult} variant="outline-success">
              <b>Thêm ngay</b>
            </Button>{" "}
            {/* </Link> */}
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </Form>
        </Col>
      </Row>
    </Helmet>
  );
}
