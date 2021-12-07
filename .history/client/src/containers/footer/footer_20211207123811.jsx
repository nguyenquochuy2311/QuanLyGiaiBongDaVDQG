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
