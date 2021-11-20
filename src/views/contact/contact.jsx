import { useEffect } from "react";
const Contact =()=>{
    useEffect(() => {
      document.title = "Liên hệ";
    });
 return(
     <div className="container">
         <h1>Contact</h1>
     </div>
 );
}

export default Contact;