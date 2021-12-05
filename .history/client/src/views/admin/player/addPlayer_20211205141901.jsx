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
  const [namePlayer, setNamePlayer] = useState("");
  const [name, setName] = useState("");
  const [number_clother, setNumberClother] = useState("");
  const [height, setHeight] = useState("");
  //   const [image, setRole] = useState("");
  const [role, setRole] = useState("");
  const [typePlayer, setPlayerType] = useState("");

  async function addPlayer() {
    // if (!name) {
    //   alert("error input!");
    //   return;
    // }
    const formDataCLB = new FormData();
    formDataCLB.append("name", name);

    const formData = new FormData();
    formData.append("namePLayer", namePlayer);
    formData.append("number_clother", number_clother);
    formData.append("height", height);
    formData.append("typePlayer", typePlayer);
    formData.append("role", role);


    console.log(name, number_clother, height, typePlayer, role, namePlayer);

    let result = await fetch("http://127.0.0.1:8000/api/auth/cauthu", {
      method: "get",
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
                <b>Tên câu cầu thủ</b>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Nhập tên cầu thủ"
                onChange={(e) => setName(e.target.value)}
                maxlength="30"
              />
              <Form.Text className="text-muted"></Form.Text>
              <Form.Label className="err">--</Form.Label>
              <Form.Label className="err">{val.namePlayer}</Form.Label>
            </Form.Group>

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
              <Form.Label className="err">{val.name}</Form.Label>
            </Form.Group>

            <Form.Group className="mb-3" controlId="form------">
              <Form.Label>
                <b>Chiều cao</b>
              </Form.Label>
              <Form.Control
                maxlength="5"
                type="number"
                placeholder="Hãy nhập chiều cao cầu thủ"
                onChange={(e) => setHeight(e.target.value)}
              />
              <Form.Text className="text-muted">------</Form.Text>
              <Form.Label className="err">{val.height}</Form.Label>
            </Form.Group>

            <Form.Group className="mb-3" controlId="form------">
              <Form.Label>
                <b>Số áo</b>
              </Form.Label>
              <Form.Control
                maxlength="20"
                type="number"
                placeholder="Số áo cầu thủ"
                onChange={(e) => setNumberClother(e.target.value)}
              />
              <Form.Text className="text-muted">------</Form.Text>
              <Form.Label className="err">{val.number_clother}</Form.Label>
            </Form.Group>

            <Form.Group className="mb-3" controlId="form------">
              <Form.Label>
                <b>Vị trí</b>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Chọn vị trí"
                onChange={(e) => setRole(e.target.value)}
              />
              <Form.Text className="text-muted">-</Form.Text>
              <Form.Label className="err">{val.role}</Form.Label>
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
                name && namePlayer && role && number_clother && height
                  ? "/admin"
                  : "#"
              }
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
