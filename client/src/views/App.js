import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import "../styles/_variables.scss";
import "boxicons";
//import components
import Nav from "../containers/Navigation/nav";
import Footer from '../containers/footer/footer';
import ScrollToTop from "../components/btnBackTop/btn";
//import views
import Home from "../views/home/home";
import Champion from "../views/champion/champion";
import Regulation from "../views/regulation/regulation";
import Contact from "../views/contact/contact";
import Team from "../views/team/team";



function App() {
  return (
    <Router>
      <div className="App">
        <Nav />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/doi-bong">
            <Team />
          </Route>
          <Route path="/quy-dinh">
            <Regulation />
          </Route>
          <Route path="/giai-dau">
            <Champion />
          </Route>
          <Route path="/lien-he">
            <Contact />
          </Route>
        </Switch>
        <ScrollToTop />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
