import React from "react";
import Helmet from "../../../components/Helmet/Helmet";
import AdminHeader from "../header/adminHeader";
import Header from "../../../containers/header/header";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import { store } from "react-notifications-component";
import { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";

function EditResultMatch(props) {
  const [val, setValidator] = useState([]);

  const [data, setData] = useState([]);

  

  // chứa thông tin theo id clb

  let id = props.match.params.id;
  // console.log(">>>>>>>>>id<<<<<" + typeof(id));
  useEffect(() => {
    // getHlv();
    showID();
  }, []);

  //lay ten clb
  async function showID() {
    let result = await fetch("http://localhost:8000/api/ketqua/" + id);
    result = await result.json();
    setData(result);
    console.log(">>>>>>>>>>>>>>: " + result);
  }

  async function editResultMatch(id) {
    const idTD = document.getElementById("idTD");
    const BTDoi1 = document.getElementById("BTDoi1");
    const BTDoi2 = document.getElementById("BTDoi2");

    const formData = new FormData();
    formData.append("idTD", idTD.value);
    formData.append("BTDoi1", BTDoi1.value);
    formData.append("BTDoi2", BTDoi2.value);
    formData.append("idMG", data.idMG);


    let taikhoan = JSON.parse(localStorage.getItem("taikhoan"));
    let result = await fetch("http://127.0.0.1:8000/api/auth/ketqua/update/" + id, {
      method: "put",
      headers: {
        Authorization: "Bearer " + taikhoan.access_token,
        "X-Requested-With": "XMLHttpRequest",
      },
      body: formData,
    });

    result = await result.json();

    // console.log(
    //   "Trả về addClub>>>>>>>id->>>>>. :" + typeof(id) + 
     
    //     " <<<<<<<<," +
    //    ''
    // );

    console.log("Trả về addproduct :", JSON.stringify(result));

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
    history.push("/admin/ket-qua-tran-dau");
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
                <b>Id trận đấu</b>
              </Form.Label>
              <Form.Control
                id="idTD"
                defaultValue={data.idTD}
                type="number"
                placeholder="Nhập tên câu lạc bộ"
                // onChange={(e) => setName(e.target.value)}
              />
              <Form.Text className="text-muted"></Form.Text>
              <Form.Label className="err">--</Form.Label>
              <Form.Label className="err">{val.idTD}</Form.Label>
            </Form.Group>
            <Form.Group className="mb-3" controlId="form------">
              <Form.Label>
                <b>Tên viết tắt</b>
              </Form.Label>
              <Form.Control
                id="BTDoi1"
                defaultValue={data.BTDoi1}
                maxLength="20"
                type="text"
                placeholder="Nhập tên viết tắt"
                // onChange={(e) => setBTDoi1(e.target.value)}
              />
              <Form.Text className="text-muted">------</Form.Text>
              <Form.Label className="err">{val.BTDoi1}</Form.Label>
            </Form.Group>
            <Form.Group className="mb-3" controlId="form------">
              <Form.Label>
                <b>Sân vận động</b>
              </Form.Label>
              <Form.Control
                id="BTDoi2"
                defaultValue={data.BTDoi2}
                maxLength="11"
                type="text"
                placeholder="Hãy nhập sân vận động"
                // onChange={(e) => setBTDoi2(e.target.value)}
              />
              <Form.Text className="text-muted">------</Form.Text>
              <Form.Label className="err">{val.BTDoi2}</Form.Label>
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
                id="TruSo"
                defaultValue={data.TruSo}
                type="text"
                placeholder="Trụ sở câu lạc bộ"
                // onChange={(e) => setTruSo(e.target.value)}
              />
              <Form.Text className="text-muted">-</Form.Text>
              <Form.Label className="err">{val.TruSo}</Form.Label>
            </Form.Group>
            {/* <Link
            > */}
            <Button onClick={()=>editResultMatch(data.idKQ)} variant="outline-success">
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
export default withRouter( EditResultMatch);
