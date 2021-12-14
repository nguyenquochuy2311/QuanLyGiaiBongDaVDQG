// ip data
import logo_data from "../../assets/fake-data/Dunors";

import "./dunors.scss";
const Dunors = () => {
  return (
      <div className="row">
    <div className="dunors ">
        {logo_data.getLogos(4).map((item, index) => (
          <div key={index} className="col ">
            <div className="dunors__item">
              <img className="dunors__img" src={item.img} alt="not found" />
              <p className="dunors__title">{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dunors;
