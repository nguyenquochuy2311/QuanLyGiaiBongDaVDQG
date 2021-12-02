import {Link} from 'react-router-dom';
import ReactNotification from 'react-notifications-component';

//ip component
import Helmet from '../../components/Helmet/Helmet';

import { google, facebook, twitter ,Bg1} from "../../assets/img";


import "./login.scss";
const Login = () => {
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
