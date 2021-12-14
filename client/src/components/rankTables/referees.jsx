import { useEffect,useState } from "react";
// ip component
import Helmet from "../Helmet/Helmet";
import Header  from "../../containers/header/header";
//ip data
import card_referees_data from "../../assets/fake-data/CardReferees";

//css 
import './referees.scss';
const Referees = (props) => {
  const [infoUser, setInfoUser] = useState("");
  // const [refe, setRefe] = useState([]);
  const user__id = document.getElementById("UID");

  // const [refe, setRefe] = useState([]);
  // useEffect(() => {
  //   getRefe();
  // }, []);

  // async function getRefe() {
  //   let result = await fetch("http://127.0.0.1:8000/api/trongtai");
  //   result = await result.json();
  //   setRefe(result);
  // }
  // get info user theo id
  async function getInfoUser(id) {
    let result = card_referees_data.getAllCards().find(e=>e.id===id);
      
console.log(result);
    // result = await result.json();
    setInfoUser(result);
  }
  return (
    <Helmet title="Trọng tài">
      <Header title="Trọng tài" />
      <div className="component container">
        <section className="referee">
          <div className="box-container">
            {card_referees_data.getAllCards().map((item, index) => (
              <div key={index} className="box">
                <div className="image">
                  <img src={item.img} alt="not found" />
                </div>
                <div className="content">
                  <div className="icons">Trọng Tài</div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <button
                    style={{ margin: "0" }}
                    id="id__user"
                    type="button"
                    className="btn btn-primary btn"
                    data-toggle="modal"
                    data-target="#exampleModal"
                    onClick={() => {
                      getInfoUser(item.id);
                    }}
                  >
                    xem thêm
                  </button>
                </div>
              </div>
            ))}
            <div
              className="modal fade"
              id="exampleModal"
              tabindex="-1"
              role="dialog"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">
                      Thông tin trọng tài:
                    </h5>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <div className="modal-body-item">
                      <label htmlFor="">ID trọng tài:</label>
                      <input
                        disabled={true}
                        id="UID"
                        type="text"
                        defaultValue={infoUser.id}
                      />
                    </div>
                    <div className="modal-body-item">
                      <label htmlFor="">Tên trọng tài:</label>
                      <input
                        disabled={true}
                        id="username"
                        type="text"
                        defaultValue={infoUser.title}
                      />
                    </div>
                    <div className="modal-body-item">
                      <label htmlFor="">Ngày sinh:</label>
                      <input
                        disabled={true}
                        id="date"
                        type="text"
                        defaultValue={infoUser.date}
                      />
                    </div>
                    <div className="modal-body-item">
                      <label htmlFor="">Vị trí:</label>
                      <input
                        disabled={true}
                        id="role"
                        type="text"
                        defaultValue={infoUser.vitri}
                      />
                    </div>
                    <div className="modal-body-item">
                      <label htmlFor="">Thông tin thêm:</label>
                      <textarea
                        cols='30'
                        rows = '5'
                        disabled={true}
                        id="info"
                        type="text"
                        defaultValue={infoUser.description}
                      />
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-dismiss="modal"
                      onClick={() => console.log(user__id.value)}
                    >
                      Cancel
                    </button>
                    {/* <button
                      onClick={() => editUser(user__id.value)}
                      type="button"
                      className="btn btn-primary"
                    >
                      Save changes
                    </button> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Helmet>
  );
};

export default Referees;
