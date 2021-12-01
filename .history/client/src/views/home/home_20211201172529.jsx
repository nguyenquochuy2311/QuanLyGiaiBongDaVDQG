import { useEffect,useState } from "react";
import { Link } from "react-router-dom";
import "./home.scss";


import "../../styles/global.scss";
import "../../styles/_variables.scss";
import { Thuviendohoa } from "../../assets/img";

//import components
import Helmet from "../../components/Helmet/Helmet";
import Ban from "../../components/banner/banner";
import Card3D from "../../components/cards/card3D/card";

const Home = () => {
  const [match, setMatch] = useState([]);
    useEffect(() => {
        getMatch();
    }, []);

    async function getMatch() {
        let result = await fetch("http://127.0.0.1:8000/api/chotang_product");
        result = await result.json();
        setMatch(result);
      }
  return (
    <Helmet title="Trang Chủ" className="home component">
      <Ban />
      <div className="home-matchSchedule">
        <div className="home-matchSchedule-bg">
          <img src={Thuviendohoa} alt="" />
        </div>
        <h2 className="home-matchSchedule-title">Trận đấu trong tuần</h2>
        <ul className="list-group list-group-flush home-matchSchedule-list">
          {match.slice(0,10).map((match, index) => (
            <li key={index} className="list-group-item team-item ">
              <p className="team-item-name">{match.TenDoi1}</p>
              <p>VS</p>
              <p className="team-item-name">{match.TenDoi2}</p>
              <p className="time-item-match">
                <p className="time-item-match">{match.ThoiGian}</p>
                <p className="time-item-match-day">{match.day}</p>
              </p>
              <p className="place-match">{match.place}</p>
              <p>
                <Link to="/mua-ve" className="buy-ticket">
                  Mua vé
                </Link>
              </p>
              <Link
                to="/giai-dau/chi-tiet-tran-dau"
                title="Thông tin chi tiết trận đấu"
              >
                <i className="bx bx-chevrons-right">{match.description}</i>
              </Link>
            </li>
          ))}
         </ul>
         <Link to='/giai-dau/cac-tran-dau'>
        <button className="btn--view-more">
          Xem thêm
          <i className="bx bx-chevrons-right bx-fade-right"></i>
        </button>
         </Link>
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
