import { useEffect } from "react";

import Helmet from "../../components/Helmet/Helmet";
import Header from "../../containers/header/header";
import Dunors from "../../components/dunors/dunors";


const Contact =()=>{
    useEffect(() => {
      document.title = "Liên hệ";
    });
 return(
    <Helmet title="Quy Định">
    <Header title="Quy định giải đấu" />
     <div className="component">
      
     </div>
 );
}

export default Contact;