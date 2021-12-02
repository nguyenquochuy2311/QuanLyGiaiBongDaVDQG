import { useEffect,useState} from 'react';

import Helmet from "../../../components/Helmet/Helmet";
import AdminHeader from "../header/adminHeader";
import Header from "../../../containers/header/header";
//ip data
import card_player_data from "../../../assets/fake-data/CardPlayers";
const Club = (props) => {
  let n = 1;
  const [clb, setclb] = useState([]);
  useEffect(() => {
    getclb();
  }, []);
  async function getclb() {
    let result = await fetch("http://127.0.0.1:8000/api/bxh_clb");
    result = await result.json();
    // console.log('<<<<<<<<<<<<result'+ result);
    setclb(result);
  }

  //sort high to low
  function compare(a, b) {
    if (Number(a.Diem) > Number(b.Diem)) {
      return -1;
    }
    if (Number(a.Diem) < Number(b.Diem)) {
      return 1;
    }
    return 0;
  }
  const cardsSorted = clb.sort(compare);


  return (
    <Helmet title="Quản Lý CLB">
      <AdminHeader />
      <Header title="Quản lý CLB" />
          <button className="add">
            <i class="bx bx-plus"></i>
            <p>Thêm</p>
          </button>

      <div className="component admin">
        <div className="table">
          <h1 className="table__title">Các câu lạc bộ</h1>
          <table className="table__content">
            <tr>
              <th>STT</th>
              <th>Cầu thủ</th>
              <th>Câu lạc bộ</th>
              <th>Vị trí</th>
              <th>Số bàn đã ghi</th>
              <th>Tổng điểm</th>
              <th>Sửa</th>
              <th>Xóa</th>
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
                <td>
                  <button className="edit">Sửa</button>
                </td>
                <td>
                  <button className="remove">Xóa</button>
                </td>
        </div>
      </div>
    </Helmet>
  );
};

export default Club;
