import Helmet from "../../components/Helmet/Helmet";
import Header from "../../containers/header/header";
//ip data
import card_player_data from "../../assets/fake-data/CardPlayers";
import "./matchs.scss";

const MatchDetail = (props) => {
  return (
    <Helmet title="Chi tiết trận đấu">
      <Header title="Chi tiết trận đấu" />
      <div className="component">
        <div className="limiter">
          <h1 className="title1">
            {" "}
            BẢNG XẾP HẠNG<span>VỀ CÁC CẦU THỦ TRONG MÙA GIẢI</span>
          </h1>
          <div className="container-table100">
            <div className="wrap-table100">
              <div className="table100">
                <table>
                  <thead>
                    <tr className="table100-head">
                      <th className="column1">Thứ Tự</th>
                      <th className="column2">Cầu Thủ</th>
                      <th className="column3">Câu Lạc Bộ</th>
                      <th className="column4">Vị Trí</th>
                      <th className="column5">Tổng Điểm</th>
                    </tr>
                  </thead>
                  <tbody>
                    {card_player_data.getSortCards(10).map((item, index) => (
                      <tr key={index}>
                        <td className="column1">{index + 1}</td>
                        <td className="column3">
                          <img
                            alt=""
                            className="anhcauthu"
                            src={item.img}
                          ></img>
                          {item.title}
                        </td>
                        <td className="column2">{item.club}</td>
                        <td className="column4">{item.role}</td>
                        <td className="column5">{item.score}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Helmet>
  );
};

export default MatchDetail;
