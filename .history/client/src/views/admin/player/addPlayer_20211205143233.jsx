import React, { useState } from "react";
import Helmet from "../../../components/Helmet/Helmet";
import AdminHeader from "../header/adminHeader";
import Header from "../../../containers/header/header";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import { store } from "react-notifications-component";
import { Link } from "react-router-dom";
import PLayer from "./player";

export default function AddPlayer() {
  const [val, setValidator] = useState([]);
  const [TenCT, setTenCT] = useState("");
  const [TenCLB, setTenCLB] = useState("");
  const [SoAo, setNumberClother] = useState("");
  const [ChieuCao, setChieuCao] = useState("");
  //   const [image, setViTri] = useState("");
  const [ViTri, setViTri] = useState("");
  const [LoaiCauThu, setPlayerType] = useState("");

  async function addPlayer() {
   
    const formData = new FormData();
    formData.append("TenCT", TenCT);
    formData.append("TenCLB", TenCLB);
    formData.append("SoAo", SoAo);
    formData.append("ChieuCao", ChieuCao);
    formData.append("LoaiCauThu", LoaiCauThu);
    formData.append("ViTri", ViTri);


    console.log(TenCLB, SoAo, ChieuCao, LoaiCauThu, ViTri, TenCT);

    let result = await fetch("http://127.0.0.1:8000/api/auth/cauthu/store", {
      method: "post",
      body: formData,
    });
   

    result = await result.json();


    console.log("Trả về addPlayer>>>>>>> :", result);

    if (result.val_err) {
      //Nếu có lối thì truyền vào cho setValidator

      setValidator(result.val_err);
    } else {
      store.addNotification({
        title: "Thêm  thành công !",
        message: "Hãy kiểm tra danh sách của bạn !",
        type: "success",
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 5000,
          onScreen: true,
        },
      });
    }
  }

  let history = useHistory();

  function backData() {
    history.push("/admin/cau-thu");
  }
  return (
    <Helmet title="Thêm câu lạc bộ">
      <AdminHeader />
      <Header title="Thêm câu lạc bộ" />
      <ReactNotification />
      <Row style={{ paddingTop: "50px", background: "#ccc" }}>
        <div classTenCLB="btn__back" style={{ transform: "translateX(100px)" }}>
          <button onClick={backData}>
            <i class="bx bx-arrow-back"></i>
            <p>Trở lại</p>
          </button>
        </div>
        <Col md={{ span: 4, offset: 4 }}>
          <Form classB="form">
            <Form.Group classTenCLB="mb-3" controlId="formBasicEmail">
              <Form.Label>
                <b>Tên câu cầu thủ</b>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Nhập tên cầu thủ"
                onChange={(e) => setTenCT(e.target.value)}
                maxlength="30"
              />
              <Form.Text classTenCLB="text-muted"></Form.Text>
              <Form.Label classTenCLB="err">--</Form.Label>
              <Form.Label classTenCLB="err">{val.TenCT}</Form.Label>
            </Form.Group>

            <Form.Group classTenCLB="mb-3" controlId="formBasicEmail">
              <Form.Label>
                <b>Tên câu lạc bộ</b>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Nhập tên câu lạc bộ"
                onChange={(e) => setTenCLB(e.target.value)}
              />
              <Form.Text classTenCLB="text-muted"></Form.Text>
              <Form.Label classTenCLB="err">--</Form.Label>
              <Form.Label classTenCLB="err">{val.TenCLB}</Form.Label>
            </Form.Group>

            <Form.Group classTenCLB="mb-3" controlId="form------">
              <Form.Label>
                <b>Chiều cao</b>
              </Form.Label>
              <Form.Control
                maxlength="5"
                type="number"
                placeholder="Hãy nhập chiều cao cầu thủ"
                onChange={(e) => setChieuCao(e.target.value)}
              />
              <Form.Text classTenCLB="text-muted">------</Form.Text>
              <Form.Label classTenCLB="err">{val.ChieuCao}</Form.Label>
            </Form.Group>

            <Form.Group classTenCLB="mb-3" controlId="form------">
              <Form.Label>
                <b>Số áo</b>
              </Form.Label>
              <Form.Control
                maxlength="20"
                type="number"
                placeholder="Số áo cầu thủ"
                onChange={(e) => setNumberClother(e.target.value)}
              />
              <Form.Text classTenCLB="text-muted">------</Form.Text>
              <Form.Label classTenCLB="err">{val.SoAo}</Form.Label>
            </Form.Group>

            <Form.Group classTenCLB="mb-3" controlId="form------">
              <Form.Label>
                <b>Vị trí</b>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Chọn vị trí"
                onChange={(e) => setViTri(e.target.value)}
              />
              <Form.Text classTenCLB="text-muted">-</Form.Text>
              <Form.Label classTenCLB="err">{val.ViTri}</Form.Label>
            </Form.Group>

            <Form.Label>
              <b>Loại cầu thủ</b>
            </Form.Label>
            <br />
            <Form.Select
              style={{ padding: "5px 10px" }}
              onChange={(e) => setPlayerType(e.target.value)}
              aria-label="Chọn loại cầu thủ"
            >
              <option value="trongnuoc" selected>
                Trong nước
              </option>
              <option value="ngoainuoc">Ngoài nước</option>
            </Form.Select>
            <br />
            <br />
            <br />
            <Link
              onClick={addPlayer}
              to={
                TenCLB && TenCT && ViTri && SoAo && ChieuCao
                  ? "/admin/cau-thu"
                  : "#"
              }
            >
              <Button  variant="outline-success">
                <b>Thêm ngay</b>
              </Button>{" "}
            </Link>
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
