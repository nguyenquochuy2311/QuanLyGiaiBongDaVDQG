import { useState ,useEffect} from "react";
import { useHistory } from "react-router-dom";

import { Link } from "react-router-dom";
import ReactNotification, { store } from "react-notifications-component";
import { Form, Button, Row, Col } from "react-bootstrap";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";


//ip component
import Helmet from "../../components/Helmet/Helmet";
import "react-notifications-component/dist/theme.css";

import { google, facebook, twitter, Bg1 } from "../../assets/img";
import "./register.scss";

const Register = () => {
  const history = useHistory();

  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [, setDate] = useState("");
  const [, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [, setEmailError] = useState("");

  const [val, setValidator] = useState([]);





  
   const uiConfig = {
     signInFlow: "popup",
     signInOptions: [
       firebase.auth.GoogleAuthProvider.PROVIDER_ID,
       // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
       // firebase.auth.TwitterAuthProvider.PROVIDER_ID,
       // firebase.auth.GithubAuthProvider.PROVIDER_ID,
       // firebase.auth.EmailAuthProvider.PROVIDER_ID,
     ],
     callbacks: {
       signInSuccess: () => false,
     },
  };
  
  async function Register() {
    // console.log(username, email, password);
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
      if (result.detail) {
        console.log(result.detail);
        setValidator(result.detail);
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
          title: "Thông tin nhập không hợp lệ hoặc chưa chính xác!",
          message: "Hãy kiểm tra lại email hoặc mật khẩu!",
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

  function validateEmail(e) {
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (e.match(regexEmail)) {
      return true;
    } else {
      return false;
    }
  }


  return (
    <Helmet title="Đăng ký">
      <ReactNotification />
      <section className="component">
        <img className="background" src={Bg1} alt="not found" />
        <Form className="register-form form">
          <h3>đăng ký tài khoản</h3>
          <div className="box">
            <input
              pattern=".{4,20}"
              required
              type="name"
              placeholder="Họ và Tên (ít nhất 4 ký tự)"
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
              pattern=".{9}"
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
              onChange={(e) =>
                validateEmail(e.target.value) === true ? (
                  setEmail(e.target.value)
                ) : (
                  <Form.Label className="err">{val.email}</Form.Label>
                )
              }
            />
            <i className="bx bx-mail-send"></i>
            {/* <Form.Label className="err">{val.email}</Form.Label> */}
          </div>
          <div className="box">
            <input
              pattern=".{6,30}"
              required
              type="password"
              placeholder="Mật khẩu (ít nhất 6 ký tự)"
              minLength="6"
              onChange={(e) => setPassword(e.target.value)}
            />
            <i className="bx bx-lock-alt"></i>
          </div>
          <div className="box">
            <input
              required
              pattern=".{6,30}"
              type="password"
              placeholder="Xác nhận mật khẩu"
              onChange={(e) => setPassword(e.target.value)}
            />
            <i className="bx bxs-lock"></i>
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
            <StyledFirebaseAuth
              uiConfig={uiConfig}
              firebaseAuth={firebase.auth()}
            ></StyledFirebaseAuth>
            {/* <div className="social-icon">
              <img alt="not found " src={google} />
            </div>

            <div className="social-icon">
              <img alt="not found " src={facebook} />
            </div>

            <div className="social-icon">
              <img alt="not found " src={twitter} />
            </div> */}
          </div>
        </Form>
      </section>
    </Helmet>
  );
};

export default Register;
