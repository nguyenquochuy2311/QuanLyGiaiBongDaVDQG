// import React, { useState, useEffect } from "react";
// import Helmet from "../../../components/Helmet/Helmet";
// import AdminHeader from "../header/adminHeader";
// import Header from "../../../containers/header/header";
// import { Form, Button, Row, Col } from "react-bootstrap";
// import { useHistory } from "react-router-dom";

// import ReactNotification from "react-notifications-component";
// import "react-notifications-component/dist/theme.css";
// import { store } from "react-notifications-component";
// // import { Link } from "react-router-dom";
// // import PLayer from "./player";

// export default function AddUser() {
//   const [val, setValidator] = useState([]);
//   const [userName, setUserName] = useState("");
//   const [role, setRole] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   useEffect(() => {
//     getUser();
//   }, []);

//   async function getUser() {
//     let result = await fetch("http://127.0.0.1:8000/api/auth/all-user");
//     result = await result.json();
//     setCLB(result);
//   }

//   async function addUser() {
//     const formData = new FormData();
//     formData.append("username", userName);
//     formData.append("Role", role);
//     formData.append("password",  password);
//     formData.append("email", email);
   

//     let taikhoan = JSON.parse(localStorage.getItem("taikhoan"));

//     let result = await fetch("http://127.0.0.1:8000/api/auth/cauthu/store", {
//       method: "post",
//       headers: {
//         Authorization: "Bearer " + taikhoan.access_token,
//         "X-Requested-With": "XMLHttpRequest",
//         // "Content-Type": "multipart/form-data",
//         // Accept: "application/json",
//         type: "formData",
//       },
//       body: formData,
//     });

//     result = await result.json();

//     console.log("Trả về addUser>>>>>>> :", result);

//     if (result.status !== 200) {
//       //Nếu có lối thì truyền vào cho setValidator
//       store.addNotification({
//         title: "Thêm  thất bại !",
//         message:
//           "Hãy kiểm tra lại thông tin của bạn, đảm bảo thông tin hợp lệ và không bị trùng !",
//         type: "danger",
//         insert: "top",
//         container: "top-right",
//         animationIn: ["animate__animated", "animate__fadeIn"],
//         animationOut: ["animate__animated", "animate__fadeOut"],
//         dismiss: {
//           duration: 3000,
//           onScreen: true,
//         },
//       });
//       setValidator(result.status);
//     } else {
//       setTimeout(() => {
//         history.push("/admin/cau-thu");
//       }, 1000);
//       store.addNotification({
//         title: "Thêm  thành công !",
//         message: "Hãy kiểm tra danh sách của bạn !",
//         type: "success",
//         insert: "top",
//         container: "top-right",
//         animationIn: ["animate__animated", "animate__fadeIn"],
//         animationOut: ["animate__animated", "animate__fadeOut"],
//         dismiss: {
//           duration: 1000,
//           onScreen: true,
//         },
//       });
//     }
//   }

//   let history = useHistory();
//   function backData() {
//     history.push("/admin/cau-thu");
//   }

//   function formatDate(date) {
//     let d = new Date(date),
//       month = "" + (d.getMonth() + 1),
//       day = "" + d.getDate(),
//       year = d.getFullYear();

//     if (month.length < 2) month = "0" + month;
//     if (day.length < 2) day = "0" + day;

//     return [year, month, day].join("-");
//   }
//   return (
//     <Helmet title="Thêm câu lạc bộ">
//       <AdminHeader />
//       <Header title="Thêm câu lạc bộ" />
//       <ReactNotification />
//       <Row style={{ paddingTop: "50px", background: "#ccc" }}>
//         <div className="btn__back" style={{ transform: "translateX(100px)" }}>
//           <button onClick={backData}>
//             <i class="bx bx-arrow-back"></i>
//             <p>Trở lại</p>
//           </button>
//         </div>
//         <Col md={{ span: 4, offset: 4 }}>
//           <Form className="form">
//             <Form.Group className="mb-3">
//               <Form.Label>
//                 <b>Tên câu cầu thủ</b>
//               </Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Nhập tên cầu thủ"
//                 onChange={(e) => setuserName(e.target.value)}
//                 maxlength="30"
//               />
//               <Form.Text className="text-muted"></Form.Text>
//               <Form.Label className="err">--</Form.Label>
//               <Form.Label className="err">{val.userName}</Form.Label>
//             </Form.Group>
//             <Form.Group className="mb-3" controlId="form------">
//               <Form.Label>
//                 <b>Ảnh đại diện</b>
//               </Form.Label>
//               <Form.Control
//                 id="imgPreview"
//                 type="file"
//                 placeholder="Chọn ảnh đại diện"
//                 onInput={(event) => setImg(event.target.files[0])}
//               />

//               <Form.Text className="text-muted">-</Form.Text>
//               <Form.Label className="err">{val.Logo}</Form.Label>
//             </Form.Group>
//             <Form.Label>
//               <b>Câu lạc bộ</b>
//             </Form.Label>
//             <br />
//             <br />
//             <Form.Select
//               style={{ padding: "10px 15px" }}
//               aria-label="Chọn Câu lạc bộ"
//               onChange={(e) => setRole(e.target.value)}
//             >
//               <option>Hãy chọn CLB</option>
//               {clb.map((item) => (
//                 <option value={item.Role}>{item.TenCLB}</option>
//               ))}
//             </Form.Select>
//             <br />
//             <br />
//             <br />
//             <Form.Group className="mb-3" controlId="formBasicEmail">
//               <Form.Label>
//                 <b>Ngày sinh cầu thủ</b>
//               </Form.Label>
//               <Form.Control
//                 // value="2018-07-22"
//                 min="1995-01-01"
//                 max="2010-1-1"
//                 name="begin"
//                 type="date"
//                 maxlength="50"
//                 placeholder="yyyy-mm-dd"
//                 onChange={(e) => setDate(formatDate(e.target.value))}
//               />
//               <Form.Text className="text-muted"></Form.Text>
//               <Form.Label className="err">--</Form.Label>
//               <Form.Label className="err">{val.date}</Form.Label>
//             </Form.Group>
//             <Form.Group className="mb-3" controlId="form------">
//               <Form.Label>
//                 <b>Chiều cao</b>
//               </Form.Label>
//               <Form.Control
//                 maxlength="5"
//                 type="number"
//                 placeholder="Hãy nhập chiều cao cầu thủ"
//                 onChange={(e) => setemail(e.target.value)}
//               />
//               <Form.Text className="text-muted">------</Form.Text>
//               <Form.Label className="err">{val.email}</Form.Label>
//             </Form.Group>
//             <Form.Group className="mb-3" controlId="form------">
//               <Form.Label>
//                 <b>Số áo</b>
//               </Form.Label>
//               <Form.Control
//                 maxlength="20"
//                 type="number"
//                 placeholder="Số áo cầu thủ"
//                 onChange={(e) => setNumberClother(e.target.value)}
//               />
//               <Form.Text className="text-muted">------</Form.Text>
//               <Form.Label className="err">{val.password, setPassword]}</Form.Label>
//             </Form.Group>
//             <Form.Label>
//               <b>Vị trí cầu thủ</b>
//             </Form.Label>
//             <br />
//             <Form.Select
//               style={{ padding: " 10px 15px" }}
//               onChange={(e) => setViTri(e.target.value)}
//               aria-label="Chọn vị trí cầu thủ"
//             >
//               <option>Hãy chọn vị trí cầu thủ</option>
//               <option value="Tiền đạo">Tiền đạo</option>
//               <option value="Tiền vệ">Tiền vệ</option>
//               <option value="Trung vệ">Trung vệ</option>
//               <option value="Hậu vệ">Hậu vệ</option>
//               <option value="Thủ môn">Thủ môn</option>
//             </Form.Select>
//             <br />
//             <br />
//             <br />
//             <Form.Label>
//               <b>Loại cầu thủ</b>
//             </Form.Label>
//             <br />
//             <Form.Select
//               style={{ padding: " 10px 15px" }}
//               onChange={(e) => setPlayerType(e.target.value)}
//               aria-label="Chọn loại cầu thủ"
//             >
//               <option>Hãy chọn loại cầu thủ</option>
//               <option value="Trong nước">Trong nước</option>
//               <option value="Ngoài nước">Ngoài nước</option>
//             </Form.Select>
//             <br />
//             <br />
//             <br />
//             <Button onClick={
              
//               addUser} variant="outline-success">
//               <b>Thêm ngay</b>
//             </Button>{" "}
//             <br />
//             <br />
//             <br />
//             <br />
//             <br />
//             <br />
//           </Form>
//         </Col>
//       </Row>
//     </Helmet>
//   );
// }
