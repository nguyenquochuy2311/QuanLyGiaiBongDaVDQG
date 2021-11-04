import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { NavLink, Link } from "react-router-dom";
import "./home.scss";
import "../../styles/global.scss";
import "../../styles/_variables.scss";

import { Thuviendohoa } from "../../assets/img";

//import components
import Ban from "../../components/banner/banner";
// import CardPlayer from "../../components/cards/cardPlayer/card";
import Card3D from "../../components/cards/card3D/card";


const Home = () => {
  return (
    <div className="home">
      <Ban />
      <div className="home-matchSchedule">
        <div className="home-matchSchedule-bg">
          <img src={Thuviendohoa} alt="" />
        </div>
        <h2 className="home-matchSchedule-title">Trận đấu trong tuần</h2>
        <ul className="list-group list-group-flush home-matchSchedule-list">
          <li className="list-group-item team-item ">
            <p className="team-item-name">Hoàng anh gia lai FC</p>
            <p>VS</p>
            <p className="team-item-name">Sông lam nghệ an</p>
            <p className="time-item-match">
              <p className="time-item-match-hour">17:00</p>
              <p className="time-item-match-day">21.10</p>
            </p>
            <p className="place-match">TPHCM</p>
            <p>
              <Link to="/mua-ve" className="buy-ticket">
                Mua vé
              </Link>
            </p>
            <Link to="/thong-tin-tran-dau" title="Thông tin chi tiết trận đấu">
              <i className="bx bx-chevrons-right"></i>
            </Link>
          </li>
          <li className="list-group-item team-item ">
            <p className="team-item-name">Hoàng anh gia lai FC</p>
            <p>VS</p>
            <p className="team-item-name">Sông lam nghệ an</p>
            <p className="time-item-match">
              <p className="time-item-match-hour">17:00</p>
              <p className="time-item-match-day">21.10</p>
            </p>
            <p className="place-match">TPHCM</p>
            <p>
              <Link to="/mua-ve" className="buy-ticket">
                Mua vé
              </Link>
            </p>
            <Link to="/thong-tin-tran-dau" title="Thông tin chi tiết trận đấu">
              <i className="bx bx-chevrons-right"></i>
            </Link>
          </li>
          <li className="list-group-item team-item ">
            <p className="team-item-name">Hoàng anh gia lai FC</p>
            <p>VS</p>
            <p className="team-item-name">Sông lam nghệ an</p>
            <p className="time-item-match">
              <p className="time-item-match-hour">17:00</p>
              <p className="time-item-match-day">21.10</p>
            </p>
            <p className="place-match">TPHCM</p>
            <p>
              <Link to="/mua-ve" className="buy-ticket">
                Mua vé
              </Link>
            </p>
            <Link to="/thong-tin-tran-dau" title="Thông tin chi tiết trận đấu">
              <i className="bx bx-chevrons-right"></i>
            </Link>
          </li>
          <li className="list-group-item team-item ">
            <p className="team-item-name">Hoàng anh gia lai FC</p>
            <p>VS</p>
            <p className="team-item-name">Sông lam nghệ an</p>
            <p className="time-item-match">
              <p className="time-item-match-hour">17:00</p>
              <p className="time-item-match-day">21.10</p>
            </p>
            <p className="place-match">TPHCM</p>
            <p>
              <Link to="/mua-ve" className="buy-ticket">
                Mua vé
              </Link>
            </p>
            <Link to="/thong-tin-tran-dau" title="Thông tin chi tiết trận đấu">
              <i className="bx bx-chevrons-right"></i>
            </Link>
          </li>
          <li className="list-group-item team-item ">
            <p className="team-item-name">Hoàng anh gia lai FC</p>
            <p>VS</p>
            <p className="team-item-name">Sông lam nghệ an</p>
            <p className="time-item-match">
              <p className="time-item-match-hour">17:00</p>
              <p className="time-item-match-day">21.10</p>
            </p>
            <p className="place-match">TPHCM</p>
            <p>
              <Link to="/mua-ve" className="buy-ticket">
                Mua vé
              </Link>
            </p>
            <Link to="/thong-tin-tran-dau" title="Thông tin chi tiết trận đấu">
              <i className="bx bx-chevrons-right"></i>
            </Link>
          </li>
          <li className="list-group-item team-item ">
            <p className="team-item-name">Hoàng anh gia lai FC</p>
            <p>VS</p>
            <p className="team-item-name">Sông lam nghệ an</p>
            <p className="time-item-match">
              <p className="time-item-match-hour">17:00</p>
              <p className="time-item-match-day">21.10</p>
            </p>
            <p className="place-match">TPHCM</p>
            <p>
              <Link to="/mua-ve" className="buy-ticket">
                Mua vé
              </Link>
            </p>
            <Link to="/thong-tin-tran-dau" title="Thông tin chi tiết trận đấu">
              <i className="bx bx-chevrons-right"></i>
            </Link>
          </li>
          <li className="list-group-item team-item ">
            <p className="team-item-name">Hoàng anh gia lai FC</p>
            <p>VS</p>
            <p className="team-item-name">Sông lam nghệ an</p>
            <p className="time-item-match">
              <p className="time-item-match-hour">17:00</p>
              <p className="time-item-match-day">21.10</p>
            </p>
            <p className="place-match">TPHCM</p>
            <p>
              <Link to="/mua-ve" className="buy-ticket">
                Mua vé
              </Link>
            </p>
            <Link to="/thong-tin-tran-dau" title="Thông tin chi tiết trận đấu">
              <i className="bx bx-chevrons-right"></i>
            </Link>
          </li>
          <li className="list-group-item team-item ">
            <p className="team-item-name">Hoàng anh gia lai FC</p>
            <p>VS</p>
            <p className="team-item-name">Sông lam nghệ an</p>
            <p className="time-item-match">
              <p className="time-item-match-hour">17:00</p>
              <p className="time-item-match-day">21.10</p>
            </p>
            <p className="place-match">TPHCM</p>
            <p>
              <Link to="/mua-ve" className="buy-ticket">
                Mua vé
              </Link>
            </p>
            <Link to="/thong-tin-tran-dau" title="Thông tin chi tiết trận đấu">
              <i className="bx bx-chevrons-right"></i>
            </Link>
          </li>
          <li className="list-group-item team-item ">
            <p className="team-item-name">Hoàng anh gia lai FC</p>
            <p>VS</p>
            <p className="team-item-name">Sông lam nghệ an</p>
            <p className="time-item-match">
              <p className="time-item-match-hour">17:00</p>
              <p className="time-item-match-day">21.10</p>
            </p>
            <p className="place-match">TPHCM</p>
            <p>
              <Link to="/mua-ve" className="buy-ticket">
                Mua vé
              </Link>
            </p>
            <Link to="/thong-tin-tran-dau" title="Thông tin chi tiết trận đấu">
              <i className="bx bx-chevrons-right"></i>
            </Link>
          </li>
        </ul>
        <button className="btn--view-more">
          Xem thêm
          <i className="bx bx-chevrons-right bx-fade-right"></i>
        </button>
      </div>

      <div className="home__player">
        <h3 className="home__player-title">Những cầu thủ nổi bật</h3>
        <ul className="home__player-list">
          <div className="row">

          <Card3D />
          </div>

          {/* ==================Style 2==================== */}
          {/* <div
            id="home__player-cards"
            className="carousel slide"
            data-ride="carousel"
          >
            <ol className="carousel-indicators carousel-index">
              <li
                data-target="#home__player-cards"
                data-slide-to="0"
                className="active"
              ></li>
              <li data-target="#home__player-cards" data-slide-to="1"></li>
              <li data-target="#home__player-cards" data-slide-to="2"></li>
            </ol>

            <div className="carousel-inner">
              <div className="row">
                <div className="carousel-item active">
                  <div className="row">
                    <div className="col col-lg-3 col-md-4 col-c-12"></div>

                    <div className="col col-lg-3 col-md-4 col-c-12">
                      <CardPlayer></CardPlayer>
                    </div>
                    <div className="col col-lg-3 col-md-4 col-c-12">
                      <CardPlayer />
                    </div>
                    <div className="col col-lg-3 col-md-4 col-c-12">
                      <CardPlayer />
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row">
                    <div className="col col-lg-3 col-md-4 col-c-12">
                      <CardPlayer />
                    </div>
                    <div className="col col-lg-3 col-md-4 col-c-12">
                      <CardPlayer />
                    </div>
                    <div className="col col-lg-3 col-md-4 col-c-12">
                      <CardPlayer />
                    </div>
                    <div className="col col-lg-3 col-md-4 col-c-12">
                      <CardPlayer />
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row">
                    <div className="col col-lg-3 col-md-4 col-c-12">
                      <CardPlayer />
                    </div>
                    <div className="col col-lg-3 col-md-4 col-c-12">
                      <CardPlayer />
                    </div>
                    <div className="col col-lg-3 col-md-4 col-c-12">
                      <CardPlayer />
                    </div>
                    <div className="col col-lg-3 col-md-4 col-c-12">
                      <CardPlayer />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a
              className="carousel-control-prev btn-pre"
              href="#home__player-cards"
              role="button"
              data-slide="prev"
            >
              <i class="bx bxs-chevrons-left bx-fade-left"></i>
            </a>
            <a
              className="carousel-control-next btn-next"
              href="#home__player-cards"
              role="button"
              data-slide="next"
            >
              <i class="bx bxs-chevrons-right bx-fade-right"></i>
            </a>
          </div> */}
        </ul>
      </div>
    </div>
  );
};

export default Home;
