import Helmet from "../../../components/Helmet/Helmet";
import AdminHeader from '../header/adminHeader';
import Header from "../../../containers/header/header";
//ip data
import card_player_data from "../../../assets/fake-data/CardPlayers";
const PLayer = (props) => {
  return (

    <Helmet title="Quản Lý cầu thủ">
        <AdminHeader/>
      <Header title="Quản lý cầu thủ" />
      <div className="component" >
        <div className="table">
          <h1 className="table__title">Bảng thông tin cầu thủ</h1>
          <table className="table__content">
            <tr>
              <th>STT</th>
              <th>Cầu thủ</th>
              <th>Câu lạc bộ</th>
              <th>Vị trí</th>
              <th>Số bàn đã ghi</th>
              <th>Tổng điểm</th>
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

export default PLayer;
