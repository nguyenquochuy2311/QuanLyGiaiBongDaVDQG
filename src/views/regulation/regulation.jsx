import {useEffect} from 'react'
const Regulation = () => {
  useEffect(() => {
    document.title = "Quy định";
  });
  return (
    <div className="component">
      <h1>Regulation</h1>
    </div>
  );
};

export default Regulation;
