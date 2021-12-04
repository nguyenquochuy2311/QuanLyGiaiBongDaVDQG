import { Link, useHistory } from "react-router-dom";
import ReactNotification, { store } from "react-notifications-component";
import {  useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

//ip component
import Helmet from "../../components/Helmet/Helmet";

import { google, facebook, twitter, Bg1 } from "../../assets/img";

import "./login.scss";
const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [val, setValidator] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/auth/login", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(item),
    });

  })
  async function Login() {
    let item = { email, password };
    //Gọi api
    let result = await 
    
  }
  console.log("error :", error);

  return (
    <Helmet title="Đăng nhập">
             <ReactNotification />

      <div className="component">
        <img className=" background" src={Bg1} alt="not found" />
        <Form className="login-container form">
          <header className="login-header">Đăng nhập</header>
          <div className="login-body">
            <label for="username" className="login-label">
              <i className="ti-user"></i>
              Tài khoản
            </label>
            <input
              id="username"
              type="email"
              className="info-input"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Label className="err">{val.email}</Form.Label>
            <label for="password" className="login-label">
              <i className="ti-key"></i>
              Mật khẩu
            </label>
            <input
              id="password"
              type="password"
              className="info-input"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              maxlength="20"
            />
            <Form.Label className="err">{val.password}</Form.Label>
            {/* <p className="login-forgot">
            <a href="">Quên mật khẩu</a>
          </p> */}
            {/* <input
              type="submit"
              value="Đăng Nhập"
              className="btn"
              onClick={Login}
              variant="outline-success"
            /> */}
            <Button onClick={Login} variant="outline-success">
              <b>Đăng nhập</b>
            </Button>{" "}
            <p className="register">
              Chưa có tài khoản? <Link to="/dang-ky">Đăng kí ngay</Link>
            </p>
          </div>

          <footer className="login-footer">
            <a href="https://accounts.google.com/signin">
              <img className="login-icon" src={google} alt="not found" />
            </a>

            <a href="https://www.facebook.com/">
              <img className="login-icon" src={facebook} alt="not found" />
            </a>
            <a href="https://twitter.com/i/flow/login">
              <img className="login-icon" src={twitter} alt="not found" />
            </a>
          </footer>
        </Form>
      </div>
    </Helmet>
  );
};

export default Login;
