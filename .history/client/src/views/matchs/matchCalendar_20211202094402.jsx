import {useEffect,useState} from 'react';
import Helmet from "../../components/Helmet/Helmet";
import Header from "../../containers/header/header";
//ip data
// import card_player_data from "../../assets/fake-data/CardPlayers";
import "./matchs.scss";

const MatchCalendar = (props) => {

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
    <Helmet title="Các trận đấu">
      <Header title="Các trận đấu" />
      <div className="component">
      <div className="table">
          <h1 className="table__title">Lịch thi đấu giữa các đội</h1>
          <table className="table__content">
            <tr>
              <th>STT</th>
              <th>Vòng đấu</th>
              <th>Ngày thi đấu</th>
              <th>Giờ </th>
              <th>Các đội thi đấu</th>
              <th>Sân vận động</th>
              <th>Trọng tài</th>
            </tr>
            {match.map((item, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{index + 1}</td>

                <td>
                  <div className="img">
                    <img src={item.img} alt="not found" />
                  </div>
                  <p>{item.title}</p>
                </td>
                <td>{}</td>
                <td>{}</td>
                <td>{}</td>
                <td>{}</td>

              </tr>
            ))}
          </table>
        </div>
      </div>
    </Helmet>
  );
};

export default MatchCalendar;
