import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import "../styles/_variables.scss";
import "boxicons";
//import components
import Nav from "../containers/Navigation/nav";
import Footer from "../containers/footer/footer";
import ScrollToTop from "../components/btnBackTop/btn";
//import views
import Home from "../views/home/home";
import RankTeam from '../components/rankTables/rankTeams';
import RankPlayer from '../components/rankTables/rankPlayers';
import MatchDetails from './matchs/matchDetails';
import Referees from '../components/rankTables/referees';

import Regulation from "../views/regulation/regulation";
import Contact from "../views/contact/contact";
import Team from "../views/team/team";
import Login from "../views/accounts/login";
import Register from "../views/accounts/register";

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
          <Route path="/giai-dau/bxh-doi-bong">
            <RankTeam />
          </Route>
          <Route path="/giai-dau/bxh-cau-thu">
            <RankPlayer />
          </Route>
          <Route path="/giai-dau/chi-tiet-tran-dau">
            <MatchCa />
          </Route>
          <Route path="/giai-dau/chi-tiet-tran-dau">
            <MatchDetails />
          </Route>



          <Route path="/giai-dau/trong-tai">
            <Referees />
          </Route>
          <Route path="/lien-he">
            <Contact />
          </Route>
          <Route path="/dang-nhap">
            <Login/>
          </Route>
          <Route path="/dang-ky">
            <Register />
          </Route>
        </Switch>
        <ScrollToTop />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
