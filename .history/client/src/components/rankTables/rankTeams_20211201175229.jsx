import Helmet from "../Helmet/Helmet";
import Header from "../../containers/header/header";
//ip data
import card_team_data from "../../assets/fake-data/CardTeams";

import "./rankTeams.scss";
const RankTeam = (props) => {
 const [match, setMatch] = useState([]);
    useEffect(() => {
        getMatcj();
    }, []);

    async function getMatcj() {
        let result = await fetch("http://127.0.0.1:8000/api/chotang_product");
        result = await result.json();
        setMatch(result);
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
              {card_team_data.getAllCards().map((item, index) => (
                <tr key={index}>
                  <td data-label="Thứ tự">{index + 1}</td>
                  <td className="clb-name" data-label="Câu lạc bộ">
                    <img
                      src={item.logo}
                      alt="not found"
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                        marginRight: "20px",
                      }}
                    />
                    {item.title}
                  </td>
                  <td data-label="Trận">{item.number_match}</td>
                  <td data-label="T">{item.number_win}</td>
                  <td data-label="H">{item.number_draw}</td>
                  <td data-label="B">{item.number_loss}</td>
                  <td data-label="GF">{item.gf}</td>
                  <td data-label="GA">{item.ga}</td>
                  <td data-label="T">{item.gd}</td>
                  <td data-label="Tổng điểm">{item.score}</td>
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
