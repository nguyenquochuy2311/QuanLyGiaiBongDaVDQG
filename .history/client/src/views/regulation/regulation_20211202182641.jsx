import { useEffect, useState } from "react";

//ip component
import Helmet from "../../components/Helmet/Helmet";
import Header from "../../containers/header/header";
import Dunors from "../../components/dunors/dunors";

import "./regulation.scss";

const Regulation = () => {
  const [rgScore, setRgScore] = useState([]);
  const [rgWin, setRgWin] = useState([]);
  const [rgPlayer, setRgPlayer] = useState([]);

  useEffect(() => {
    getRgScore();
    getRgWin();
    getRgPlayer();
  }, []);

  //get ragulation score
  async function getRgScore() {
    let result = await fetch("http://127.0.0.1:8000/api/diemso");
    result = await result.json();
    setRgScore(result);
  }

  //get ragulation goal

  async function getRgWin() {
    let result = await fetch("http://127.0.0.1:8000/api/qd-banthang");
    result = await result.json();
    setRgWin(result);
  }
  //get ragulation player

  async function getRgPlayer() {
    let result = await fetch("http://127.0.0.1:8000/api/qd-cauthu");
    result = await result.json();
    setRgPlayer(result);
  }
  return (
    <Helmet title="Quy Định">
      <Header title="Quy định giải đấu" />
      <div className="component container">
        <section className="body-content">
          <h2 className="body-title ">Một số quy định về mùa giải</h2>
          <h3 className="body-text title__regulation">Quy định cầu thủ</h3>
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
                  <p className="item__regulation__title">
                    Số lượng tối đa:{" "}
                  </p>
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

          <div  className="table">
          <h3 className="table__title body-text title__regulation">Quy định bàn thắng</h3>
             <table className="table__content">
               <tr>
                 <th>Cầu thủ</th>
                 <th>Câu lạc bộ</th>
                 <th>Số áo</th>
                 <th>Vị trí</th>
                 <th>Số bàn đã ghi</th>
               </tr>
          {rgWin.map((item, i) => (
            <tr>
              <td></td>
              <td></td>

              <td></td>

            </tr>
     <li key={i} className="item__regulation">

     <p className="item__regulation__content">
       <p className="item__regulation__title">Loại bàn thắng: </p>

       {item.LoaiBT}
     </p>
     <p className="item__regulation__content">
       <p className="item__regulation__title">Thời điểm bắt đầu  : </p>
       {item.ThoiDiemBatDau}
     </p>
     <p className="item__regulation__content">
       <p className="item__regulation__title">
         Thời điểm kết thúc:{" "}
       </p>
       {item.ThoiDiemKetThuc}
     </p>
   
   </li>
              </table>
          
           </div>

            
            ))}

          <h3 className="body-text title__regulation">Quy Đinh điểm số</h3>

          <ul className="body-text-list list__regulation">
            <li>
              <p></p>
            </li>
          </ul>
        </section>
      </div>
      <Dunors />
    </Helmet>
  );
};

export default Regulation;
