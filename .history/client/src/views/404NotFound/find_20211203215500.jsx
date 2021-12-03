
import { Link } from "react-router-dom";

import Helmet from "../../components/Helmet/Helmet";

//ip data

const NotFound = (props) => {
  

  return (
    <Helmet title="Not found">

      <div className="component admin">
        <h3 className="table__title">Trang này không tồn tại</h3>
        <Link to="/">
          <button className="add">
            <i class="bx bx-plus"></i>
            <p>Trở về trang chủ</p>
          </button>
        </Link>
      
      </div>
    </Helmet>
  );
};

export default NotFound;
