import React from "react";
import Helmet from "../../../components/Helmet/Helmet";
import AdminHeader from "../header/adminHeader";
import Header from "../../../containers/header/header";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";

import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import { store } from "react-notifications-component";
import { useEffect, useState } from "react";
// import { withRouter } from "react-router-dom";

function EditDiemSo() {
  const [val, setValidator] = useState([]);
  const [data, setData] = useState([]);

  const ThoiDiemBatDau = document.getElementById("ThoiDiemBatDau");
  const ThoiDienKetThuc = document.getElementById("ThoiDienKetThuc");
  const LoaiBT = document.getElementById("LoaiBT");

  let { id } = useParams();

  console.log(">>>>>>>>>id" + id);
  useEffect(() => {
    showID();
  }, []);

  //lay ten clb
  async function showID() {
    let result = await fetch("http://localhost:8000/api/qd-banthang/" + id);
    result = await result.json();
    setData(result);
    // console.log(">>>>>>>>>>>>>>: " + JSON.stringify(result));
  }

  async function editDiemSo(id) {
    // const stadium = document.getElementById("stadium");

    const formData = new FormData();
    formData.append("ThoiDiemBatDau", ThoiDiemBatDau.value);
    formData.append("ThoiDienKetThuc", ThoiDienKetThuc.value);
    formData.append("LoaiBT", LoaiBT.value);

    // let a = JSON.parse(data)

    let taikhoan = JSON.parse(localStorage.getItem("taikhoan"));
    let result = await fetch(
      "http://127.0.0.1:8000/api/auth/qd-diemso/update/" + id,
      {
        method: "post",
        headers: {
          Authorization: "Bearer " + taikhoan.access_token,
          "X-Requested-With": "XMLHttpRequest",
        },
        body: formData,
      }
    );

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
      setTimeout(() => history.push("/admin/quy-dinh"), 1000);
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

  let history = useHistory();
  function backData() {
    history.push("/admin/quy-dinh");
  }

  

  return (
    <Helmet title="Chỉnh sửa quy đinh bàn thắng">
      <AdminHeader />
      <Header title="Chỉnh sửa quy đinh bàn thắng" />
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
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>
                <b>ID mùa giải</b>
              </Form.Label>
              <Form.Control
                id="LoaiBT"
                defaultValue={data.LoaiBT}
                disabled={true}
                type="text"
                placeholder="Loại bàn thắng"
                // onChange={(e) => setName(e.target.value)}
              />
              <Form.Text className="text-muted"></Form.Text>
              <Form.Label className="err">--</Form.Label>
              <Form.Label className="err">{val.LoaiBT}</Form.Label>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>
                <b>Thời điểm bắt đầu</b>
              </Form.Label>
              <Form.Control
                id="ThoiDiemBatDau"
                defaultValue={data.ThoiDiemBatDau}
                type="number"
                placeholder="Thời điểm bắt đầu"
                // onChange={(e) => setName(e.target.value)}
              />
              <Form.Text className="text-muted"></Form.Text>
              <Form.Label className="err">--</Form.Label>
              <Form.Label className="err">{val.ThoiDiemBatDau}</Form.Label>
            </Form.Group>
            <Form.Group className="mb-3" controlId="form------">
              <Form.Label>
                <b>Thời điểm kết thúc</b>
              </Form.Label>
              <Form.Control
                id="ThoiDienKetThuc"
                defaultValue={data.ThoiDienKetThuc}
                maxLength="20"
                type="number"
                placeholder="Thời điểm kết thúc"
                // onChange={(e) => setThoiDienKetThuc(e.target.value)}
              />
              <Form.Text className="text-muted">------</Form.Text>
              <Form.Label className="err">{val.ThoiDienKetThuc}</Form.Label>
            </Form.Group>
            {/* <Link
            > */}
            <Button
              onClick={() =>
                ThoiDiemBatDau.value > ThoiDienKetThuc.value
               
                  ? editDiemSo(data.idQUYDINHDIEMSO)
                  : alert("Thông tin điểm không hợp lệ")
              }
              variant="outline-success"
            >
              <b>Sửa ngay</b>
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
export default EditDiemSo;
