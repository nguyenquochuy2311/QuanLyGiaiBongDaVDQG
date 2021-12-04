import { useState } from "react";
import { useHistory} from "react-router-dom";

import { Link } from "react-router-dom";
import { store } from 'react-notifications-component';
import {Form, Button,Row,Col} from "react-bootstrap";

//ip component
import Helmet from "../../components/Helmet/Helmet";
import 'react-notifications-component/dist/theme.css';

import { google, facebook, twitter, Bg1 } from "../../assets/img";
import "./register.scss";

const Register = () => {

  const history = useHistory();
    
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");



  const [val, setValidator] = useState([]);


async function Register(){
  console.log(name,email,phone,password);
  const item={name,email,phone,password};

  let result =await fetch("http://127.0.0.1:8000/api/auth/signup",{
      method: "post",
      headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
      },
      body: JSON.stringify(item),
  });
  result = await result.json();
 
      
  if(result.message){
      
      store.addNotification({
          title: "Thông tin nhập bị trùng !",
          message: "Số điện thoại hoặc email bị trùng !",
          type: 'danger',
          insert: "top",
          container: "top-right",
          animationIn: ["animate__animated", "animate__fadeIn"],
          animationOut: ["animate__animated", "animate__fadeOut"],
          dismiss: {
              duration: 5000,
              onScreen: true
          }
      });
  }else{

      if(result.val_err){
          console.log(result.val_err);
          setValidator(result.val_err);
          store.addNotification({
              title: "Đăng ký thất bại !",
              message: "Hãy kiểm tra lại thông tin đăng ký của bạn !",
              type: 'danger',
              insert: "top",
              container: "top-right",
              animationIn: ["animate__animated", "animate__fadeIn"],
              animationOut: ["animate__animated", "animate__fadeOut"],
              dismiss: {
                  duration: 5000,
                  onScreen: true
              }
          });
      }else{
      
          console.log("user :", result);
          history.push("/dang-nhap");
          store.addNotification({
              title: "Đăng ký tài khoản thành công !",
              message: "Hãy tiến hành đăng nhập",
              type: 'success',
              insert: "top",
              container: "top-right",
              animationIn: ["animate__animated", "animate__fadeIn"],
              animationOut: ["animate__animated", "animate__fadeOut"],
              dismiss: {
                  duration: 5000,
                  onScreen: true
              }
          });
      }
  }
}




  return (
    <Helmet title="Đăng ký">
      <section className="component">
        <img className="background" src={Bg1} alt="not found" />
        <form className="register-form">
          <h3>đăng ký tài khoản</h3>
          <div className="box">
            <input type="name" placeholder="Họ và Tên"
            onChange={(e) => setName(e.target.value)}
            />
            <i className="bx bx-user"></i>
          </div>

          <div className="box">
            <input type="datetime"  placeholder="Ngày tháng năm sinh(Không bắt buộc)"
             onChange={(e) => setDate(e.target.value)}
             />
            <i className="bx bx-calendar"></i>
            <Form.Label className="err">{val.date}</Form.Label>

          </div>

          <div className="box">
            <input type="phonenumber"  placeholder="Số điện thoại(Không bắt buộc)" 
             onChange={(e) => setPhone(e.target.value)}
             />
            <i className="bx bx-phone"></i>
            <Form.Label className="err">{val.phoneNumber}</Form.Label>

          </div>

          <div className="box">
            <input type="email" placeholder="Email" 
             onChange={(e) => setEmail(e.target.value)}/>
            <i className="bx bx-mail-send"></i>
            <Form.Label className="err">{val.email}</Form.Label>
          </div>

          <div className="box">
            <input type="password" placeholder="Mật khẩu" min=''
             onChange={(e) => setPassword(e.target.value)}/>
            <i className="bx bx-lock-alt"></i>
            <Form.Label className="err">{val.password}</Form.Label>
          </div>

          <div className="box">
            <input type="password" placeholder="Xác nhận mật khẩu" 
            onChange={(e) => setPassword(e.target.value)} />
            <i className="bx bxs-lock"></i>

            <Form.Label className="err">{val.password}</Form.Label>
          </div>

          <input type="submit" variant="outline-success"  value="Đăng Ký" className="btn"   onClick={Register}  />
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
        </form>
      </section>
    </Helmet>
  );
};

export default Register;
