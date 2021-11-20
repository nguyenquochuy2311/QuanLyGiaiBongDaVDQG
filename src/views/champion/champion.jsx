import { useEffect } from "react";
const Champion = () => {
  useEffect(() => {
  document.title = "Giải đấu";
});
  return (
    <div className="container">
      <h1>Champion</h1>
    </div>
  );
};

export default Champion;
