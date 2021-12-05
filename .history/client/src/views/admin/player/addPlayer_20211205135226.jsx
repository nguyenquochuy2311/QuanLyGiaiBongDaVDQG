import React, { useState } from "react";
import Helmet from "../../../components/Helmet/Helmet";
import AdminHeader from "../header/adminHeader";
import Header from "../../../containers/header/header";
import { Form, Button, Row, Col } from "react-bootstrap";
import {  useHistory } from "react-router-dom";

import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import { store } from "react-notifications-component";
import { Link } from "react-router-dom";
import PLayer from "./player";

export default function AddClub() {
  const [val, setValidator] = useState([]);
  const [namePlayer, setNamePlayer] = useState("");
  const [name, setName] = useState("");
  const [name_refe, setNameRefe] = useState("");
  const [name_stadium, setNameStadium] = useState("");
  const [image, setImage] = useState("");
  const [location, setLocation] = useState("");

  async function addClub() {
    // if (!name) {
    //   alert("error input!");
    //   return;
    // }

    const formData = new FormData();
    formData.append("namePLayer", namePlayer);
    formData.append("name", name);
    formData.append("name_refe", name_refe);
    formData.append("name_stadium", name_stadium);
    formData.append("image", image);
    formData.append("location", location);

    console.log(name, name_refe, name_stadium, image, location);
    let result = await fetch("http://127.0.0.1:8000/api/hlv", {
      method: "get",
      body: formData,
    });
    result = await result.json();

    console.log("Trả về addClub>>>>>>> :", result);

    if (result.val_err) {
      //Nếu có lối thì truyền vào cho setValidator
     
      setValidator(  result.val_err );
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
  
    function backData (){
      history.push('/admin')
    }
  return (
    <Helmet title="Thêm câu lạc bộ">
      <AdminHeader />
      <Header title="Thêm câu lạc bộ" />
      <ReactNotification />
      <Row style={{ paddingTop: "50px", background: "#ccc" }}>
      <div className="btn__back" style={{transform: "translateX(100px)"}}>
                <button onClick={backData} >
                <i class='bx bx-arrow-back'></i>
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
                <b>Sân vận động</b>
              </Form.Label>
              <Form.Control
                maxlength="11"
                type="text"
                placeholder="Hãy nhập sân vận động"
                onChange={(e) => setNameStadium(e.target.value)}
              />
              <Form.Text className="text-muted">------</Form.Text>
              <Form.Label className="err">{val.stadium}</Form.Label>
            </Form.Group>

            <Form.Group className="mb-3" controlId="form------">
              <Form.Label>
                <b>Huấn luyện viên trưởng</b>
              </Form.Label>
              <Form.Control
                maxlength="20"
                type="text"
                placeholder="Huấn luyện viên trưởng"
                onChange={(e) => setNameRefe(e.target.value)}
              />
              <Form.Text className="text-muted">------</Form.Text>
              <Form.Label className="err">{val.name_refe}</Form.Label>
            </Form.Group>

            <Form.Group className="mb-3" controlId="form------">
              <Form.Label>
                <b>Chọn Logo câu lạc bộ</b>
              </Form.Label>
              <Form.Control
                type="file"
                placeholder="Chọn Logo câu lạc bộ"
                onChange={(e) => setImage(e.target.files[0])}
              />
              <Form.Text className="text-muted">-</Form.Text>
              <Form.Label className="err">{val.img}</Form.Label>
            </Form.Group>

            <Form.Group className="mb-3" controlId="form------">
              <Form.Label>
                <b>Trụ sở</b>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Trụ sở câu lạc bộ"
                onChange={(e) => setLocation(e.target.value)}
              />
              <Form.Text className="text-muted">-</Form.Text>
              <Form.Label className="err">{val.location}</Form.Label>
            </Form.Group>

            <Link
              onClick={addClub}
              to={
                name && image && location && name_refe && name_stadium
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
