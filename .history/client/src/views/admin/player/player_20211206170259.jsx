import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { store } from "react-notifications-component";

import Helmet from "../../../components/Helmet/Helmet";
import AdminHeader from "../header/adminHeader";
import Header from "../../../containers/header/header";

import {LogoPlayer} from "../../../assets/img";

const PLayer = (props) => {
  const [player, setPlayer] = useState([]);
  const [infoPlayer, setInfoPlayer] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [pageCount, setpageCount] = useState(0);
  // const [pageNumber, setPageNumber] = useState(0);

  let index = 1;
  // let itemPerPage = 8;

  // const pageVisited = pageNumber * itemPerPage;

  useEffect(() => {
    // setLoading(false);
    getInfoPlayer();
  }, []);

  // async function getPlayer() {
  //   let result = await fetch("http://127.0.0.1:8000/api/bxh_ct");
  //   result = await result.json();
  //   setPlayer(result);
  // }

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

  async function deletePlayer(id) {
    await fetch("http://localhost:8000/api/auth/cauthu/delete" + id, {
      method: "delete ",
    });
    window.location.reload();
    store.addNotification({
      title: "Xóa thành công",
      message: "Hãy kiểm tra",
      type: "success",
      insert: "top",
      container: "top-right",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 5000,
        onScreen: true,
      },
    });
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
          <Link to="/admin/cau-thu/add">
            <button className="add">
              <i class="bx bx-plus"></i>
              <p>Thêm</p>
            </button>
          </Link>
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
              infoPlayer.slice(100).map((e) => (
                // console.log('clb=>>>>>>>>>'+e.clb) &&
                <>
                  <tr>
                    <td>{index++}</td>
                    <td>
                      <div className="img">
                        <picture>
                          {/* <source
                            srcset={
                              require(`../../../assets/img/AnhCauthu/${
                                e.clb.TenCLB
                              }/${
                                e.AnhDaiDien === "Anh_HAGL_NguyenHuuT uan"
                                  ? "Anh_HAGL_VuVanThanh"
                                  : e.AnhDaiDien
                              }${".jpg" || ".png"}`) 
                              // LogoSoccer
                            }
                          /> */}

                          <img
                            src={
                              // require(`../../../assets/img/AnhCauthu/Hà Nội/Anh_HNFC_NguyenVanMinh.jpg`)
                                require(`../../../../`)
                              LogoPlayer
                            }
                            alt="not found"
                          />
                        </picture>
                      </div>

                      <p>{e.TenCT}</p>
                    </td>
                    <td>{e.clb.TenCLB}</td>
                    <td>{e.ChieuCao}</td>
                    <td>{e.LoaiCauThu}</td>

                    <td>{e.SoAo}</td>
                    <td>{e.ViTri}</td>
                    <td>
                      {cardsSorted.map((item) =>
                        item.TenCT === e.TenCT ? item.SoBanThang : " "
                      )}
                    </td>
                    <td>
                      <Link to={`/admin/cau-thu/edit/` + e.idCT}>
                        <button className="edit">Sửa</button>
                      </Link>
                    </td>
                    <td>
                      <button onClick={() => deletePlayer()} className="remove">
                        Xóa
                      </button>
                    </td>
                  </tr>
                </>
              ))
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
