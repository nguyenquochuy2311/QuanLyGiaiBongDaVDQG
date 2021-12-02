import Helmet from "../../components/Helmet/Helmet";
import Header from "../../containers/header/header";
//ip data
import card_player_data from "../../assets/fake-data/CardPlayers";
import "./matchs.scss";

const MatchDetail = (props) => {
  return (
    <Helmet title="Kết quả ">
      <Header title="Chi tiết trận đấu" />
      <div className="component">
      <div className="table">
          <h1 className="table__title">Chi tiết trận đấu</h1>
          <table className="table__content">
            <tr>
              <th>STT</th>
              <th>Ngày thi đấu</th>
              <th>Giờ </th>
              <th>Các đội thi đấu</th>
              <th>Sân vận động</th>
              <th>Trọng tài</th>
            </tr>
            {card_player_data.getSortCards(10).map((item, index) => (
              <tr>
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

export default MatchDetail;
