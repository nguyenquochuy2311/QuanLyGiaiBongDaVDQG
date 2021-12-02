import { useEffect,useState } from "react";
import Helmet from "../Helmet/Helmet";
import Header from "../../containers/header/header";
//ip data
const RankPlayer = (props) => {
   const [player, setPlayer] = useState([]);
   const [infoPlayer, setInfoPlayer] = useState([]);
      useEffect(() => {
          getPlayer();
          getInfoPlayer();

      }, []);
  
      async function getPlayer() {
          let result = await fetch("http://127.0.0.1:8000/api/bxh_ct");
          result = await result.json();
          setPlayer(result);
        }

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
      <div className="component" >
        <div className="table">
          <h1 className="table__title">Bảng Xếp Hạng Cầu Thủ</h1>
          <table className="table__content">
            <tr>
              <th>STT</th>
              <th>Cầu thủ</th>
              <th>Câu lạc bộ</th>
              <th>Vị trí</th>
              <th>Số bàn đã ghi</th>
            </tr>

            {
            infoPlayer.map((e, key)=>{
              
              cardsSorted.map((item, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>
                    <div className="img">
                      <img src={item.img} alt="not found" />
                    </div>
                    <p>{item.TenCT}</p>
                  </td>
                  <td>{item.TenCLB}</td>
                  <td>{item.TenCT}</td>
                  <td>{item.SoBanThang}</td>
  
                 
  
                </tr>
              ))
            })
            }
          </table>
        </div>
      </div>
    </Helmet>
  );
};

export default RankPlayer;
