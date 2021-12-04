import ReactPaginate from "react-paginate";

import { useEffect, useState } from "react";
import Helmet from "../Helmet/Helmet";
import Header from "../../containers/header/header";

//ip data
const RankPlayer = (props) => {
  const [player, setPlayer] = useState([]);
  const [infoPlayer, setInfoPlayer] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [pageCount, setpageCount] = useState(0);
  const [pageNumber, setPageNumber] = useState(0);

  let index = 1;
  let itemPerPage = 8;

  const pageVisited = pageNumber * itemPerPage;

  useEffect(() => {
    try {
      getPlayer();
      getInfoPlayer();
    } catch (e) {
      setLoading(false);
      alert(e.message);
    }
  }, []);

  async function getPlayer() {
    let result = await fetch("http://127.0.0.1:8000/api/bxh_ct");
    result = await result.json();
    setPlayer(result);
  }

  // pagination
  const handlePageClick = async (data) => {
    // console.log(data.selected);
    let curentPage = data.selected + 1;
    const cauthu = await getPlayer(curentPage);
    setPlayer(cauthu);
  };

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
    <Helmet title="Bảng xếp hạng cầu thủ">
      <Header title="Bảng xếp hạng cầu thủ" />
      <div className="component">
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

            {
              infoPlayer.map(
                (e) =>
                infoPlayer.map((item) =>
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
                                }/${e.AnhDaiDien}${".jpg" || ".png"}`).default ?   require(`../../assets/img/AnhCauthu/${
                                  item.TenCLB
                                }/${e.AnhDaiDien}${".jpg" || ".png"}`).default  : ''
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

            {isLoading === true && (
              <tr>
                <td colSpan="5" style={{ textAlign: "center" }}>
                  {" "}
                  Loading...
                </td>
              </tr>
            )}
            {/* {isError === true
                        && <tr >
                            <td colSpan='5' style={{ 'textAlign': 'center' }}>  Something wrong... </td>
                        </tr>
                    } */}
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

export default RankPlayer;
