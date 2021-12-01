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
            <th>Month</th>
            <th>Savings</th>
            <th>Month</th>
            <th>Savings</th>   <th>Month</th>
            <th>Savings</th>   <th>Month</th>
            <th>Savings</th>
          </tr>
          <tr>
            <td>January</td>
            <td>$100</td>
          </tr>
          <tr>
            <td>February</td>
            <td>$80</td>
          </tr>
        </table>
        </div>
      </div>
    </Helmet>
  );
};

export default RankPlayer;
