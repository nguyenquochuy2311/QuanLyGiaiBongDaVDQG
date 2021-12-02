import { useEffect } from "react";

import Helmet from "../../components/Helmet/Helmet";
import Header from "../../containers/header/header";
import Dunors from "../../components/dunors/dunors";


const Contact =()=>{
    useEffect(() => {
      document.title = "Liên hệ";
    });
 return(
    <Helmet title="Quy Định">
    <Header title="Quy định giải đấu" />
     <div className="component">
     <main>
        <ol>
            <li class="title">các câu hỏi thường gặp</li>
                <ul>
                    <div class="indexing">
                        <span>Trang trợ giúp VN.Soccer</span>
                    </div>
                    <div class="content">
                        <p>Để biết thông tin và được hỗ trợ với các câu hỏi về Fantasy Premier League, vui lòng truy cập
                        <a href="https://fantastic.premierleague.com/help" title="help">https://fantastic.premierleague.com/help</a> </p>
                    </div>

                    
                    <div class="indexing">
                        <span>Thắc mắc chung</span>
                    </div>
                    <div class="content">
                        <p>Vui lòng liên hệ <a href="fpl@ismgames.com" title="gmail liên hệ">fpl@ismgames.com</a> nếu có bất kỳ thắc mắc nào liên quan đến Fantasy Premier League, đội bóng hoặc tài khoản người dùng của bạn.</p>
                    </div>
                    
                    <div class="indexing">
                        <span>Tôi không thể đăng nhập. Tôi cần làm gì?</span>               
                    </div>
                    <div class="content">
                        <p>Hãy đảm bảo rằng bạn đang sử dụng địa chỉ e-mail đã đăng ký và mật khẩu chính xác. Lưu ý rằng mật khẩu có phân biệt chữ hoa chữ thường.</p>

                        <p> Nếu bạn đã đăng ký lần đầu tiên trong mùa giải này, bạn sẽ cần phải kích hoạt tài khoản của mình trước khi gia nhập một đội Fantasy Premier League. Một email sẽ được gửi đến địa chỉ email bạn đã đăng ký và chứa một liên kết mà bạn cần nhấp vào để kích hoạt tài khoản của mình. Nếu bạn chưa nhận được email, vui lòng kiểm tra thư mục thư rác hoặc thư rác của bạn.</p> 
                            
                        <p> <strong class="strong">Thử đặt lại mật khẩu của bạn.</strong> Mật khẩu tạm thời sẽ được gửi đến hộp thư của bạn. Vui lòng cập nhật mật khẩu của bạn sau khi đăng nhập.</p>
                            
                        <p>Nếu bạn không nhận được lời nhắc mật khẩu, vui lòng kiểm tra thư mục Rác trong hộp thư đến của bạn và thêm <strong class="strong">noreply@mailout.users.premierleague.com</strong> vào sổ địa chỉ của bạn.</p>    
                    </div>
                   
                    <div class="indexing">
                        <span>Làm cách nào để cập nhật chi tiết tài khoản của tôi?</span>
                    </div>
                    <div>
                        <p>Bạn có thể cập nhật tài khoản của mình bất kỳ lúc nào sau khi bạn đã đăng nhập.</p>
                        <p>Chỉ cần truy cập tài khoản của bạn qua tiêu đề trang web hoặc menu khi sử dụng thiết bị di động. Từ đây, bạn có thể cập nhật thông tin cá nhân của mình, bao gồm địa chỉ email và mật khẩu, cũng như bất kỳ tùy chọn nào mà bạn đã chọn trước đó.</p>
                    </div>
                </ul>

            <li class="title">form liên hệ</li>
            <ul>
                <form action="" method="post" autocomplete="on">
                    <div class="form-contact">
                        <span class="form-title">Họ và tên</span><br/>
                        <input type="text" class="input" id="form-name" placeholder="Name / Surname"/>
                    </div>
                    <div class="form-contact">
                        <span class="form-title">Email</span> <br/>
                        <input type="text" class="input" id="form-email" placeholder="Email"/>
                    </div>
                    <div class="form-contact">
                        <span class="form-title">Vấn đề gặp phải và lời nhắn</span><br/>
                        <input type="text" class="input" id="form-content" placeholder="Description"/>
                    </div>
                    <div class="form-contact">
                        <input type="button" id="submit" value="gửi đi" onclick=""/>
                    </div>
                </form>
                
            </ul>
             
        </ol>
    </main>
     </div>
     </Helmet>
 );
}

export default Contact;