import { useEffect, useState } from "react";

import Helmet from "../Helmet/Helmet";
import Header from "../../containers/header/header";
//ip data
// import card_team_data from '../../assets/fake-data/CardTeams';
import { LogoSoccer } from "../../assets/img";
import "./rankTeams.scss";

const RankTeam = (props) => {
  let n = 1;

  const [clb, setclb] = useState([]);
  const [rankClb, setRankClb] = useState([]);

  // const [player, setPlayer] = useState([]);

  useEffect(() => {
    getclb();
    // getPlayer();
    getRankClb();
  }, []);
  async function getRankClb() {
    let result = await fetch("http://127.0.0.1:8000/api/bxh_clb");
    result = await result.json();
    // console.log('<<<<<<<<<<<<result'+ result);
    setRankClb(result);
  }

  // get clb
  async function getclb() {
    let result = await fetch("http://127.0.0.1:8000/api/clb");
    result = await result.json();
    // console.log('<<<<<<<<<<<<result'+ result);
    setclb(result);
  }
  //get cau thu
  // async function getPlayer() {
  //   let result = await fetch("http://127.0.0.1:8000/api/cauthu");
  //   result = await result.json();
  //   setPlayer(result);

  // }

  //sort high to low
  function compare(a, b) {
    if (Number(a.Diem) > Number(b.Diem)) {
      return -1;
    }
    if (Number(a.Diem) < Number(b.Diem)) {
      return 1;
    }
    return 0;
  }
  const cardsSorted = rankClb.sort(compare);

  // console.log('>>>>>>>>>>>>>>>>clb'+ clb);
  return (
    <Helmet title="Bảng xếp hạng đội bóng">
      <Header title="Bảng xếp hạng đội bóng" />
      <div className="component rank__team" style={{ marginTop: "0" }}>
        <div className="clb-chart-container">
          <table>
            <h2 className="name-bxh">V.League</h2>
            <thead>
              <tr>
                <th className="stt" scope="col">
                  Thứ tự
                </th>
                <th className="clb-name" scope="col">
                  Câu lạc bộ
                </th>
                <th scope="col">Số trận</th>
                <th scope="col">Thắng</th>
                <th scope="col">Hòa</th>
                <th scope="col">Thua</th>
                <th className="sum-point" scope="col">
                  Tổng điểm
                </th>
              </tr>
            </thead>
            <tbody>
              {cardsSorted.map((item, index) => (
                // card_team_data.getAllCards().map((e,key) =>(
                //     e.title ===item.TenCLB&&
                <>
                  <tr key={index}>
                    <td data-label="Thứ tự">{n++}</td>
                    <td className="clb-name" data-label="Câu lạc bộ">
                      <div className="img__logo">
                        {clb.map((e, key) =>
                          e.TenCLB === item.TenCLB ? (
                            <img
                              key={key}
                              src={"http://127.0.0.1:8000/" + e.Logo}
                              alt=""
                            />
                          ) : (
                            <img key={key} src={LogoSoccer} alt="" />
                          )
                        )}
                        {item.TenCLB}
                      </div>
                    </td>
                    <td data-label="Trận">{item.SoTran}</td>
                    <td data-label="T">{item.Thang}</td>
                    <td data-label="H">{item.Hoa}</td>
                    <td data-label="B">{item.Thua}</td>
                    <td data-label="Tổng điểm">{item.Diem}</td>
                  </tr>
                </>
                // ))
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Helmet>
  );
};

export default RankTeam;
