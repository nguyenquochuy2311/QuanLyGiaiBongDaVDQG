import Helmet from "../Helmet/Helmet";
import Header from "../../containers/header/header";
//ip data
import card_player_data from "../../assets/fake-data/CardPlayers";
const RankPlayer = (props) => {
  return (
    <Helmet title="Bảng xếp hạng cầu thủ">
      <Header title="Bảng xếp hạng cầu thủ" />
      <div className="component">
        <div className="table">
          <h1 className="table__title">Bảng Xếp Hạng Cầu Thử</h1>
          <table className="table__content">
            <tr>
              <th>STT</th>
              <th>Cầu thủ</th>
              <th>Câu lạc bộ</th>
              <th>Vị trí</th>
              <th>Số bàn đã ghi</th>
              <th>Tổng điểm</th>
            </tr>
            {card_player_data.getSortCards10
            }
            <tr>
              <td>January</td>
              <td>$100</td>
            </tr>
            
          </table>
        </div>
      </div>
    </Helmet>
  );
};

export default RankPlayer;
