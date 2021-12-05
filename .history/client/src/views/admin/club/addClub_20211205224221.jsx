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

export default function AddClub() {
  const [val, setValidator] = useState([]);
  const [TenCLB, setName] = useState("");
  const [VietTat, setVietTat] = useState("");
  const [SanNha, setSanNha] = useState("");
  const [Image, setImage] = useState("");
  const [Logo, setLogo] = useState("");

  const [TruSo, setTruSo] = useState("");

  async function addClub() {
    const formData = new FormData();
    formData.append("TenCLB", TenCLB);
    formData.append("VietTat", VietTat);
    formData.append("SanNha", SanNha);
    formData.append("Logo", Logo);
    formData.append("TruSo", TruSo);

    console.log(TenCLB, VietTat, SanNha, Logo, TruSo);
    let result = await fetch("http://127.0.0.1:8000/api/auth/clb/store", {
      method: "post",
      headers: {
        "Content-Type": "multipart/form-data",
        Accept: "application/json",
        type: "formData",
      },
      body: formData,
    });
    result = await result.json();

    console.log("Trả về addClub>>>>>>> :", result);

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
          duration: 10000,
          onScreen: true,
        },
      });
    }
  }

  let history = useHistory();

  function backData() {
    history.push("/admin");
  }
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
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>
                <b>Tên câu lạc bộ</b>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Nhập tên câu lạc bộ"
                onChange={(e) => setName(e.target.value)}
              />
              <Form.Text className="text-muted"></Form.Text>
              <Form.Label className="err">--</Form.Label>
              <Form.Label className="err">{val.TenCLB}</Form.Label>
            </Form.Group>

            <Form.Group className="mb-3" controlId="form------">
              <Form.Label>
                <b>Tên viết tắt</b>
              </Form.Label>
              <Form.Control
                maxlength="20"
                type="text"
                placeholder="Nhập tên viết tắt"
                onChange={(e) => setVietTat(e.target.value)}
              />
              <Form.Text className="text-muted">------</Form.Text>
              <Form.Label className="err">{val.VietTat}</Form.Label>
            </Form.Group>

            <Form.Group className="mb-3" controlId="form------">
              <Form.Label>
                <b>Sân vận động</b>
              </Form.Label>
              <Form.Control
                maxlength="11"
                type="text"
                placeholder="Hãy nhập sân vận động"
                onChange={(e) => setSanNha(e.target.value)}
              />
              <Form.Text className="text-muted">------</Form.Text>
              <Form.Label className="err">{val.SanNha}</Form.Label>
            </Form.Group>

            <Form.Group className="mb-3" controlId="form------">
              <Form.Label>
                <b>Chọn Logo câu lạc bộ</b>
              </Form.Label>
              <Form.Control
              id = 'imgPreview'
                type="file"
                placeholder="Chọn Logo câu lạc bộ"
                onChange={(e) => setImage(e.target.files[0])
                
                }
               
                // ys a là e dùng Logo là string, còn image là file
                // Là setImage thành -> setImage(e.target.fileơ[0])
              />

            {console.log(document.getElementById('imgPreview').attributes[1].textContent)}
              <Form.Text className="text-muted">-</Form.Text>
              <Form.Label className="err">{val.Image}</Form.Label>
            </Form.Group>

            <Form.Group className="mb-3" controlId="form------">
              <Form.Label>
                <b>Trụ sở</b>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Trụ sở câu lạc bộ"
                onChange={(e) => setTruSo(e.target.value)}
              />
              <Form.Text className="text-muted">-</Form.Text>
              <Form.Label className="err">{val.TruSo}</Form.Label>
            </Form.Group>

            <Link
              onClick={addClub}
              to={TenCLB && Logo && TruSo && VietTat && SanNha ? "/admin" : "#"}
            >
              <Button variant="outline-success">
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
