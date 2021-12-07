import { NavLink, Link, Redirect } from "react-router-dom";
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
    // window.location.reload();
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
    const user = JSON.parse(localStorage.getItem("taikhoan"));
    function removeUser() {
      localStorage.clear();
      return <Redirect to="/dang-nhap" />;
    }
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
            {/* logo */}
            <div>
              <Link to="/" className="logo">
              
              </Link>
            </div>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon category">
                <i className=" category-icon bx bx-menu-alt-right bx-flashing"></i>
              </span>
            </button>
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
                    {user?.Role === 1 && <div
                      className="col adminQuanLy "
                     
                    >
                      <li className="nav-item">
                        <NavLink
                          to="/admin"
                          addClassName="active"
                          className="nav-link "
                        >
                          Admin
                        </NavLink>
                      </li>
                    </div>}
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

            {/* <div className="category">
            </div> */}
            <div className="account">
              {user !== null ? (
                <Link
                  to="/"
                  onClick={() => removeUser() 
                  && window.location.reload()}
                  className="log__out "
                  title="Đăng xuất"
                >
                  <i className="bx bx-log-out"></i>
                </Link>
              ) : (
                <ul className="account-list activeted">
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
              )}
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
