import { useEffect, useState} from 'react';
import Helmet from "../../components/Helmet/Helmet";
import Header from "../../containers/header/header";
//ip data
import card_team_data from "../../assets/fake-data/CardTeams";
import "./matchs.scss";

const MatchDetail = (props) => {
let n=1;
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

  //sort high to low
  function compare(a, b) {
    if (Number(a.VongDau) < Number(b.VongDau)) {
      return -1;
    }
    if (Number(a.VongDau) > Number(b.VongDau)) {
      return 1;
    }
    return 0;
  }
  const cardsSorted = match.sort(compare);

  return (
    <Helmet title="Kết quả trận đấu">
      <Header title="Kết quả trận đấu" />
      <div className="component">
      <div className="table">
          <h1 className="table__title">Kết quả trận đấu</h1>
          <table className="table__content">
            <tr>
              <th>STT</th>
              <th>Ngày thi đấu</th>
              <th>Các đội thi đấu</th>
              <th>Sân vận động</th>
              <th>Thời gian thi đấu</th>
              <th>Tỉ số</th>

              {/* <th>Trọng tài</th> */}

            </tr>
            {cardsSorted.slice(0,9).map((item, index) => (
              <tr key ={item.id}>
                <td>{n++}</td>
                <td>{item.ThoiGian}</td>
                <td className="team__match team__logo">
                    <div className="img_clb">
                      {card_team_data
                        .getAllCards()
                        .map(
                          (element) =>
                            element.title === item.TenDoi1 && (
                              <img
                                className="img logo"
                                src={element.img}
                                alt="not found"
                              />
                            )
                        )}

                      <p>{item.TenDoi1}</p>
                    </div>
                    <p class="sologan">VS</p>
                    <div className="img_clb">
                      {card_team_data
                        .getAllCards()
                        .map(
                          (element) =>
                            element.title === item.TenDoi2 && (
                              <img
                                className="img logo"
                                src={element.img}
                                alt="not found"
                              />
                            )
                        )}
                      <p>{item.TenDoi2}</p>
                    </div>
                  </td>
                <td>{item.SanDau}</td>
                <td>{Math.floor(Math.random(93,10))}</td>
                <td>{Math.floor(Math.random(1,5))}</td>

              </tr>
            ))}
          </table>
        </div>
      </div>
    </Helmet>
  );
};

export default MatchDetail;
