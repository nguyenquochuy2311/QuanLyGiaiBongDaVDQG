// import { useEffect } from "react";

import Helmet from "../../components/Helmet/Helmet";
import Header from "../../containers/header/header";
import Dunors from "../../components/dunors/dunors";

import "./contact.scss";

const Contact = () => {
  
  return (
    <Helmet title="Liên hệ">
      <Header title="Liên hệ" />
      <div className="component contact container" style={{marginTop:'0'}}>
        <main>
          <ol>
            <li className="title">các câu hỏi thường gặp</li>
            <ul className="list__contact">
              <div className="indexing">
                <span>Trang trợ giúp VN.Soccer</span>
              </div>
              <div className="content">
                <p>
                  Để biết thông tin và được hỗ trợ với các câu hỏi về Fantasy
                  Premier League, vui lòng truy cập
                  <a
                    href="https://fantastic.premierleague.com/help"
                    title="help"
                  >
                    https://fantastic.premierleague.com/help
                  </a>{" "}
                </p>
              </div>

              <div className="indexing">
                <span>Thắc mắc chung</span>
              </div>
              <div className="content">
                <p>
                  Vui lòng liên hệ{" "}
                  <a href="fpl@ismgames.com" title="gmail liên hệ">
                    fpl@ismgames.com
                  </a>{" "}
                  nếu có bất kỳ thắc mắc nào liên quan đến Fantasy Premier
                  League, đội bóng hoặc tài khoản người dùng của bạn.
                </p>
              </div>

              <div className="indexing">
                <span>Tôi không thể đăng nhập. Tôi cần làm gì?</span>
              </div>
              <div className="content">
                <p>
                  Hãy đảm bảo rằng bạn đang sử dụng địa chỉ e-mail đã đăng ký và
                  mật khẩu chính xác. Lưu ý rằng mật khẩu có phân biệt chữ hoa
                  chữ thường.
                </p>

                <p>
                  {" "}
                  Nếu bạn đã đăng ký lần đầu tiên trong mùa giải này, bạn sẽ cần
                  phải kích hoạt tài khoản của mình trước khi gia nhập một đội
                  Fantasy Premier League. Một email sẽ được gửi đến địa chỉ
                  email bạn đã đăng ký và chứa một liên kết mà bạn cần nhấp vào
                  để kích hoạt tài khoản của mình. Nếu bạn chưa nhận được email,
                  vui lòng kiểm tra thư mục thư rác hoặc thư rác của bạn.
                </p>

                <p>
                  {" "}
                  Thử đặt lại mật khẩu của bạn.Mật khẩu tạm thời sẽ được gửi đến
                  hộp thư của bạn. Vui lòng cập nhật mật khẩu của bạn sau khi
                  đăng nhập.
                </p>

                <p>
                  Nếu bạn không nhận được lời nhắc mật khẩu, vui lòng kiểm tra
                  thư mục Rác trong hộp thư đến của bạn và thêm
                  noreply@mailout.users.premierleague.com vào sổ địa chỉ của
                  bạn.
                </p>
              </div>

              <div className="indexing">
                <span>
                  Làm cách nào để cập nhật chi tiết tài khoản của tôi?
                </span>
              </div>
              <div>
                <p>
                  Bạn có thể cập nhật tài khoản của mình bất kỳ lúc nào sau khi
                  bạn đã đăng nhập.
                </p>
                <p>
                  Chỉ cần truy cập tài khoản của bạn qua tiêu đề trang web hoặc
                  menu khi sử dụng thiết bị di động. Từ đây, bạn có thể cập nhật
                  thông tin cá nhân của mình, bao gồm địa chỉ email và mật khẩu,
                  cũng như bất kỳ tùy chọn nào mà bạn đã chọn trước đó.
                </p>
              </div>
            </ul>

            <li className="title">form liên hệ</li>
            <ul>
              <form action="" method="post" autocomplete="on">
                <div className="form-contact">
                  <span className="form-title">Họ và tên</span>
                  <br />
                  <input
                    type="text"
                    className="input"
                    id="form-name"
                    placeholder="Name / Surname"
                  />
                </div>
                <div className="form-contact">
                  <span className="form-title">Email</span> <br />
                  <input
                    type="text"
                    className="input"
                    id="form-email"
                    placeholder="Email"
                  />
                </div>
                <div className="form-contact">
                  <span className="form-title">
                    Vấn đề gặp phải và lời nhắn
                  </span>
                  <br />
                  <textarea
                    type="text"
                    className="input"
                    id="form-content"
                    placeholder="Description"
                  />
                </div>
                <div className="form-contact">
                  <input type="button" id="submit" value="gửi đi" onclick="" />
                </div>
              </form>
            </ul>
          </ol>
        </main>
      </div>
      <Dunors />
    </Helmet>
  );
};

export default Contact;
