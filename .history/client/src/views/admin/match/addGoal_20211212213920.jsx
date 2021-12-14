import React, { useState } from "react";
import Helmet from "../../../components/Helmet/Helmet";
import AdminHeader from "../header/adminHeader";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import { store } from "react-notifications-component";
import { Link } from "react-router-dom";
import Header from "../../../containers/header/header";

export default function AddGoal() {
  const [val, setValidator] = useState([]);
  const [idCauThu, setIdCauThu] = useState("");
  const [TenDoi2, setTenDoi2] = useState("");
  const [VongDau, setVongDau] = useState("");
  const [SanDau, setSanDau] = useState("");
  const [ThoiGian, setThoiGian] = useState("");
  const [idToTT, setIdToTT] = useState("");

  async function addGoal() {
    const formData = new FormData();
    formData.append("idCauThu", idCauThu);
    formData.append("TenDoi2", TenDoi2);
    formData.append("VongDau", VongDau);
    formData.append("SanDau", SanDau);
    formData.append("idToTT", idToTT);
    formData.append("ThoiGian", ThoiGian);
    

    console.log(idCauThu, VongDau, SanDau, idToTT, ThoiGian);

    let taikhoan = JSON.parse(localStorage.getItem("taikhoan"));
    let result = await fetch("http://127.0.0.1:8000/api/auth/clb/store", {
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

    // console.log(
    //   "Trả về addGoal>>>>>>> :" +
    //     result.status +
    //     " <<<<<<<<," +
    //     taikhoan.access_token
    // );

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
      setTimeout(() => history.push("/admin/lich-dau"), 1000);

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
    history.push("/admin/lich-dau");
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
            <Form.Group className="mb-3" controlId="form------">
              <Form.Label>
                <b>Tên đội 1</b>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Nhập tên đội"
                onChange={(e) => setidCauThu(e.target.value)}
              />
              <Form.Text className="text-muted"></Form.Text>
              <Form.Label className="err">--</Form.Label>
              <Form.Label className="err">{val.idCauThu}</Form.Label>
            </Form.Group>

            <Form.Group className="mb-3" controlId="form------">
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
              <Form.Label className="err">{val.TenDoi2}</Form.Label>
            </Form.Group>


            <Form.Group className="mb-3" controlId="form------">
              <Form.Label>
                <b>Vòng đấu</b>
              </Form.Label>
              <Form.Control
                maxLength="20"
                type="text"
                placeholder="Nhập vòng đấu"
                onChange={(e) => setVongDau(e.target.value)}
              />
              <Form.Text className="text-muted">------</Form.Text>
              <Form.Label className="err">{val.VongDau}</Form.Label>
            </Form.Group>
            <Form.Group className="mb-3" controlId="form------">
              <Form.Label>
                <b>Sân vận động</b>
              </Form.Label>
              <Form.Control
                maxLength="11"
                type="text"
                placeholder="Hãy nhập sân vận động"
                onChange={(e) => setSanDau(e.target.value)}
              />
              <Form.Text className="text-muted">------</Form.Text>
              <Form.Label className="err">{val.SanDau}</Form.Label>
            </Form.Group>
            <Form.Group className="mb-3" controlId="form------">
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
            </Form.Group>
            <Form.Group className="mb-3" controlId="form------">
              <Form.Label>
                <b>
                    THời gian thi đấu</b>
              </Form.Label>
              <Form.Control
                type="date"
                placeholder="Thời gian thi đấu"
                onChange={(e) => setThoiGian(e.target.value)}
              />
              <Form.Text className="text-muted">-</Form.Text>
              <Form.Label className="err">{val.ThoiGian}</Form.Label>
            </Form.Group>
            {/* <Link
              to={
                idCauThu && idToTT && ThoiGian && VongDau && SanDau
                  ?
                  "/admin"
                  : "#" 
              }
            > */}
            <Button  onClick={addGoal} variant="outline-success">
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
