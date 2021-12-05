
class LoginPage extends React.Component<>{

    ...
 
    // Hide navigation bar in login page. Do it inside ComponentDidMount as we need to wait for navbar to render before hiding it.
    componentDidMount(){
       document.getElementById('navigation-bar')!.style.display = "none";
    }
 
    componentWillUnmount(){
       document.getElementById('navigation-bar')!.style.display = "flex";
    }
 
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