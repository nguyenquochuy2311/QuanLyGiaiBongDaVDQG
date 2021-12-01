import { useEffect,useState } from "react";

import Helmet from "../Helmet/Helmet";
import Header from "../../containers/header/header";
//ip data

import "./rankTeams.scss";
const RankTeam = (props) => {
 const [match, setMatch] = useState([]);
    useEffect(() => {
        getMatch();
    }, []);

    async function getMatch() {
        let result = await fetch("http://127.0.0.1:8000/api/bxh_clb");
        result = await result.json();
        setMatch(result);
        console.log('dnasdj>++++');
      }
  return (
    <Helmet title="Bảng xếp hạng đội bóng">
      <Header title="Bảng xếp hạng đội bóng" />
      <div className="component rank__team" style={{marginTop:'0'}}>
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
              {match.BxhCLB.map((item, index) => (
                <tr key={index}>
                  <td data-label="Thứ tự">{index + 1}</td>
                  <td className="clb-name" data-label="Câu lạc bộ">
                    {item.TenCLB}
                  </td>
                  <td data-label="Trận">{item.SoTran}</td>
                  <td data-label="T">{item.Thang}</td>
                  <td data-label="H">{item.Hoa}</td>
                  <td data-label="B">{item.Thua}</td>
                  <td data-label="Tổng điểm">{item.Diem}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Helmet>
  );
};

export default RankTeam;
