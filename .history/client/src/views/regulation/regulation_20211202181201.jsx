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
            <li>Tên gọi, mục đích và nhiệm vụ của giải.</li>
            <li>
              Quy mô của giải: Phải căn cứ vào mục đích và nhiệm vụ của giải để
              quyết định thành phần tham dự chủ yếu bao gồm các VĐV của đơn vị
              tổ chức chính và các VĐV của các đơn vị khác. Bên cạnh đó còn phải
              đề cập tới các vấn đề như địa điểm, thời gian thi đấu…
            </li>
            <li>
              Cơ cấu tổ chức của giải thi đấu : Phải căn cứ vào tình hình thực
              tế để lập ra các ủy ban và các tổ chức có liên quan nhằm giúp BTC
              giải hoàn thành tốt nhiệm vụ của mình, Khi đề cập tới vấ đề này
              nhất thiết phải bàn tới các nội dung như hình thức tổ chức , những
              bộ phận chủ yếu và số lượng các thành viên tham gia, tên tuổi và
              chức vụ của người phụ trách các tiểu ban và tổ chức đó.
            </li>
            <li>
              Dự trù kinh phí: Phải lên kế hoạch cân đối giữa nguồn thu và nguồn
              chi. Nguồn thu chủ yếu do cấp trên cấp cộng với tiền tài trợ và
              nguồn thu từ các hoạt động quảng cáo.
            </li>
            <li>
              Các khoản chi bao gồm: Tiền sửa chữa sân bãi, mua sắm trang thiết
              bị dụng cụ, tiền thưởng, tiền thuê sân bãi, đi lại, ăn ở, tiếp
              đón, thuốc men và những đồ dùng vật dụng cần thiết cho các thành
              viên tham gia.
            </li>
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
