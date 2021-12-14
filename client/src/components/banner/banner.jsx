import "./banner.scss";
import "../../styles/global.scss";
// import { NavLink, Link } from "react-router-dom";
import { banner,banner2,banner3 } from "../../assets/img";
const Ban = () => {
  return (
    <div className="row">
      <div
        id="carouselExampleIndicators"
        className="carousel slide ban"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>

        <div className="carousel-inner">
          <div className="ban-calendar">
            <h2 className="ban-calendar-title">Bóng đá việt nam</h2>
            <p className="ban-calendar-text">
              Khơi dậy niềm dam mê trong bạn, những trận bóng được diễn ra hàng
              tuần hàng tháng
            </p>
            <button className="ban-btn">
              <p>Xem thêm</p>
              <i className="bx bx-chevrons-right bx-fade-right"></i>
            </button>
          </div>
          <div className="carousel-item active">
            <img className="d-block w-100 ban-img" src={banner} alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100 ban-img" src={banner2} alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100 ban-img" src={banner3} alt="Third slide" />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <button className="ban-btn ban-btn-left" aria-hidden="true">
            <i className="bx bx-chevron-left bx-fade-left"></i>
          </button>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next "
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <button className="ban-btn ban-btn-right " aria-hidden="true">
            <i className="bx bx-chevron-right bx-fade-right"></i>
          </button>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
};

export default Ban;