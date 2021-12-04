import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

import Helmet from "../../components/Helmet/Helmet";
import Header from "../../containers/header/header";
//ip data
// import card_team_data from "../../assets/fake-data/CardTeams";
import "./matchs.scss";

const MatchDetail = (props) => {
  // let n = 1;
  const [match, setMatch] = useState([]);
  const [result, setResult] = useState([]);
  const [refe, setRefe] = useState([]);
  useEffect(() => {
    getMatch();
    getRuslt();
    getRefe();
  }, []);

  //lay tran dau
  async function getMatch() {
    let result = await fetch("http://127.0.0.1:8000/api/trandau");
    result = await result.json();
    setMatch(result);
  }

  //lay kết quả
  async function getRuslt() {
    let result = await fetch("http://127.0.0.1:8000/api/ketqua");
    result = await result.json();
    setResult(result);
  }

  // lay trong tai
  async function getRefe() {
    let result = await fetch("http://127.0.0.1:8000/api/totrongtai");
    result = await result.json();
    setRefe(result);
  }

  // backdata
  let history = useHistory();
  function backData() {
    history.push("/giai-dau/ket-qua-tran-dau");
  }
  //get param
  let { id } = useParams();

  //sort high to low
  function compare(a, b) {
    if (Number(a.VongDau) < Number(b.VongDau)) {
      return -1;
    }
    if (Number(a.VongDau) > Number(b.VongDau)) {
      return 1;
    }
    return 0;
  }
  const cardsSorted = match.sort(compare);

  return (
    <Helmet title="Chi tiết trận đấu">
      <Header title="Chi tiết trận đấu " />
      <div className="component" style={{ marginTop: "0" }}>
        <div className="table">
          <div className="btn__back">
            <button onClick={backData}>
              <i class="bx bx-arrow-back"></i>
              <p>Trở lại</p>
            </button>
          </div>
          <h1 className="table__title">
            Chi tiết trận đấu {id}
            <h2>Hoàng Anh Gia Lai - Viettel</h2>{" "}
          </h1>
          <table className="table__content">
            <tr>
              <th>Ngày thi đấu</th>
              <th>Tỉ số</th>
              <th>Sân vận động</th>
              <th>Trọng tài</th>
              <th>Xử phạt</th>
              <th>Bàn thắng</th>
            </tr>

            {result.map((res) =>
              cardsSorted.map(
                (item) =>
                  res.idTD === 1 &&
                  item.idTD === 1 && (
                    <tr key={item.idKQ}>
                      <td>{item.ThoiGian}</td>
                      <td>
                        <p>{res.BTDoi1}</p>
                        <p> - </p>
                        <p>{res.BTDoi2}</p>
                      </td>
                      <td>{item.SanDau}</td>
                      <td>
                        {refe.map(
                          (e) =>
                            e.idToTT === item.idToTT && (
                              <p className="group__refe">
                                {e.to_trong_tai.TenTT}(
                                {e.to_trong_tai.ViTri === "Trọng Tài Chính"
                                  ? "TTC"
                                  : "TTB"}
                                )
                              </p>
                            )
                        )}
                      </td>

                      <td>
                      {res.BanThang.map(
                          <div className="info__details">
                            <p>Tên CT: </p>
                            <p>Loại thẻ: Vàng </p>
                            <p>Thời điểm: 73 </p>

                          </div>
                      )}
                      </td>
                      <td>{
                         <div className="info__details">
                         <p>Tên cầu thủ: Nguyễn Văn Toàn </p>
                         <p>Loại bàn thắng: A </p>
                         <p>Thời điểm: 17 </p> <hr/>
                         <p>Tên cầu thủ: Nguyễn Công Phượng </p>
                         <p>Loại bàn thắng: C </p>
                         <p>Thời điểm: 79 </p>
                       </div>
                        }</td>
                    </tr>
                  )
              )
            )}
          </table>
        </div>
      </div>
    </Helmet>
  );
};

export default MatchDetail;
