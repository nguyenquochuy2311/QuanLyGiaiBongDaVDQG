import { useEffect,useState } from "react";

//ip component
import Helmet from "../../components/Helmet/Helmet";
import Header from "../../containers/header/header";
import Dunors from "../../components/dunors/dunors";

import './regulation.scss';

const Regulation = () => {
  return (
    <Helmet title="Quy Định">
      <Header title='Quy định giải đấu'/>
      <div className="component container">
      <section className="body-content">
        <h2 className="body-title">Một số quy định về mùa giải</h2>
        <h3 className="body-text">Quy định bàn thắng</h3>
        <ul className="body-text-list list__regulation">
          <li>Tên gọi, mục đích và nhiệm vụ của giải.</li>
          <li>
            Quy mô của giải: Phải căn cứ vào mục đích và nhiệm vụ của giải để
            quyết định thành phần tham dự chủ yếu bao gồm các VĐV của đơn vị tổ
            chức chính và các VĐV của các đơn vị khác. Bên cạnh đó còn phải đề
            cập tới các vấn đề như địa điểm, thời gian thi đấu…
          </li>
          <li>
            Cơ cấu tổ chức của giải thi đấu : Phải căn cứ vào tình hình thực tế
            để lập ra các ủy ban và các tổ chức có liên quan nhằm giúp BTC giải
            hoàn thành tốt nhiệm vụ của mình, Khi đề cập tới vấ đề này nhất
            thiết phải bàn tới các nội dung như hình thức tổ chức , những bộ
            phận chủ yếu và số lượng các thành viên tham gia, tên tuổi và chức
            vụ của người phụ trách các tiểu ban và tổ chức đó.
          </li>
          <li>
            Dự trù kinh phí: Phải lên kế hoạch cân đối giữa nguồn thu và nguồn
            chi. Nguồn thu chủ yếu do cấp trên cấp cộng với tiền tài trợ và
            nguồn thu từ các hoạt động quảng cáo.
          </li>
          <li>
            Các khoản chi bao gồm: Tiền sửa chữa sân bãi, mua sắm trang thiết bị
            dụng cụ, tiền thưởng, tiền thuê sân bãi, đi lại, ăn ở, tiếp đón,
            thuốc men và những đồ dùng vật dụng cần thiết cho các thành viên
            tham gia.
          </li>
        </ul>

        <h3  className="body-text">Quy định cầu thủ</h3>
        <ul className="list__regulation">
          <li className="item__regulation">

          </li>
        </ul>

        <h3  className="body-text">Phân công chức năng và nhiệm vụ của các bộ phận trong BTC giải</h3>
      
        <ul className="body-text-list list__regulation">
          <li>Đặt ra và quán triệt nhiệm vụ, mục tiêu của giải.</li>
          <li>Thảo luận và thông qua kế hoạch tổ chức giải.</li>
          <li>Thông qua kế hoạch công tác của các bộ phận chức năng.</li>
          <li>
            Thảo luận và giải quyết các vấn đề có liên quan đến công tác tổ chức
            giải.
          </li>
          <li>
            Thường xuyên kiểm tra công tác của các bộ phận chức năngtrong suốt
            thời gian tiến hành giải, đồng thời nghiên cứu và sử lý những vấn đề
            nảy sinh trong thi đấu.
          </li>
        </ul>

        <p style={{color: 'red', fontSize:'1.2rem', fontWeight:'500'}}>Ban thư ký</p>
        <ul className="body-text-list">
          <li>
            Căn cứ vào quyết định của BTC tiến hành sắp xếp, bố trí nhân sự vào
            các bộ phận chức năng.
          </li>
          <li>Lập kế hoạch làm việc và thực hiện các công việc.</li>
          <li>Đặt ra các chế độ và ban hành điều lệ giải.</li>
          <li>Phụ trách vấn đề đối ngoại.</li>
          <li>
            Tổ chức các cuộc họp để giải quyết những vấn đề có liên quan tới các
            bộ phận chức năng.
          </li>
        </ul>

        <p style={{color: 'red', fontSize:'1.2rem', fontWeight:'500'}}>Ban tuyên truyền</p>
        <ul className="body-text-list">
          <li>
            Phụ trách công tác tuyên truyền. Quảng cáo và đưa tin trước giải thi
            đấu.
          </li>
          <li>
            Kịp thời thông báo kết quả và các vấn đề có liên quan trong thời
            gian tổ chức giải, tổ chức các cuộc họp báo để công bố các thông tin
            cần thiết.
          </li>
          <li>
            Đặt ra các tiêu chuẩn để bình chọn tập thể, cá nhân xuất sắc và phụ
            trách công tác bình chọn.
          </li>
          <li>
            Tổ chức các hoạt động tham gia và giải trí cho các thành viên tham
            gia.
          </li>
        </ul>

        <p style={{color: 'red', fontSize:'1.2rem', fontWeight:'500'}}>Ban giám sát</p>
        <ul className="body-text-list">
          <li>
            Kiểm tra tình hình chuẩn bị sân bãi và các trang thiết bị khác.
          </li>
          <li>
            Lập – kiểm tra kế hoạch công tác và tình trạng thể lực của Trọng
            tài.
          </li>
          <li>
            Tổ chức các cuộc họp để giải quyết các vấn đề nảy sinh trong thi
            đấu.
          </li>
          <li>Sắp xếp thời gian tập luyện và sân bãi cho các đội.</li>
        </ul>
      </section>

      </div>
     <Dunors/>
    </Helmet>
  );
};

export default Regulation;
