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

  // const [DiemThang, setName] = useState(data.DiemThang);
  // const [DiemHoa, setDiemHoa] = useState(data.DiemHoa);
  // const [DiemThua, setDiemThua] = useState(data.DiemThua);
  // const [TruSo, setTruSo] = useState(data.TruSo);
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
    let result = await fetch("http://localhost:8000/api/qd-diemso");
    result = await result.json();
    setData(result);
    console.log(">>>>>>>>>>>>>>: " + result);
  }

  async function editDiemSo() {
    const DiemThang = document.getElementById("DiemThang");
    const DiemHoa = document.getElementById("DiemHoa");
    const DiemThua = document.getElementById("DiemThua");
    const idMG = document.getElementById("idMG");

    // const stadium = document.getElementById("stadium");

    const formData = new FormData();
    formData.append("DiemThang", DiemThang.value);
    formData.append("DiemHoa", DiemHoa.value);
    formData.append("DiemThua", DiemThua.value);
    formData.append("idMG", idMG.value);


    let a = JSON.parse(data)

    let taikhoan = JSON.parse(localStorage.getItem("taikhoan"));
    let result = awpait fetch(
      "http://127.0.0.1:8000/api/auth/qd-diemso/update/" ,
      {
        method: "put",
        headers: {
          Authorization: "Bearer " + taikhoan.access_token,
          "X-Requested-With": "XMLHttpRequest",
        },
        body: formData,
      }

    );
 
    console.log(formData+'>>>>>>>>>>>>>>>.' );
    result = await result.json();
    console.log("Trả về addClub>>>>>>> :" + result + " <<<<<<<<," + " ");

    // console.log("Trả về addproduct :", result);

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
    history.push("/admin");
  }

  return (
    <Helmet title="Chỉnh sửa quy đinh điểm số">
      <AdminHeader />
      <Header title="Chỉnh sửa quy đinh điểm số" />
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
                id="idMG"
                defaultValue={data.idMG}
                type="number"
                placeholder="Nhập id mùa giải"
                // onChange={(e) => setName(e.target.value)}
              />
              <Form.Text className="text-muted"></Form.Text>
              <Form.Label className="err">--</Form.Label>
              <Form.Label className="err">{val.DiemThang}</Form.Label>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>
                <b>Điểm thắng</b>
              </Form.Label>
              <Form.Control
                id="DiemThang"
                defaultValue={data.DiemThang}
                type="number"
                placeholder="Nhập điểm thắng"
                // onChange={(e) => setName(e.target.value)}
              />
              <Form.Text className="text-muted"></Form.Text>
              <Form.Label className="err">--</Form.Label>
              <Form.Label className="err">{val.DiemThang}</Form.Label>
            </Form.Group>
            <Form.Group className="mb-3" controlId="form------">
              <Form.Label>
                <b>Điểm hòa</b>
              </Form.Label>
              <Form.Control
                id="DiemHoa"
                defaultValue={data.DiemHoa}
                maxLength="20"
                type="number"
                placeholder="Điểm hòa"
                // onChange={(e) => setDiemHoa(e.target.value)}
              />
              <Form.Text className="text-muted">------</Form.Text>
              <Form.Label className="err">{val.DiemHoa}</Form.Label>
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
                placeholder="Hãy nhập sân vận động"
                // onChange={(e) => setDiemThua(e.target.value)}
              />
              <Form.Text className="text-muted">------</Form.Text>
              <Form.Label className="err">{val.DiemThua}</Form.Label>
            </Form.Group>
            {/* <Link
            > */}
            <Button onClick={editDiemSo} variant="outline-success">
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
