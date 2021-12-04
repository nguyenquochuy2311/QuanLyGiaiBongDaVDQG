import { Link } from "react-router-dom";

//ip component
import Helmet from "../../components/Helmet/Helmet";

import { google, facebook, twitter, Bg1 } from "../../assets/img";
import "./register.scss";

const Register = () => {
  return (
    <Helmet title="Đăng ký">
      <section className="component">
        <img className="background" src={Bg1} alt="not found" />
        <form className="register-form">
          <h3>đăng ký tài khoản</h3>
          <div className="box">
            <input type="name" placeholder="Họ và Tên" />
            <i className="bx bx-user"></i>
          </div>

          <div className="box">
            <input type="datetime" title="Không bắt buộc" placeholder="Ngày tháng năm sinh" />
            <i className="bx bx-calendar"></i>
          </div>

          <div className="box">
            <input type="phonenumber" placeholder="Số điện thoại" />
            <i className="bx bx-phone"></i>
          </div>

          <div className="box">
            <input type="email" placeholder="Email" />
            <i className="bx bx-mail-send"></i>
          </div>

          <div className="box">
            <input type="password" placeholder="Mật khẩu" />
            <i className="bx bx-lock-alt"></i>
          </div>

          <div className="box">
            <input type="password" placeholder="Xác nhận mật khẩu" />
            <i className="bx bxs-lock"></i>
          </div>

          <input type="submit" value="Đăng Ký" className="btn" />
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
