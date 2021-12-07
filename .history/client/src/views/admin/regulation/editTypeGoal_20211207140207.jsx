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

  const BatDau = document.getElementById("BatDau");
  const KetThuc = document.getElementById("KetThuc");
  const LoaiBanThang = document.getElementById("LoaiBanThang");

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
    formData.append("BatDau", BatDau.value);
    formData.append("KetThuc", KetThuc.value);
    formData.append("LoaiBanThang", LoaiBanThang.value);

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
                id="LoaiBanThang"
                defaultValue={data.LoaiBanThang}
                disabled={true}
                type="text"
                placeholder="Loại bàn thắng"
                // onChange={(e) => setName(e.target.value)}
              />
              <Form.Text className="text-muted"></Form.Text>
              <Form.Label className="err">--</Form.Label>
              <Form.Label className="err">{val.LoaiBanThang}</Form.Label>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>
                <b>Điểm thắng</b>
              </Form.Label>
              <Form.Control
                id="BatDau"
                defaultValue={data.BatDau}
                type="number"
                placeholder="Nhập điểm thắng"
                // onChange={(e) => setName(e.target.value)}
              />
              <Form.Text className="text-muted"></Form.Text>
              <Form.Label className="err">--</Form.Label>
              <Form.Label className="err">{val.BatDau}</Form.Label>
            </Form.Group>
            <Form.Group className="mb-3" controlId="form------">
              <Form.Label>
                <b>Điểm hòa</b>
              </Form.Label>
              <Form.Control
                id="KetThuc"
                defaultValue={data.KetThuc}
                maxLength="20"
                type="number"
                placeholder="Điểm hòa"
                // onChange={(e) => setKetThuc(e.target.value)}
              />
              <Form.Text className="text-muted">------</Form.Text>
              <Form.Label className="err">{val.KetThuc}</Form.Label>
            </Form.Group>
            <Form.Group className="mb-3" controlId="form------">
              <Form.Label>
                <b>Điểm thua</b>
              </Form.Label>
              <Form.Control
                id="DiemThua"
                defaultValue={data.DiemThua}
                maxLength="11"
                type="number"
                placeholder="Điểm thua"
                // onChange={(e) => setDiemThua(e.target.value)}
              />
              <Form.Text className="text-muted">------</Form.Text>
              <Form.Label className="err">{val.DiemThua}</Form.Label>
            </Form.Group>
            {/* <Link
            > */}
            <Button
              onClick={() =>
                BatDau.value > KetThuc.value &&
                KetThuc.value > DiemThua.value
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
