import {useParams,useHistory } from "react-router-dom";
import { useEffect, useState} from "react";


import Helmet from "../../components/Helmet/Helmet";
import Header from "../../containers/header/header";
//ip data
import card_player_data from "../../assets/fake-data/CardPlayers";

////////////////////////////////
import '../../styles/_variables.scss';
import '../../styles/global.scss';

const TeamDetail = (props) => { 
  let n=1;
  const [clb, setclb] = useState([]);
  useEffect(() => {
    getclb();
  }, []);
  async function getclb() {
    let result = await fetch("http://127.0.0.1:8000/api/clb");
    result = await result.json();
    // console.log('<<<<<<<<<<<<result'+ result);
    setclb(result);

  }

  
  let {title} = useParams();
  console.log(title);
  let history = useHistory();

  function backData (){
    history.push('/doi-bong')
  }

  return (
    <Helmet title="Chi tiết CLB ">
      <Header title="Chi tiết câu lạc bộ " />
      <div className="component">
      <div className="table">
        <div className="btn__back">
          <button onClick={backData} >
          <i class='bx bx-arrow-back'></i>
          <p>Trở lại</p>
          </button>
        </div>
          <h1 className="table__title">Thông tin chi tiết câu lạc bộ 
          <h2 style={{color:'#189267', fontSize:'1.4rem'}}>
          {'Becamex Bình Dương'}
          </h2>
          </h1>
          <table className="table__content">
            <tr>
              <th>STT</th>
              <th>Cầu thủ</th>
              <th>Số áo </th>
              <th>Vị trí </th>

              <th>Chiều cao</th>
              <th>Cân Nặng</th>
              <th>Năm sinh</th>
            </tr>
            {clb.map((item, index) => (
              item.TenHLV ==='Kiatisuk Senamuang'&&
              <tr>
                <td>{n++}</td>
                <td>
                  <div className="img">
                    <img src={item.img} alt="not found" />
                  </div>
                  <p>{item.TenCT}</p>
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

export default TeamDetail;
