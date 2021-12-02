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
    let result = await fetch("http://127.0.0.1:8000/api/ketqua");
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
              <th>Trọng tài</th>
              {/* <th>Trọng tài</th> */}
              <th>Tỉ số</th>


            </tr>
            {cardsSorted.map((item) => (
              <tr key ={item.idKQ}>
                <td>{n++}</td>
                <td>{item.trandau.ThoiGian}</td>
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
                <td>{item.trandau.SanDau}</td>
                <td>
                {refe.map(
                      (e) =>
                        e.idToTT === item.trandau.idToTT && (
                          <p className="group__refe">{e.to_trong_tai.TenTT}
                          ({e.to_trong_tai.ViTri===''})
                          </p>

                        )
                    )}
                </td>
                <td>
                  <p>{item.BTDoi1}</p>
                  <p> - </p>
                  <p>{item.BTDoi2}</p>
                </td>

              </tr>
            ))}
          </table>
        </div>
      </div>
    </Helmet>
  );
};

export default MatchDetail;
