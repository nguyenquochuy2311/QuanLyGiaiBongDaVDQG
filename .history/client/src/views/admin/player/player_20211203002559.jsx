import { useEffect, useState } from "react";
import Helmet from "../../../components/Helmet/Helmet";
import AdminHeader from "../header/adminHeader";
import Header from "../../../containers/header/header";

const PLayer = (props) => {
  const [player, setPlayer] = useState([]);
  const [infoPlayer, setInfoPlayer] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pageCount, setpageCount] = useState(0);
  const [pageNumber, setPageNumber] = useState(0);

  let index = 1;
  let itemPerPage = 8;

  const pageVisited = pageNumber * itemPerPage;

  useEffect(() => {
    // setLoading(false);
    getPlayer();
    getInfoPlayer();
  }, []);

  async function getPlayer() {
    let result = await fetch("http://127.0.0.1:8000/api/bxh_ct");
    result = await result.json();
    setPlayer(result);
  }

  // pagination
  // const handlePageClick = async (data) => {
  //   // console.log(data.selected);
  //   let curentPage = data.selected + 1;
  //   const cauthu = await getPlayer(curentPage);
  //   setPlayer(cauthu);
  // };

  // lay cau thu
  async function getInfoPlayer() {
    let result = await fetch("http://127.0.0.1:8000/api/cauthu");
    result = await result.json();
    setInfoPlayer(result);
  }

  //sort high to low
  function compare(a, b) {
    if (Number(a.SoBanThang) > Number(b.SoBanThang)) {
      return -1;
    }
    if (Number(a.SoBanThang) < Number(b.SoBanThang)) {
      return 1;
    }
    return 0;
  }
  const cardsSorted = player.sort(compare);

  return (
    <Helmet title="Quản Lý cầu thủ">
      <AdminHeader />
      <Header title="Quản lý cầu thủ" />
      <div className="component admin">
        <div className="table">
          <h1 className="table__title">Danh Sách Cầu Thủ</h1>
          <button className="add">
          <i class="bx bx-plus"></i>
          <p>Thêm</p>
        </button>
          <table className="table__content">
            <tr>
              <th>STT</th>
              <th>Cầu thủ</th>
              <th>Câu lạc bộ</th>
              <th>Chiều cao(cm)</th>
              <th>Loại cầu thủ</th>
              <th>Số áo</th>
              <th>Vị trí</th>
              <th>Số bàn đã ghi</th>
              <th>Sửa</th>
              <th>Xóa</th>

            </tr>

            {
              // cardsSorted.map((item) => (
            infoPlayer.slice(0,20).map((e) =>
                // console.log('clb=>>>>>>>>>'+e.clb) &&
                <>
                  <tr>
                    <td>{index++}</td>
                    <td>
                      <div className="img">
                        <picture>
                          <source
                            srcset={
                              `../../../assets/img/AnhCauthu/${
                                e.clb.TenCLB
                              }/${
                                e.AnhDaiDien === "Anh_HAGL_NguyenHuuT uan"
                                  ? "Anh_HAGL_VuVanThanh"
                                  : e.AnhDaiDien
                              }${".jpg" || ".png"}`
                            }
                          />

                          {/* <img
                            src={
                              require(`../../../assets/img/AnhCauthu/Hà Nội/Anh_HNFC_NguyenVanMinh.jpg`)
                                .default
                            }
                            alt="not found"
                          /> */}
                        </picture>
                      </div>

                      <p>{e.TenCT}</p>
                    </td>
                    <td>{e.clb.TenCLB}</td>
                    <td>{e.ChieuCao}</td>
                    <td>{e.LoaiCauThu}</td>

                    <td>{e.SoAo}</td>
                    <td>{e.ViTri}</td>
                    <td>{
                      cardsSorted.map((item) => (
                        item.TenCT ===e.TenCT? item.SoBanThang : ' '
                      ))
                      }</td>
                    <td>
                      <button className="edit">Sửa</button>
                    </td>
                    <td>
                      <button className="remove">Xóa</button>
                    </td>
                  </tr>
                </>
              )
            //   )
            // )
            }
          </table>
          {/* <ReactPaginate
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
          /> */}
        </div>
      </div>
    </Helmet>
  );
};

export default PLayer;