import { useState } from "react";
import { useHistory } from "react-router-dom";

import { Link } from "react-router-dom";
import ReactNotification, { store } from "react-notifications-component";
import { Form, Button, Row, Col } from "react-bootstrap";
import validator from "validator";
//ip component
import Helmet from "../../components/Helmet/Helmet";
import "react-notifications-component/dist/theme.css";

import { google, facebook, twitter, Bg1 } from "../../assets/img";
import "./register.scss";

const Register = () => {
  const history = useHistory();

  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");

  const [val, setValidator] = useState([]);

  async function Register() {
    console.log(username, email, password);
    const item = { username, email, password };

    let result = await fetch("http://127.0.0.1:8000/api/auth/signup", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(item),
    });

    result = await result.json();
    console.log(">>>>>>>>>>>>>.." + JSON.stringify(result));

    if (result.status === "success") {
      console.log("user :", result);
      history.push("/dang-nhap");
      store.addNotification({
        title: "Đăng ký tài khoản thành công !",
        message: "Hãy tiến hành đăng nhập",
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
    } else {
      if (result.val_err) {
        console.log(result.val_err);
        setValidator(result.val_err);
        store.addNotification({
          title: "Đăng ký thất bại !",
          message: "Hãy kiểm tra lại thông tin đăng ký của bạn !",
          type: "danger",
          insert: "top",
          container: "top-right",
          animationIn: ["animate__animated", "animate__fadeIn"],
          animationOut: ["animate__animated", "animate__fadeOut"],
          dismiss: {
            duration: 5000,
            onScreen: true,
          },
        });
      } else {
        store.addNotification({
          title: "Thông tin nhập bị trùng !",
          message: "Số điện thoại hoặc email đã được sử dụng!",
          type: "danger",
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
  }

  // validate imput
  const validate = (e) => {
    let email = e.target.value;
    let username = e.target.calue.lenght;
    let password = e.target.lenght;
    console.log('>>>>>>>>>>>>'+ email + ' '+ username + ' '+ password);
    if (validator.isEmail(email)&& username > 4 && password>6) {
      setEmailError("Valid value :)");
      setEmail(e.target.value);
      setName(e.target.value);
      setPassword(e.target.value);


    } else {
      setEmailError("Enter valid value!");
    }
  };

  return (
    <Helmet title="Đăng ký">
      <ReactNotification />
      <section className="component">
        <img className="background" src={Bg1} alt="not found" />
        <Form className="register-form form">
          <h3>đăng ký tài khoản</h3>
          <div className="box">
            <input
              type="name"
              placeholder="Họ và Tên (ít nhất 4 ký tự)"
              minLength="4"
              onChange={(e) =>validate(e)}
            />
            <i className="bx bx-user"></i>
          </div>
          <div className="box">
            <input
              type="datetime"
              placeholder="Ngày tháng năm sinh(Không bắt buộc)"
              onChange={(e) => setDate(e.target.value)}
            />
            <i className="bx bx-calendar"></i>
            <Form.Label className="err">{val.date}</Form.Label>
          </div>
          <div className="box">
            <input
              type="phonenumber"
              placeholder="Số điện thoại(Không bắt buộc)"
              onChange={(e) => setPhone(e.target.value)}
            />
            <i className="bx bx-phone"></i>
            <Form.Label className="err">{val.phoneNumber}</Form.Label>
          </div>
          <div className="box">
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => validate(e)}
            />
            <Form.Label className="err">{val.email}</Form.Label>
            <i className="bx bx-mail-send"></i>
            <Form.Label className="err">{val.email}</Form.Label>
          </div>
          <div className="box">
            <input
              type="password"
              placeholder="Mật khẩu (ít nhất 6 ký tự)"
              minLength="6"
              onChange={(e) => validate(e)}
            />
            <i className="bx bx-lock-alt"></i>
            <Form.Label className="err">{val.password}</Form.Label>
          </div>
          <div className="box">
            <input
              type="password"
              placeholder="Xác nhận mật khẩu"
              onChange={(e) => validate(e)}
            />
            <i className="bx bxs-lock"></i>

            <Form.Label className="err">{val.password}</Form.Label>
          </div>
          <Button
            onClick={Register}
            variant="outline-success"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <b>Đăng Ký</b>
          </Button>{" "}
          <p className="link__login">
            Bạn đã có tài khoản?
            <Link to="/dang-nhap">Đăng nhập</Link>
          </p>
          <div className="social">
            <div className="social-icon">
              <img src={google} />
            </div>

            <div className="social-icon">
              <img src={facebook} />
            </div>

            <div className="social-icon">
              <img src={twitter} />
            </div>
          </div>
        </Form>
      </section>
    </Helmet>
  );
};

export default Register;
