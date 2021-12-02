import Helmet from "../../../components/Helmet/Helmet";
import AdminHeader from '../header/adminHeader';
import Header from "../../../containers/header/header";
//ip data
import card_player_data from "../../../assets/fake-data/CardPlayers";
const AdminRegulation = (props) => {
  return (

    <Helmet title="Admin quy định">
        <AdminHeader/>
      <Header title="Quản lý quy định" />
      <div className="component" >
      <section className="body-content">

<h2 className="body-title ">Một số quy định về mùa giải</h2>
<div className="table">

<h3 className="table__title title__regulation body-text">Quy định cầu thủ</h3>
<ul className="body-text-list list__regulation">
  {rgPlayer.map((item, i) => (
    <li key={i} className="item__regulation">
      <p className="item__regulation__content">
        <p className="item__regulation__title">Tuổi tối thiểu: </p>

        {item.TuoiToiThieu}
      </p>
      <p className="item__regulation__content">
        <p className="item__regulation__title">Tuổi tối đa: </p>
        {item.TuoiToiDa}
      </p>
      <p className="item__regulation__content">
        <p className="item__regulation__title">
          Số lượng tối thiểu:{" "}
        </p>
        {item.SLToiThieu}
      </p>
      <p className="item__regulation__content">
        <p className="item__regulation__title">Số lượng tối đa: </p>
        {item.SLToiDa}
      </p>
      <p className="item__regulation__content">
        <p className="item__regulation__title">
          Số lượng cầu thủ nước ngoài:{" "}
        </p>
        {item.SLNuocNgoai}
      </p>
    </li>
  ))}
</ul>
</div>

<div className="table">
  <h3 className="table__title body-text title__regulation">
    Quy định bàn thắng
  </h3>
  <table className="table__content">
    <tr>
      <th>Loại bàn thắng</th>
      <th>Thời điểm bắt đầu(phút)</th>
      <th>Thời điểm kết thúc((phút)</th>
    </tr>
    {rgWin.map((item, i) => (
      <tr>
        <td>{item.LoaiBT}</td>
        <td>{item.ThoiDiemBatDau}</td>

        <td>{item.ThoiDiemKetThuc}</td>
      </tr>
    ))}
  </table>
</div>

<div className="table">
  <h3 className="body-text title__regulation table__title">
    Quy định điểm số
  </h3>
  <table className="table__content">
    <tr>
      <th>Thắng</th>
      <th>Hòa </th>
      <th>Thua</th>
    </tr>
    {rgScore.map((e, i) => (
      <tr key={i}>
        <td>{e.DiemThang}</td>
        <td>{e.DiemHoa}</td>
        <td>{e.DiemThua}</td>
      </tr>
    ))}
  </table>
</div>
</section>
      </div>
    </Helmet>
  );
};

export default AdminRegulation;
