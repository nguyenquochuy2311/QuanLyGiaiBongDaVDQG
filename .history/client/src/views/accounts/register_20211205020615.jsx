import { useState } from "react";
import { useHistory } from "react-router-dom";

import { Link } from "react-router-dom";
import ReactNotification,{ store } from "react-notifications-component";
import { Form, Button, Row, Col } from "react-bootstrap";

//ip component
import Helmet from "../../components/Helmet/Helmet";
import "react-notifications-component/dist/theme.css";

import { google, facebook, twitter, Bg1 } from "../../assets/img";
import "./register.scss";

const Register = () => {
  const history = useHistory();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
 const logout = document.querySelector(' .account-item')
  const [val, setValidator] = useState([]);

  async function Register() {
    console.log(name, email, phone, password);
    const item = { name, email, phone, password };

    let result = await fetch("http://127.0.0.1:8000/api/auth/signup", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(item),
    });
    result = await result.json();
    console.log(">>>>>>>>>>>>>.." + result);

    if (result.message) {
      store.addNotification({
        title: "Mật khẩu không khớp !",
        message: "Mật khẩu không khớp !",
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
      }
    }
  }

  // validate email
  function validateEmail(email) {
    var re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  return (
    <Helmet title="Đăng ký">
      <ReactNotification/>
      <section className="component">
        <img className="background" src={Bg1} alt="not found" />
        <Form className="register-form form">
          <h3>đăng ký tài khoản</h3>
          <div className="box">
            <input
              type="name"
              placeholder="Họ và Tên"
              min="4"
              onChange={(e) => setName(e.target.value)}
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
              onChange={(e) => {
                return validateEmail(e.target.value) ? (
                  setEmail(e.target.value)
                ) : (
                  <Form.Label className="err">{val.email}</Form.Label>
                );
              }}
            />
            <i className="bx bx-mail-send"></i>
            <Form.Label className="err">{val.email}</Form.Label>
          </div>
          <div className="box">
            <input
              type="password"
              placeholder="Mật khẩu"
              min="6"
              onChange={(e) => setPassword(e.target.value)}
            />
            <i className="bx bx-lock-alt"></i>
            <Form.Label className="err">{val.password}</Form.Label>
          </div>
          <div className="box">
            <input
              type="password"
              placeholder="Xác nhận mật khẩu"
              onChange={(e) => setPassword(e.target.value)}
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
