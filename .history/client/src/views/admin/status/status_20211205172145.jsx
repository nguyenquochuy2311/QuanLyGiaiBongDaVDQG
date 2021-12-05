
class LoginPage extends React.Component<>{

  
    render(){
       return(
           // your login/signup component here
           ...
       )
    }
 componentDidMount(){
    document.querySelector(".account-list").style.display = "none";
    document.querySelector(".log__out").style.display = "block";
document.querySelector(".adminQuanLy").style.display = "none";
  
}

componentWillUnmount(){
 document.querySelector(".account-list").style.display = "flex";
 document.querySelector(".log__out").style.display = "none";
document.querySelector(".adminQuanLy").style.display = "flex";
}