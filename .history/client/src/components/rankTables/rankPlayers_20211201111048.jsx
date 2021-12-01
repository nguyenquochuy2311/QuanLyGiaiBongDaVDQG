import Helmet from "../Helmet/Helmet";
import Header from "../../containers/header/header";
//ip data
import card_player_data from "../../assets/fake-data/CardPlayers";
import "./rankPlayers.scss";

const RankPlayer = (props) => {
  return (
    <Helmet title="Bảng xếp hạng cầu thủ">
      <Header title="Bảng xếp hạng cầu thủ" />
      <div className="component">
       
      </div>
    </Helmet>
  );
};

export default RankPlayer;
