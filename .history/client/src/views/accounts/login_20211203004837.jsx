import {Link} from 'react-router-dom';
import ReactNotification,{ store } from 'react-notifications-component';

//ip component
import Helmet from '../../components/Helmet/Helmet';

import { google, facebook, twitter ,Bg1} from "../../assets/img";


import "./login.scss";
const Login = () => {

  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [val, setValidator] = useState([]);
  const [error, setError] = useState("");

async function Login(){
  let item={email,password};
  //Gọi api 
  let result =await fetch("http://127.0.0.1:8000/api/dangnhap",{
      method: "post",
      headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
      },
      body: JSON.stringify(item),
  });

  try {
  result = await result.json();
  
  console.log("Trả về :",result);
  //dùng localStrage để lưu tài khoản
  localStorage.setItem("taikhoan", JSON.stringify(result));
  //chuyển sang String
  let taikhoan = JSON.parse(localStorage.getItem("taikhoan"));
  //Nếu trong local có name thì
  console.log("name: ", taikhoan.name);
  console.log("pass: ", taikhoan.password);
  if (taikhoan.name) {
      
      history.push("/mained");
      store.addNotification({
          title: "Đăng nhập thành công !",
          message: "Chúc bạn có trải nghiệm tuyệt vời với chúng tôi",
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
    } else {
    
    
      if(result.error){
          store.addNotification({
              title: "Thông tin tài khoản hoặc mật khẩu sai !",
              message: "Hãy kiểm tra lại emal đăng ký và mật khẩu của bạn !",
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
          setError(result.error);
      }


      if(result.val_err){
          setValidator(result.val_err);
          
          //Nếu có lối thì truyền vào cho setValidator
          
          store.addNotification({
              title: "Đăng nhập thất bại !",
              message: "Hãy kiểm tra lại emal đăng ký và mật khẩu của bạn !",
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
         
          
      }


    }
  } catch {
      
      store.addNotification({
          title: "Đăng nhập thất bại !",
          message: "Hãy kiểm tra lại emal đăng ký và mật khẩu của bạn !",
          type: 'danger',
          insert: "top",
          container: "top-right",
          animationIn: ["animate__animated", "animate__fadeIn"],
          animationOut: ["animate__animated", "animate__fadeOut"],
          
        });
  }

}
console.log("error :", error);

  return (
    <Helmet title="Đăng nhập">
    <div  className="component">
      <img className= ' background' src={Bg1} alt="not found" />
      <div className="login-container">
        <header className="login-header">Đăng nhập</header>
        <div className="login-body">
          <label for="username" className="login-label">
            <i className="ti-user"></i>
            Tài khoản
          </label>
          <input
            id="username"
            type="text"
            className="info-input"
            placeholder="Username"
          />

          <label for="password" className="login-label">
            <i className="ti-key"></i>
            Mật khẩu
          </label>
          <input
            id="password"
            type="password"
            className="info-input"
            placeholder="Password"
          />
          {/* <p className="login-forgot">
            <a href="">Quên mật khẩu</a>
          </p> */}

<input type="submit" value="Đăng Nhập" className="btn" />

          <p className="register">
            Chưa có tài khoản? <Link to="/dang-ky">Đăng kí ngay</Link>
          </p>
        </div>

        <footer className="login-footer">

          <a href="https://accounts.google.com/signin">
            <img className="login-icon" src={google}  alt='not found' />
          </a>

          <a href="https://www.facebook.com/">
            <img className="login-icon" src={facebook}  alt='not found' />
          </a>
          <a href="https://twitter.com/i/flow/login">
            <img className="login-icon" src={twitter}  alt='not found' />
          </a>
        </footer>
      </div>
    </div>
    </Helmet>
  );
};

export default Login;
