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
          <h3 className="body-text title__regulation">Quy định bàn thắng</h3>
          <ul className="body-text-list list__regulation">
            <li className=''>Tên gọi, mục đích và nhiệm vụ của giải.</li>
           
          </ul>

          <h3 className="body-text title__regulation">Quy định cầu thủ</h3>
          <ul className="list__regulation">
            <li className="item__regulation"></li>
          </ul>

          <h3 className="body-text title__regulation">Quy Đinh điểm số</h3>

          <ul className="body-text-list list__regulation">
            <li>
              <p ></p>
            </li>
            <li>Thảo luận và thông qua kế hoạch tổ chức giải.</li>
            <li>Thông qua kế hoạch công tác của các bộ phận chức năng.</li>
            <li>
              Thảo luận và giải quyết các vấn đề có liên quan đến công tác tổ
              chức giải.
            </li>
            <li>
              Thường xuyên kiểm tra công tác của các bộ phận chức năngtrong suốt
              thời gian tiến hành giải, đồng thời nghiên cứu và sử lý những vấn
              đề nảy sinh trong thi đấu.
            </li>
          </ul>
        </section>
      </div>
      <Dunors />
    </Helmet>
  );
};

export default Regulation;
