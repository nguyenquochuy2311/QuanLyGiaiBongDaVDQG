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
        let result = await fetch("http://127.0.0.1:8000/api/trandau");
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
        <div className="table">
          <table className="table__content">
            <tr>
              <th>STT</th>
              <th>Trận đấu</th>
              <th> Thời gian</th>
              <th>Địa điểm</th>
              <th>Chi tiết</th>
            </tr>
            {match.slice(0,10).map((item, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>
                  <p>{item.TenDoi1}</p>
                  <p>VS</p>
                  <p>{item.TenDoi2}</p>
                </td>
                <td>{item.ThoiGian}</td>
                <td>{}</td>
                <td>{}</td>
                <td>{}</td>

              </tr>
            ))}
          </table>
        </div>
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
