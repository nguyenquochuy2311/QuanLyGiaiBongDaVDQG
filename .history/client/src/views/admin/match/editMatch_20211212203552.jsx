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

function EditMatch(props) {
  const [val, setValidator] = useState([]);

  const [data, setData] = useState([]);

    const [idCLB, setIdCLB] = useState("");
    const [idCLB2, setIdCLB2] = useState("");

    const [idToTT, setIdToTT] = useState("");
  const [VongDau, setVongDau] = useState("");
    
    

  //   console.log(data);

  let id = props.match.params.id;
  useEffect(() => {
    // getHlv();
    showID();
  }, []);

  const [clb, setCLB] = useState([]);
  useEffect(() => {
    getCLB();
  }, []);

  async function getCLB() {
    let result = await fetch("http://127.0.0.1:8000/api/clb");
    result = await result.json();
    setCLB(result);
  }

  //lay thong tin tran dau
  async function showID() {
    let result = await fetch("http://localhost:8000/api/trandau/" + id);
    result = await result.json();
    setData(result);
    // console.log(">>>>>>>>>>>>>>: " + result);
  }

  async function editMatch(id) {
      const idTD = document.getElementById("idTD");
    const idMG = document.getElementById("idMG");
      
    const VongDau = document.getElementById("VongDau");
    const Doi1 = document.getElementById("Doi1");
    const Doi2 = document.getElementById("Doi2");
    const SanDau = document.getElementById("SanDau");
    const ThoiGian = document.getElementById("ThoiGian");
    const idToTT = document.getElementById("ToTT");

    const formData = new FormData();
    formData.append("idMG", idMG.value);
    formData.append("VongDau", VongDau.value);
    // formData.append("idTD", idTD.value);
    formData.append("Doi1", Doi1.value);
    formData.append("Doi2", Doi2.value);
    formData.append("idToTT", idToTT.idToTT);
    formData.append("SanDau", SanDau.SanDau);
    formData.append("ThoiGian", ThoiGian.ThoiGian);

    let taikhoan = JSON.parse(localStorage.getItem("taikhoan"));
    let result = await fetch(
      "http://127.0.0.1:8000/api/auth/trandau/update/" + id,
      {
        method: "post",
        headers: {
          Authorization: "Bearer " + taikhoan.access_token,
          "X-Requested-With": "XMLHttpRequest",
          // "content-type": "application/json",
          // 'accept': 'application/json',
          // type: "formData",
        },
        body: formData,
      }
    );

    result = await result.json();

    console.log(
      "Tr??? v??? addClub>>>>>>>id->>>>>. :" + idMG.value+
VongDau.value+
Doi1.value+
 Doi2.value+
idToTT.idToTT+
SanDau.SanDau+
ThoiGian.ThoiGian++ " <<<<<<<<,"
    );
    console.log("Tr??? v??? addproduct :", JSON.stringify(result));

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
      setTimeout(() => history.push("/admin"), 1000);
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
    history.push("/admin/lich-dau");
  }

  return (
    <Helmet title="Ch???nh s???a l???ch ?????u">
      <AdminHeader />
      <Header title="Ch???nh s???a l???ch ?????u" />
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
                <b>M??a gi???i</b>
              </Form.Label>
              <Form.Control
                id="idMG"
                defaultValue={1}
                type="number"
                placeholder="Nh???p id m??a gi???i"
                disabled={true}
                //   onChange={(e) =>
                //       setName(e.target.value)}
              />
              <Form.Text className="text-muted"></Form.Text>
              <Form.Label className="err">--</Form.Label>
              <Form.Label className="err">{val.VongDau}</Form.Label>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>
                <b>V??ng ?????u</b>
                <br />
              </Form.Label>
              <br />
              <br />
              <Form.Select
                id="idTD"
                defaultValue={data.VongDau}
                type="number"
                placeholder="Nh???p v??ng ?????u"
                // disabled={true}
                onChange={(e) => setVongDau(e.target.value)}
                style={{ minWidth: "300px" }}
              >
                <option value="1">1</option>
                <option value="2">2</option>
              </Form.Select>

              <Form.Text className="text-muted"></Form.Text>
              <Form.Label className="err">--</Form.Label>
              <Form.Label className="err">{val.VongDau}</Form.Label>
            </Form.Group>
            <Form.Label>
              <b>?????i 1</b>
            </Form.Label>
            <br />
            <br />
            <Form.Select
              id="Doi1"
              style={{ padding: "10px 15px" }}
              aria-label="Ch???n ?????i 1"
              onChange={(e) => setIdCLB(e.target.value)}
            >
              <option>H??y ch???n CLB</option>
              {clb.map((item) => (
                <option value={item.idCLB}>{item.TenCLB}</option>
              ))}
            </Form.Select>
            <br />
            <br />
            <br />
            <Form.Label>
              <b>?????i 2</b>
            </Form.Label>
            <br />
            <br />
            <Form.Select
              id="Doi2"
              style={{ padding: "10px 15px" }}
              aria-label="Ch???n ?????i 2"
              onChange={(e) => setIdCLB2(e.target.value)}
            >
              <option>H??y ch???n CLB</option>
              {clb.map((item) => (
                <option value={item.idCLB}>{item.TenCLB}</option>
              ))}
            </Form.Select>
            <br />
            <br />
            <br />
            <Form.Group className="mb-3" controlId="form------">
              <Form.Label>
                <b>S??n ?????u</b>
              </Form.Label>
              <Form.Control
                id="SanDau"
                defaultValue={data.SanDau}
                maxLength="20"
                type="text"
                placeholder="Nh???p s??n ?????u"
                // onChange={(e) => setDoi1(e.target.value)}
              />
              <Form.Text className="text-muted">------</Form.Text>
              <Form.Label className="err">{val.SanDau}</Form.Label>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>
                <b>Th???i gian</b>
              </Form.Label>
              <Form.Control
                id="ThoiGian"
                defaultValue={data.ThoiGian}
                type="date"
                // disabled={true}
                // onChange={(e) => setName(e.target.value)}
              />
              <Form.Text className="text-muted"></Form.Text>
              <Form.Label className="err">--</Form.Label>
              <Form.Label className="err">{val.ThoiGian}</Form.Label>
            </Form.Group>
            <Form.Label>
              <b>ID t??? tr???ng t??i</b>
            </Form.Label>
            <br />
            <br />
            <Form.Select
              id="ToTT"
              style={{ padding: "10px 15px" }}
              aria-label="Ch???n id t??? tr???ng t??i"
              defaultValue={data.idToTT}
              onChange={(e) => setIdToTT(e.target.value)}
            >
              <option>H??y ch???n id t??? tr???ng t??i</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </Form.Select>
            <br />
            <br />
            <br />
            {/* <Link
            > */}
            <Button
              onClick={() => editMatch(data.idTD)}
              variant="outline-success"
            >
              <b>S???a ngay</b>
            </Button>{" "}
            {/* </Link> */}
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
export default withRouter(EditMatch);
