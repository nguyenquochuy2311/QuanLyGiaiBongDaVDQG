import { useEffect } from "react";

import Helmet from "../../components/Helmet/Helmet";
import Header from "../../containers/header/header";
import Dunors from "../../components/dunors/dunors";

import './contact.scss';

const Contact =()=>{
    useEffect(() => {
      document.title = "Liên hệ";
    });
 return(
    <Helmet title="Quy Định">
    <Header title="Quy định giải đấu" />
     <div className="component contact container">
     <main>
        <ol>
            <li className="title">các câu hỏi thường gặp</li>
                <ul className="list__contact">
                    <div className="indexing">
                        <span>Trang trợ giúp VN.Soccer</span>
                    </div>
                    <div className="content">
                        <p>Để biết thông tin và được hỗ trợ với các câu hỏi về Fantasy Premier League, vui lòng truy cập
                        <a href="https://fantastic.premierleague.com/help" title="help">https://fantastic.premierleague.com/help</a> </p>
                    </div>

                    
                    <div className="indexing">
                        <span>Thắc mắc chung</span>
                    </div>
                    <div className="content">
                        <p>Vui lòng liên hệ <a href="fpl@ismgames.com" title="gmail liên hệ">fpl@ismgames.com</a> nếu có bất kỳ thắc mắc nào liên quan đến Fantasy Premier League, đội bóng hoặc tài khoản người dùng của bạn.</p>
                    </div>
                    
                    <div className="indexing">
                        <span>Tôi không thể đăng nhập. Tôi cần làm gì?</span>               
                    </div>
                   
                   
                    <div className="indexing">
                        <span>Làm cách nào để cập nhật chi tiết tài khoản của tôi?</span>
                    </div>
                    <div>
                        <p>Bạn có thể cập nhật tài khoản của mình bất kỳ lúc nào sau khi bạn đã đăng nhập.</p>
                        <p>Chỉ cần truy cập tài khoản của bạn qua tiêu đề trang web hoặc menu khi sử dụng thiết bị di động. Từ đây, bạn có thể cập nhật thông tin cá nhân của mình, bao gồm địa chỉ email và mật khẩu, cũng như bất kỳ tùy chọn nào mà bạn đã chọn trước đó.</p>
                    </div>
                </ul>

            <li className="title">form liên hệ</li>
            <ul>
                <form action="" method="post" autocomplete="on">
                    <div className="form-contact">
                        <span className="form-title">Họ và tên</span><br/>
                        <input type="text" className="input" id="form-name" placeholder="Name / Surname"/>
                    </div>
                    <div className="form-contact">
                        <span className="form-title">Email</span> <br/>
                        <input type="text" className="input" id="form-email" placeholder="Email"/>
                    </div>
                    <div className="form-contact">
                        <span className="form-title">Vấn đề gặp phải và lời nhắn</span><br/>
                        <input type="text" className="input" id="form-content" placeholder="Description"/>
                    </div>
                    <div className="form-contact">
                        <input type="button" id="submit" value="gửi đi" onclick=""/>
                    </div>
                </form>
                
            </ul>
             
        </ol>
    </main>
     </div>
     <Dunors/>
     </Helmet>
 );
}

export default Contact;