import { useEffect, useState } from "react";
import { useHistory, Link } from "react-router-dom";

import Helmet from "../../components/Helmet/Helmet";
import Header from "../../containers/header/header";
//ip data
import card_team_data from "../../assets/fake-data/CardTeams";
import "./matchs.scss";

const MatchResult = (props) => {
  let n = 1;
  const [match, setMatch] = useState([]);
  const [result, setResult] = useState([]);
  const [refe, setRefe] = useState([]);
  const [clb, setClb] = useState([]);



  useEffect(() => {
    getMatch();
    getRuslt();
    getRefe();
    getCLB();
  }, []);


   // get clb

   async function getCLB() {
    let result = await fetch("http://127.0.0.1:8000/api/clb");
    result = await result.json();
    setClb(result);
  }

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
    history.push("/");
  }

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
    <Helmet title="Kết quả trận đấu">
      <Header title="kết quả trận đấu" />
      <div className="component admin">
        <div className="table">
          <div className="btn__back">
            <button onClick={backData}>
              <i class="bx bx-arrow-back"></i>
              <p>Trở lại</p>
            </button>
          </div>
          <h1 className="table__title">Kết quả trận đấu</h1>
          <table className="table__content">
            <tr>
              <th>STT</th>
              <th>Ngày thi đấu</th>
              <th>Các đội thi đấu</th>
              <th>Sân vận động</th>
              <th>Trọng tài</th>
              {/* <th>Trọng tài</th> */}
              <th>Tỉ số</th>
              <th>Chi tiết</th>
              

            </tr>
            {
            result.map(res =>(
              cardsSorted.map((item) =>res.idTD===item.idTD&& (
                <tr key={item.idKQ}>
                  <td>{n++}</td>
                  <td>{item.ThoiGian}</td>
                  <td className="team__match team__logo">
                    <div className="img_clb">
                    {clb.map((element) =>
                        element.TenCLB === item.TenDoi1 ? (
                          <img
                            className="img logo"
                            src={"http://127.0.0.1:8000/" + element.Logo}
                            alt="not found"
                          />
                        ) : (
                          ""
                        )
                      )}
                      <p>{item.TenDoi1}</p>
                    </div>
                    <p class="sologan">VS</p>
                    <div className="img_clb">
                    {clb.map((element) =>
                        element.TenCLB === item.TenDoi2 ? (
                          <img
                            className="img logo"
                            src={"http://127.0.0.1:8000/" + element.Logo}
                            alt="not found"
                          />
                        ) : (
                          ""
                        )
                      )}
                      <p>{item.TenDoi2}</p>
                    </div>
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
                    <p>{res.BTDoi1}</p>
                    <p> - </p>
                    <p>{res.BTDoi2}</p>
                  </td>
                 
                  <td>
                    <Link to={`/giai-dau/ket-qua-tran-dau/${item.idTD}`}>
                      <i class="bx bx-right-arrow-alt bx-fade-right"></i>
                    </Link>
                  </td>
                </tr>
              ))
            ))
            
            }
          </table>
        </div>
      </div>
    </Helmet>
  );
};

export default MatchResult;
