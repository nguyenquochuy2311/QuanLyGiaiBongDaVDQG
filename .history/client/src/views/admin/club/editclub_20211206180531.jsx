import React from "react";
import Helmet from "../../../components/Helmet/Helmet";
import AdminHeader from "../header/adminHeader";
import Header from "../../../containers/header/header";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";

import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import { store } from "react-notifications-component";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";

function EditClub(props) {
  const [val, setValidator] = useState([]);

  const [data, setData] = useState([]);

  const [TenCLB, setName] = useState(data.TenCLB);
  const [VietTat, setVietTat] = useState(data.VietTat);
  const [SanNha, setSanNha] = useState(data.SanNha);
  const [TruSo, setTruSo] = useState(data.TruSo);
  const [Logo, setLogo] = useState(data.Logo);

  // chứa thông tin theo id clb

  let { id } = useParams();

  console.log(">>>>>>>>>id" + id);
  useEffect(() => {
    // getHlv();
    showID();
  }, []);

  //lay ten clb
  async function showID() {
    let result = await fetch("http://localhost:8000/api/clb/" + id);
    result = await result.json();
    setData(result);
    console.log(">>>>>>>>>>>>>>: " + result);
  }

  async function editClub(id) {
    const TenCLB = document.getElementById("TenCLB");
    const VietTat = document.getElementById("ietTat");
    const SanNha = document.getElementById("SanNha");
    const Logo = document.getElementById("Logo");
    const TruSo = document.getElementById("TruSo");
    // const stadium = document.getElementById("stadium");

    const formData = new FormData();
    formData.append("TenCLB", TenCLB);
    formData.append("VietTat", VietTat);
    formData.append("SanNha", SanNha);
    formData.append("Logo", Logo);
    formData.append("TruSo", TruSo);
    formData.append("image", Logo);

    let taikhoan = JSON.parse(localStorage.getItem("taikhoan"));
    let result = await fetch("http://127.0.0.1:8000/api/auth/clb/update" + id, {
      method: "post",
      headers: {
        Authorization: "Bearer " + taikhoan.access_token,
        "X-Requested-With": "XMLHttpRequest",
      },
      body: formData,
    });

    result = await result.json();

    console.log("Trả về addproduct :", result);

    if (result.status) {
      //Nếu có lối thì truyền vào cho setValidator
      setValidator(result.message);
    } else {
      setTimeout(() => history.push("/admin"), 1000);
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
    history.push("/admin");
  }

  return (
    <Helmet title="Chỉnh sửa CLB">
      <AdminHeader />
      <Header title="Chỉnh sửa CLB" />
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
                defaultValue={data.TenCLB}
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
                defaultValue={data.VietTat}
                maxLength="20"
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
                defaultValue={data.SanNha}
                maxLength="11"
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
                defaultValue={data.Logo}
                id="Logo"
                type="file"
                placeholder="Chọn Logo câu lạc bộ"
                onInput={(event) => setLogo(event.target.files[0])}
              />

              <Form.Text className="text-muted">-</Form.Text>
              <Form.Label className="err">{val.Logo}</Form.Label>
            </Form.Group>

            <Form.Group className="mb-3" controlId="form------">
              <Form.Label>
                <b>Trụ sở</b>
              </Form.Label>
              <Form.Control
                defaultValue={data.TruSo}
                type="text"
                placeholder="Trụ sở câu lạc bộ"
                onChange={(e) => setTruSo(e.target.value)}
              />
              <Form.Text className="text-muted">-</Form.Text>
              <Form.Label className="err">{val.TruSo}</Form.Label>
            </Form.Group>

            {/* <Link
            > */}
              <Button 
              onClick={editClub}
              variant="outline-success">
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
export default withRouter(EditClub);
