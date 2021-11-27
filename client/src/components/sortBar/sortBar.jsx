
import './sortBar.scss';

const SortBar = (props) => {
  return (
    <div className="sortbar container" >
      <div className="row" style={{  flex: '1'}}>
          
        {props.children}
  
        <div className="col col-xl-2" >
          <div className="sortbar__category sortbar__category-reset">
              <i className="bx bx-refresh"></i>
              <p>Cập nhật lại</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SortBar;
