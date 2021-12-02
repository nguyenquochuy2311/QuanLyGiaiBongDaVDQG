import Helmet from "../../../components/Helmet/Helmet";
import AdminHeader from '../header/adminHeader';
import Header from "../../../containers/header/header";
//ip data
import card_player_data from "../../../assets/fake-data/CardPlayers";
const PLayer = (props) => {
  return (

    <Helmet title="Quản Lý cầu thủ">
        <AdminHeader/>
      <Header title="Quản lý cầu thủ" />
      <div className="component" >
      <div className="table">
          <h1 className="table__title">Bảng Xếp Hạng Cầu Thủ</h1>
          <table className="table__content">
            <tr>
              <th>STT</th>
              <th>Cầu thủ</th>
              <th>Câu lạc bộ</th>
              <th>Số áo</th>
              <th>Vị trí</th>
              <th>Số bàn đã ghi</th>
            </tr>

            {cardsSorted.slice(0,9).map((item) =>
              infoPlayer.map(
                (e) =>
                  // console.log('clb=>>>>>>>>>'+e.clb) &&
                  e.TenCT === item.TenCT && (
                    <>
                      <tr>
                        <td>{index++}</td>
                        <td>
                          <div className="img">
                            <img
                              src={
                                require(`../../assets/img/AnhCauthu/${
                                  item.TenCLB
                                }/${e.AnhDaiDien}${".jpg" || ".png"}`).default
                              }
                              alt="not found"
                            />
                          </div>
                          <p>{item.TenCT}</p>
                        </td>
                        <td>{item.TenCLB}</td>
                        <td>{e.SoAo}</td>
                        <td>{e.ViTri}</td>
                        <td>{item.SoBanThang}</td>
                      </tr>
                    </>
                  )
              )
            )}
          </table>
          <ReactPaginate
            previousLabel={"<<"}
            nextLabel={">>"}
            breakLabel={"..."}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={3}
            onPageChange={handlePageClick}
            containerClassName={"pagination justify-content-center"}
            pageClassName={"page-item"}
            pageLinkClassName={"page-link"}
            previousClassName={"page-item"}
            previousLinkClassName={"page-link"}
            nextClassName={"page-item"}
            nextLinkClassName={"page-link"}
            breakClassName={"page-item"}
            breakLinkClassName={"page-link"}
            activeClassName={"active"}
          />
        </div>
      </div>
    </Helmet>
  );
};

export default PLayer;
