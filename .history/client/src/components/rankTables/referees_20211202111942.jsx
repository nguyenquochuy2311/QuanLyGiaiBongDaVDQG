import { useEffect,useState } from "react";
// ip component
import Helmet from "../Helmet/Helmet";
import Header  from "../../containers/header/header";
//ip data
import card_referees_data from "../../assets/fake-data/CardReferees";

//css 
import './referees.scss';
const Referees = (props) => {

  
  const [refe, setRefe] = useState([]);
  useEffect(() => {
    getRefe();
  }, []);

  async function getRefe() {
    let result = await fetch("http://127.0.0.1:8000/api/totrongtai");
    result = await result.json();
    setRefe(result);
  }

  return (
    <Helmet title="Trọng tài">
        <Header title="Trọng tài"/>
      <div className="component container">
        <section className="referee">
          <div className="box-container">
              {card_referees_data.getAllCards().map((item,index)=>(
            <div key={index} className="box">
              <div className="image">
                <img src={item.img} alt="not found" />
              </div>
              <div className="content">
                <div className="icons">
                   Trọng Tài
                </div>
                <h3>{item.title}</h3>
                <p>
                 {item.description}
                </p>
                <a href="#" className="btn">
                  xem thêm
                </a>
              </div>
            </div>
              ))}
          </div>
        </section>
      </div>
    </Helmet>
  );
};

export default Referees;
