import { useEffect } from "react";
const Team = () => {
  useEffect(() => {
    document.title = "Đội bóng";
  });
  return (
    <div className="container">
      <h1>Team</h1>
    </div>
  );
};

export default Team;
