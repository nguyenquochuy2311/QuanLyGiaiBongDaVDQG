import { NavLink, Link } from "react-router-dom";
import React, { Component } from "react";
import classnames from "classnames";
import "./nav.scss";
// import {logo} from"../../assets/img";

export default class Nav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      prevScrollpos: window.pageYOffset,
      visible: true,
    };
  }

  // Adds an event listener when the component is mount.
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  // Remove the event listener when the component is unmount.
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  // Hide or show the menu.
  handleScroll = () => {
    const { prevScrollpos } = this.state;

    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollpos > currentScrollPos;

    this.setState({
      prevScrollpos: currentScrollPos,
      visible,
    });
  };

  render() {
    return (
      <div className="row">
        <nav
          className={classnames(
            ("navbar navbar-expand-lg navbar-scrolled",
            {
              "navbar navbar-expand-lg ": this.state.visible,
            })
          )}
        >
          <div className="container-fluid nav__container">
            <div>
              <Link to="/" className="logo">
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
              </Link>
            </div>
            <div
              className="collapse navbar-collapse "
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <div className="col col-xl-7 col-lg-9 col-md-9">
                  <div className="row">
                    <div className="col">
                      <li className="nav-item">
                        <NavLink
                          to="/"
                          addClassName="active"
                          className="nav-link"
                          aria-current="page"
                          exact={true}
                        >
                          Trang chủ
                        </NavLink>
                      </li>
                    </div>
                    <div className="col">
                      <li className="nav-item sub-nav ">
                        <p className="nav-item-title nav-link">Giải đấu</p>

                        <ul className="sub-nav-list">
                          <li className="sub-nav-item">
                            <NavLink
                              className="sub-nav-item-link nav-link"
                              to="/giai-dau/bxh-doi-bong"
                            >
                              Bảng xếp hạng đội bóng
                            </NavLink>
                          </li>
                          <li className="sub-nav-item">
                            <NavLink
                              className="sub-nav-item-link nav-link"
                              to="/giai-dau/bxh-cau-thu"
                            >
                              Bảng xếp hạng cầu thủ
                            </NavLink>
                          </li>
                          <li className="sub-nav-item">
                            <NavLink
                              className="sub-nav-item-link nav-link"
                              to="/giai-dau/cac-tran-dau"
                            >
                              Các trận đấu
                            </NavLink>
                          </li>
                          <li className="sub-nav-item">
                            <NavLink
                              className="sub-nav-item-link nav-link"
                              to="/giai-dau/ket-qua-tran-dau"
                            >
                              Kết quả trận đấu
                            </NavLink>
                          </li>
                          <li className="sub-nav-item">
                            <NavLink
                              className="sub-nav-item-link nav-link"
                              to="/giai-dau/trong-tai"
                            >
                              Trọng tài
                            </NavLink>
                          </li>
                        </ul>
                      </li>
                    </div>
                    <div className="col">
                      <li className="nav-item">
                        <NavLink
                          to="/doi-bong"
                          addClassName="active"
                          className="nav-link "
                        >
                          Đội bóng
                        </NavLink>
                      </li>
                    </div>
                    <div className="col">
                      <li className="nav-item">
                        <NavLink
                          to="/quy-dinh"
                          addClassName="active"
                          className="nav-link "
                        >
                          Quy định
                        </NavLink>
                      </li>
                    </div>
                    <div className="col">
                      <li className="nav-item">
                        <NavLink
                          to="/lien-he"
                          addClassName="active"
                          className="nav-link "
                        >
                          Liên hệ
                        </NavLink>
                      </li>
                    </div>
                    <div className="col adminQuanLy" > 
                      <li className="nav-item">
                        <NavLink
                          to="/admin"
                          addClassName="active"
                          className="nav-link "
                        >
                          Admin
                        </NavLink>
                      </li>
                    </div>
                  </div>
                </div>
                <div className="col col-xl-5 col-lg-3 col-md-3 ">
                  <form className="d-flex">
                    <input
                      className="form-control me-2"
                      type="search"
                      placeholder="Tìm kiếm"
                      aria-label="Search"
                    />
                    <box-icon
                      name="search-alt-2"
                      animation="tada"
                      color="#383838"
                    ></box-icon>
                  </form>
                </div>
              </ul>
            </div>
            <div className="category">
              <i class=" category-icon bx bx-menu-alt-right bx-flashing"></i>
            </div>
            <div className="account">
              <ul className="account-list" >
                <li className="account-item">
                  <NavLink to="/dang-nhap" className="login">
                    Đăng nhập
                  </NavLink>
                </li>
                <li className="account-item">
                  <NavLink to="/dang-ky" className="register">
                    Đăng ký
                  </NavLink>
                </li>
              </ul>
                <Link  to='/' className="log__out " title="Đăng xuất">
              <i class='bx bx-log-out' ></i>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
