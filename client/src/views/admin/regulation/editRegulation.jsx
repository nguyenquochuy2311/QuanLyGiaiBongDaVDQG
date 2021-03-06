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

  const DiemThang = document.getElementById("DiemThang");
  const DiemHoa = document.getElementById("DiemHoa");
  const DiemThua = document.getElementById("DiemThua");
  const idMG = document.getElementById("idMG");

  let { id } = useParams();

  console.log(">>>>>>>>>id" + id);
  useEffect(() => {
    showID();
  }, []);

  //lay ten clb
  async function showID() {
    let result = await fetch("http://localhost:8000/api/qd-diemso/" + id);
    result = await result.json();
    setData(result);
    // console.log(">>>>>>>>>>>>>>: " + JSON.stringify(result));
  }

  async function editDiemSo(id) {
    // const stadium = document.getElementById("stadium");

    const formData = new FormData();
    formData.append("DiemThang", DiemThang.value);
    formData.append("DiemHoa", DiemHoa.value);
    formData.append("DiemThua", DiemThua.value);
    formData.append("idMG", idMG.value);

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
        title: "Ch???nh s???a  th???t b???i!",
        message: "H??y ki???m tra th??ng tin c???a b???n !",
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
      //N???u c?? l???i th?? truy???n v??o cho setValidator
      setValidator(result.message);
    } else {
      setTimeout(() => history.push("/admin/quy-dinh"), 1000);
      store.addNotification({
        title: "Ch???nh s???a  th??nh c??ng !",
        message: "H??y ki???m tra list c???a b???n !",
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
    <Helmet title="Ch???nh s???a quy ??inh ??i???m s???">
      <AdminHeader />
      <Header title="Ch???nh s???a quy ??inh ??i???m s???" />
      <ReactNotification />
      <Row style={{ paddingTop: "50px", background: "#ccc" }}>
        <div className="btn__back" style={{ transform: "translateX(100px)" }}>
          <button onClick={backData}>
            <i class="bx bx-arrow-back"></i>
            <p>Tr??? l???i</p>
          </button>
        </div>
        <Col md={{ span: 4, offset: 4 }}>
          <Form className="form">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>
                <b>ID m??a gi???i</b>
              </Form.Label>
              <Form.Control
                id="idMG"
                defaultValue={data.idMG}
                disabled={true}
                type="number"
                placeholder="Nh???p id m??a gi???i"
                // onChange={(e) => setName(e.target.value)}
              />
              <Form.Text className="text-muted"></Form.Text>
              <Form.Label className="err">--</Form.Label>
              <Form.Label className="err">{val.idMG}</Form.Label>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>
                <b>??i???m th???ng</b>
              </Form.Label>
              <Form.Control
                id="DiemThang"
                defaultValue={data.DiemThang}
                type="number"
                placeholder="Nh???p ??i???m th???ng"
                // onChange={(e) => setName(e.target.value)}
              />
              <Form.Text className="text-muted"></Form.Text>
              <Form.Label className="err">--</Form.Label>
              <Form.Label className="err">{val.DiemThang}</Form.Label>
            </Form.Group>
            <Form.Group className="mb-3" controlId="form------">
              <Form.Label>
                <b>??i???m h??a</b>
              </Form.Label>
              <Form.Control
                id="DiemHoa"
                defaultValue={data.DiemHoa}
                maxLength="20"
                type="number"
                placeholder="??i???m h??a"
                // onChange={(e) => setDiemHoa(e.target.value)}
              />
              <Form.Text className="text-muted">------</Form.Text>
              <Form.Label className="err">{val.DiemHoa}</Form.Label>
            </Form.Group>
            <Form.Group className="mb-3" controlId="form------">
              <Form.Label>
                <b>??i???m thua</b>
              </Form.Label>
              <Form.Control
                id="DiemThua"
                defaultValue={data.DiemThua}
                maxLength="11"
                type="number"
                placeholder="??i???m thua"
                // onChange={(e) => setDiemThua(e.target.value)}
              />
              <Form.Text className="text-muted">------</Form.Text>
              <Form.Label className="err">{val.DiemThua}</Form.Label>
            </Form.Group>
            {/* <Link
            > */}
            <Button
              onClick={() =>
                DiemThang.value > DiemHoa.value &&
                DiemHoa.value > DiemThua.value
                  ? editDiemSo(data.idQUYDINHDIEMSO)
                  : alert("Th??ng tin ??i???m kh??ng h???p l???")
              }
              variant="outline-success"
            >
              <b>S???a ngay</b>
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
