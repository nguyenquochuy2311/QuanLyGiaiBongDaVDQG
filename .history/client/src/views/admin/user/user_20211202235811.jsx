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
      <div className="component  admin" >
        <div className="table">
          <h1 className="table__title">Tài khoản </h1>
          <button className="add">
          <i class="bx bx-plus"></i>
          <p>Thêm</p>
        </button>
          <table className="table__content">
            <tr>
              <th>STT</th>
              <th>Tên đăng nhập</th>
              <th>Tên đăng nhập</th>

              <th>Mật khẩu</th>
              <th>Sửa</th>
              <th>Xóa</th>

            </tr>
            {card_player_data.getSortCards(10).map((item, index) => (
              <tr>
                <td>{index + 1}</td>
                
                <td>{}</td>
                <td>{}</td>

                <td>{}</td>

               
                <td>
                      <button className="edit">Sửa</button>
                    </td>
                    <td>
                      <button className="remove">Xóa</button>
                    </td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </Helmet>
  );
};

export default AdminAccount;
