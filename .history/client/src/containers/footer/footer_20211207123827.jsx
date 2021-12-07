import "./footer.scss";
import { logo } from "../../assets/img";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="footer">
      <div className="row">
        <div className="card-group">
          <div className="col col-lg-3 col-md-4 col-sm-2">
            <div className="card">
              <div className=" logo">
                <Link to="/">
                  {/* <img src={logo} alt="not found" /> */}
                  <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="34"
                  height="34"
                  viewBox="0 0 34 34"
                  style={{
                    fill: " rgba(0, 0, 0, 1)",
                    transform: "",
                    msFilter: "",
                  }}
                >
                  <path d="M19.071 4.929a9.936 9.936 0 0 0-7.07-2.938 9.943 9.943 0 0 0-7.072 2.938c-3.899 3.898-3.899 10.243 0 14.142a9.94 9.94 0 0 0 7.073 2.938 9.936 9.936 0 0 0 7.07-2.937c3.899-3.898 3.899-10.243-.001-14.143zM12.181 4h-.359c.061-.001.119-.009.18-.009s.118.008.179.009zm6.062 13H16l-1.258 2.516a7.956 7.956 0 0 1-2.741.493 7.96 7.96 0 0 1-2.746-.494L8 17.01H5.765a7.96 7.96 0 0 1-1.623-3.532L6 11 4.784 8.567a7.936 7.936 0 0 1 1.559-2.224 7.994 7.994 0 0 1 3.22-1.969L12 6l2.438-1.625a8.01 8.01 0 0 1 3.22 1.968 7.94 7.94 0 0 1 1.558 2.221L18 11l1.858 2.478A7.952 7.952 0 0 1 18.243 17z"></path>
                  <path d="m8.5 11 1.5 4h4l1.5-4L12 8.5z"></path>
                </svg>
                <h2 style={{color: '#fff'}}>VNSOCCER</h2>
                </Link>
              </div>
            </div>
          </div>
          <div className="col col-lg-3 col-md-4 col-sm-2">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Theo dõi mới nhất tại</h5>
                <ul className="footer__social-list">
                  <li className="footer__social-item">
                    <a 
                    rel="noreferrer"
                    href="https://www.facebook.com/" target="_blank">
                      <i class="bx bxl-facebook-square "></i>
                    </a>
                  </li>
                  <li className="footer__social-item">
                    <a rel="noreferrer"  href="https://twitter.com/" target="_blank">
                      <i class="bx bxl-twitter "></i>
                    </a>
                  </li>
                  <li className="footer__social-item">
                    <a rel="noreferrer" href="https://www.instagram.com/" target="_blank">
                      <i class="bx bxl-instagram"></i>
                    </a>
                  </li>
                  <li className="footer__social-item">
                    <a rel="noreferrer" href="https://www.linkedin.com/in/" target="_blank">
                      <i class="bx bxl-linkedin-square"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col col-lg-3 col-md-4 col-sm-2">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Liên hệ với chúng tôi</h5>
                <ul className="footer__address">
                  <li className="footer__address-item">
                    <i class="bx bx-location-plus"></i>
                    <p className="footer__address-item-text">
                      321 Võ Văn Ngân, thành phố Thủ Đức, thành phố Hồ Chí Minh
                    </p>
                  </li>
                  <li className="footer__address-item">
                    <i class="bx bx-phone"></i>
                    <p className="footer__address-item-text">+1900 6969</p>
                  </li>
                  <li className="footer__address-item">
                    <i class="bx bx-mail-send"></i>
                    <p className="footer__address-item-text">
                      vnsoccer-support@gmail.com
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col col-lg-3 col-md-4 col-sm-2">

          <div className="card">
            <div className="card-body">
              <h5 className="card-title">FAQ</h5>
              <div className="footer__policy">
                <Link to="#">Trung tâm CSKH</Link>
                <Link to="#">Điều khoản chính sách và dịch vụ</Link>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
      <div className="row footer__end">
        <p className="copyright">
          Copyright ©2021 All rights reserved | This template is made with love
          by <Link to="/">VNSOCCER</Link>
        </p>
        <Link className="website" to="/">
          www.vnsoccer.com
        </Link>
      </div>
    </section>
  );
};
export default Footer;
