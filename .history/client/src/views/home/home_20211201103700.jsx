import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import "./home.scss";


import "../../styles/global.scss";
import "../../styles/_variables.scss";
import { Thuviendohoa } from "../../assets/img";

//import components
import Helmet from "../../components/Helmet/Helmet";
import Ban from "../../components/banner/banner";
import Card3D from "../../components/cards/card3D/card";

const matchs = [
  {
    nameTeamOne: "Hoàng anh gia lai FC",
    nameTeamTwo: "Sông lam nghệ an",
    time: "17:00",
    day: "21.10",
    place: "TPHCM",
    description: "",
  },
  {
    nameTeamOne: "Hoàng anh gia lai FC",
    nameTeamTwo: "Sông lam nghệ an",
    time: "17:00",
    day: "21.10",
    place: "TPHCM",
    description: "",
  },
  {
    nameTeamOne: "Hoàng anh gia lai FC",
    nameTeamTwo: "Sông lam nghệ an",
    time: "17:00",
    day: "21.10",
    place: "TPHCM",
    description: "",
  },
  {
    nameTeamOne: "Hoàng anh gia lai FC",
    nameTeamTwo: "Sông lam nghệ an",
    time: "17:00",
    day: "21.10",
    place: "TPHCM",
    description: "",
  },
  {
    nameTeamOne: "Hoàng anh gia lai FC",
    nameTeamTwo: "Sông lam nghệ an",
    time: "17:00",
    day: "21.10",
    place: "TPHCM",
    description: "",
  },
  {
    nameTeamOne: "Hoàng anh gia lai FC",
    nameTeamTwo: "Sông lam nghệ an",
    time: "17:00",
    day: "21.10",
    place: "TPHCM",
    description: "",
  },
  {
    nameTeamOne: "Hoàng anh gia lai FC",
    nameTeamTwo: "Sông lam nghệ an",
    time: "17:00",
    day: "21.10",
    place: "TPHCM",
    description: "",
  },
  {
    nameTeamOne: "Hoàng anh gia lai FC",
    nameTeamTwo: "Sông lam nghệ an",
    time: "17:00",
    day: "21.10",
    place: "TPHCM",
    description: "",
  },
  {
    nameTeamOne: "Hoàng anh gia lai FC",
    nameTeamTwo: "Sông lam nghệ an",
    time: "17:00",
    day: "21.10",
    place: "TPHCM",
    description: "",
  },
  {
    nameTeamOne: "Hoàng anh gia lai FC",
    nameTeamTwo: "Sông lam nghệ an",
    time: "17:00",
    day: "21.10",
    place: "TPHCM",
    description: "",
  },
];
const Home = () => {
 
  return (
    <Helmet title="Trang Chủ" className="home component">
      <Ban />
      <div className="home-matchSchedule">
        <div className="home-matchSchedule-bg">
          <img src={Thuviendohoa} alt="" />
        </div>
        <h2 className="home-matchSchedule-title">Trận đấu trong tuần</h2>
        <ul className="list-group list-group-flush home-matchSchedule-list">
          {matchs.map((match, index) => (
            <li key={index} className="list-group-item team-item ">
              <p className="team-item-name">{match.nameTeamOne}</p>
              <p>VS</p>
              <p className="team-item-name">{match.nameTeamTwo}</p>
              <p className="time-item-match">
                <p className="time-item-match-hour">{match.time}</p>
                <p className="time-item-match-day">{match.day}</p>
              </p>
              <p className="place-match">{match.place}</p>
              <p>
                <Link to="/mua-ve" className="buy-ticket">
                  Mua vé
                </Link>
              </p>
              <Link
                to="/thong-tin-tran-dau"
                title="Thông tin chi tiết trận đấu"
              >
                <i className="bx bx-chevrons-right">{match.description}</i>
              </Link>
            </li>
          ))}
         </ul>
         <Link to='/'>
         </Link>
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

        </ul>
      </div>
    </Helmet>
  );
};

export default Home;
