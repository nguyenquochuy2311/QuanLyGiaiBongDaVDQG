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
import MatchDetail from './matchs/matchDetails';
import MatchResult from './matchs/matchResult';
import MatchCalendar from "./matchs/matchCalendar";
import Referees from '../components/rankTables/referees';

import Regulation from "../views/regulation/regulation";
import Contact from "../views/contact/contact";
import Team from "../views/team/team";
import TeamDetail from "../views/team/clubDetail";

import Login from "../views/accounts/login";
import Register from "../views/accounts/register";

import Club from '../views/admin/club/club';
import AddClub from '../views/admin/club/addClub';
import EditClub from '../views/admin/club/editclub';

import Match from '../views/admin/match/match';
import AdminRegulation from '../views/admin/regulation/regulation';
import Player from '../views/admin/player/player';
import ResultMatch from '../views/admin/match/resultMatch';
import AdminAccount from '../views/admin/user/user';

import NotFound from "../views/";


function App() {
  return (
    <Router>
      <div className="App">
        <Nav />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route  exact path="/doi-bong">
            <Team />
          </Route>
          <Route  exact path="/doi-bong/:slug">
            <TeamDetail />
          </Route>
          <Route  exact path="/quy-dinh">
            <Regulation />
          </Route>
          <Route exact path="/giai-dau/bxh-doi-bong">
            <RankTeam />
          </Route>
         

          <Route  exact path="/giai-dau/bxh-cau-thu">
            <RankPlayer />
          </Route>
          <Route  exact path="/giai-dau/cac-tran-dau">
            <MatchCalendar />
          </Route>
          <Route  exact path="/giai-dau/ket-qua-tran-dau">
            <MatchResult />
          </Route>
          <Route  exact path="/giai-dau/ket-qua-tran-dau/:slug">
            <MatchDetail />
          </Route>

          <Route  exact path="/giai-dau/trong-tai">
            <Referees />
          </Route>
          <Route  exact path="/lien-he">
            <Contact />
          </Route>
          <Route  exact path="/dang-nhap">
            <Login/>
          </Route>
          <Route  exact path="/dang-ky">
            <Register />
          </Route>

          {/* ===admin============ */}
          <Route  exact path="/admin">
            <Club />
          </Route>
          <Route  exact path="/admin/club/add">
            <AddClub />
          </Route>
          <Route  exact path="/admin/club/edit">
            <EditClub />
          </Route>
          <Route  exact path="/admin/lich-dau">
            <Match />
          </Route>
          <Route  exact path="/admin/ket-qua-tran-dau">
            <ResultMatch />
          </Route>
          <Route  exact path="/admin/cau-thu">
            <Player />
          </Route>
          <Route  exact path="/admin/quy-dinh">
            <AdminRegulation   />
          </Route>
          <Route  exact path="/admin/tai-khoan">
            <AdminAccount   />
          </Route>
          <Route  exact path="*">
            <NotFound   />
          </Route>

        </Switch>
        <ScrollToTop />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
