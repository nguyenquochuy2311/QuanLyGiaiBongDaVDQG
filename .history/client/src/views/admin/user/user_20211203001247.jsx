import Helmet from "../../../components/Helmet/Helmet";
import AdminHeader from '../header/adminHeader';
import Header from "../../../containers/header/header";
//ip data
import card_player_data from "../../../assets/fake-data/CardPlayers";
const AdminAccount = (props) => {
 

        
  const [getuser, setUser] = useState([]);

useEffect(() => {
    getUser();

}, []);



async function getUser() {
  let result = await fetch("http://127.0.0.1:8000/api/getuser");
  result = await result.json();
  setUser(result);
}


return (
 <div>


<AdminHeader/>

{/* Content Wrapper. Contains page content */}
<div className="content-wrapper">
  {/* Content Header (Page header) */}
  <div className="content-header">
    <div className="container-fluid">
      <div className="row mb-2">
        <div className="col-sm-6">
         
          <div className="navbar-search-block">
          
        <form className="form-inline">
        <h4 className="m-0">Danh sách người dùng</h4>
          <div className="input-group input-group-sm">
            <input className="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search" />
            <div className="input-group-append">
              <button className="btn btn-navbar" type="submit">
                <i className="fas fa-search" />
              </button>
            </div>
          </div>
        </form>
      </div>
        </div>{/* /.col */}
        <div className="col-sm-6">
          
        </div>{/* /.col */}
      </div>{/* /.row */}
    </div>{/* /.container-fluid */}
  </div>
  <section className="content">
  
    <table className="table table-striped projects">
      <thead>
        <tr>
          <th style={{width: '5%'}}>
            id
          </th>
          <th style={{width: '25%'}}>
            Tên Tài Khoản
          </th>
          <th style={{width: '25%'}}>
            Email
          </th>
          <th>
            Mật Khẩu
          </th>
          <th style={{width: '8%'}} className="text-center">
            Status
          </th>
          <th style={{width: '20%'}} className="text-center">
            Cập nhật
          </th>
        </tr>
      </thead><tbody>
      {getuser.map((user, key) => (
        <tr  key={key}>
          <td>
          {user.id}
          </td>
          <td>
          {user.name}
          </td>
          <td>
          {user.email}
          </td>
          <td className="project_progress">
          {user.password}Đã bị ẩn
          </td>
          <td className="project-state">
            <span className="badge badge-success">Đang hoạt động</span>
          </td>
          <td className="project-actions text-right">
            <a className="btn btn-info btn-sm" href="#">
              <i className="fas fa-pencil-alt">
              </i>
              Edit
            </a>
            {/* <button type="button"  class="btn btn-danger btn-sm">Xóa khỏi giỏ</button> */}
            <a className="btn btn-danger btn-sm" onclick="window.location='{{ route('xoauser',$item->id) }}'">
              <i className="fas fa-trash">
              </i>
              Delete
            </a>
          </td>
        </tr>
            ))}
        </tbody>
    </table>
  </section>
  {/* /.content */}
</div>
{/* /.content-wrapper */}
<footer className="main-footer">
</footer>


</div>





);
    {/* {  <Header title="Tài khoản người dùng" />
      <div className="component  admin" >
        <div className="table">
          <h1 className="table__title">Tài khoản </h1>
          <button className="add">
          <i class="bx bx-plus"></i>
          <p>Thêm</p>
        </button>
          <table className="table__content">
            <tr>
              <th>STT</th>
              <th>Tên đăng nhập</th>
              <th>Email</th>

              <th>Mật khẩu</th>
              <th>Sửa</th>
              <th>Xóa</th>

            </tr>
            {card_player_data.getSortCards(10).map((item, index) => (
              <tr>
                <td>{index + 1}</td>
                
                <td>{}</td>
                <td>{}</td>

                <td>{}</td>

               
                <td>
                      <button className="edit">Sửa</button>
                    </td>
                    <td>
                      <button className="remove">Xóa</button>
                    </td>
              </tr>
            ))}
          </table>
        </div>
      </div>} */}
    </Helmet>
  );
};

export default AdminAccount;
