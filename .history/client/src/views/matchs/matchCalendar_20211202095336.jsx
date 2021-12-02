import { useEffect, useState } from "react";
import Helmet from "../../components/Helmet/Helmet";
import Header from "../../containers/header/header";
//ip data
// import card_player_data from "../../assets/fake-data/CardPlayers";
import "./matchs.scss";

const MatchCalendar = (props) => {
  let n = 1;
  //lay tran dau
  const [match, setMatch] = useState([]);
  useEffect(() => {
    getMatch();
  }, []);

  async function getMatch() {
    let result = await fetch("http://127.0.0.1:8000/api/trandau");
    result = await result.json();
    setMatch(result);
  }

  // lay trong tai

  const [refe, setRefe] = useState([]);
  useEffect(() => {
    getRefe();
  }, []);

  async function getRefe() {
    let result = await fetch("http://127.0.0.1:8000/api/totrongtai");
    result = await result.json();
    setRefe(result);
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
            {refe.map((e) =>
              match.map(
                (item, index) =>
                  e.idToTT === item.idToTT && (
                    <tr key={item.idTD}>
                      <td>{n++}</td>
                      <td>{item.VongDau}</td>
                      <td className="team__match">
                        <div className="img_01">
                          <img src="" alt="not found" />
                        </div>
                        <p>{item.TenDoi1}</p>
                        <p>VS</p>
                        <p>{item.TenDoi2}</p>
                      </td>
                    
                      <td>{}</td>
                      <td>{}</td>
                    </tr>
                  )
              )
            )}
          </table>
        </div>
      </div>
    </Helmet>
  );
};

export default MatchCalendar;
