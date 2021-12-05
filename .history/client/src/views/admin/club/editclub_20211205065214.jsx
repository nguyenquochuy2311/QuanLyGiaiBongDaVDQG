import React from "react";
import Helmet from "../../../components/Helmet/Helmet";
import AdminHeader from "../header/adminHeader";
import Header from "../../../containers/header/header";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import { store } from "react-notifications-component";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";

function EditClub(props) {
  const [val, setValidator] = useState([]);

  //chứa thông tin theo ten của  clb
  const [data, setData] = useState([]);
  const [datahlv, SetDatahlv] = useState([]);

  const [image, setImage] = useState(data.image);
  const [stadium, setStadium] = useState(data.stadium);
  const [name, setName] = useState(data.name);
  const [clb, Setclb] = useState(data.clb);
  const [hlv, Sethlv] = useState(data.hlv);
  const [win, setWin] = useState(data.win);
  const [draw, setDraw] = useState(data.draw);
  const [loss, setLoss] = useState(data.loss);

  let TenCLB = props.match.params.TenCLB;

  console.log('>>>>>>>>>'+ TenCLB);
  useEffect(() => {
    getHlv();
    showID();
  }, []);

//  clb.map(e => to_slug(e.TenCLB)===TenCLB
//   && console.log('>>>>>>>>>>>..obj'+ e))
 
 
  //lay hlv
  async function getHlv() {
    let result = await fetch("http://localhost:8000/api/hlv");
    result = await result.json();
    Sethlv(result);
    console.log(result);
  }

  //lay ten clb
  async function showID() {
    let result = await fetch("http://localhost:8000/api/bxh_clb" + TenCLB);
    result = await result.json();
    Setclb(result);
    console.log(">>>>>>>>>>>>>>: " + result);
  }

// covert slug to string
function to_slug(str)
{
    // Chuyển hết sang chữ thường
    str = str.toLowerCase();     
 
    // xóa dấu
    str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
    str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
    str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
    str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
    str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
    str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
    str = str.replace(/(đ)/g, 'd');
 
    // Xóa ký tự đặc biệt
    str = str.replace(/([^0-9a-z-\s])/g, '');
 
    // Xóa khoảng trắng thay bằng ký tự -
    str = str.replace(/(\s+)/g, '-');
 
    // xóa phần dự - ở đầu
    str = str.replace(/^-+/g, '');
 
    // xóa phần dư - ở cuối
    str = str.replace(/-+$/g, '');
 
    // return
    return str;
}

  async function editClub() {
    const name = document.getElementById("name");
    const win = document.getElementById("win");
    const loss = document.getElementById("loss");
    const draw = document.getElementById("draw");
    const hlv = document.getElementById("hlv");
    const stadium = document.getElementById("stadium");

    const formData = new FormData();
    formData.append("TenCLB", name.value);
    formData.append("Thang", win.value);
    formData.append("Hoa", loss.value);
    formData.append("Thua", draw.value);
    formData.append("hlv", hlv.value);
    formData.append("stadium", stadium.value);


    let result = await fetch("http://127.0.0.1:8000/api/clb/" + TenCLB, {
        method: "post",
        body: formData,
      });
  
    result = await result.json();

    console.log("Trả về addproduct :", result);

    if (result.val_err) {
      //Nếu có lối thì truyền vào cho setValidator
      setValidator(result.val_err);
    } else {
      store.addNotification({
        title: "Chỉnh sửa  thành công !",
        message: "Hãy kiểm tra list của bạn !",
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
            <h2>
              <b>Thông tin câu lạc </b>
            </h2>
            <br />
            <br />
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>
                <b>Tên câu lạc bộ</b>
              </Form.Label>
              <Form.Control
                disabled={true}
                type="text"
                placeholder="Nhập tên CLB"
                id="name"
                defaultValue={data.name}
              />
              <Form.Label className="err">{val.name}</Form.Label>
            </Form.Group>

            {/* <Form.Group className="mb-3" controlId="form------">
                    <Form.Label><b>Logo</b></Form.Label>
                    <Form.Img src={''} onChange={(e) => setImage(e.target.files[0])}/>
                    <Form.Text className="text-muted">
                    <img variant="top" src={''} alt={data.image} style={{width:"150px"}} />
                    </Form.Text>
                    <Form.Label className='err'>{val.image}</Form.Label>
                </Form.Group> */}

            <Form.Group className="mb-3" controlId="form------">
              <Form.Label>
                <b>Sân vận động</b>
              </Form.Label>
              <Form.Control
                disabled={true}
                maxlength="11"
                type="text"
                placeholder="Hãy nhập tên sân vận động"
                id="stadium"
                defaultValue={data.stadium}
              />
              <Form.Text className="text-muted">------</Form.Text>
              <Form.Label className="err">{val.stadium}</Form.Label>
            </Form.Group>
            <Form.Group className="mb-3" controlId="form------">
              <Form.Label>
                <b>Huấn luyện viên trưởng</b>
              </Form.Label>
              <Form.Control
                maxlength="11"
                type="text"
                placeholder="Hãy nhập tên huấn luyện viên"
                id="hlv"
                defaultValue={data.hlv}
              />
              <Form.Text className="text-muted">------</Form.Text>
              <Form.Label className="err">{val.hlv}</Form.Label>
            </Form.Group>

            <Link to={hlv && win && draw && loss ? "/admin" : "#"}>
              <Button onClick={editClub} variant="outline-success">
                <b>Sửa ngay</b>
              </Button>{" "}
            </Link>
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
