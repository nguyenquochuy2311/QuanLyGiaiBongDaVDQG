import Helmet from "../../../components/Helmet/Helmet";
import AdminHeader from '../header/adminHeader';
import Header from "../../../containers/header/header";
//ip data
import card_player_data from "../../../assets/fake-data/CardPlayers";
const AdminAccount = (props) => {
  return (

    <Helmet title="Admin user">
        <AdminHeader/>
      <Header title="Tài khoản người dùng" />
      <div className="component" >
        <div className="table">
          <h1 className="table__title">Tài khoản </h1>
          <table className="table__content">
            <tr>
              <th>STT</th>
              <th>Tên đăng nhập</th>
              <th>Mật khẩu</th>
              <th>Mật khẩu</th>
              <th>Mật khẩu</th>

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

export default AdminAccount;
