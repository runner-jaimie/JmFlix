// App Router
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from '../components/Home';
import About from '../components/About';
import SingleMovie from '../components/SingleMovie';
import Favourites from '../components/Favourites';
import PageNotFound from '../components/PageNotFound';
import {APP_FOLDER_NAME} from '../globals/variables';

function AppRouter() {
  return (
    <Router basename={APP_FOLDER_NAME}>
      <div className="wrapper">
        <Header />
          <Switch>
            <Route path={'/'} exact><Home sort={'popular'} /></Route>
            <Route path={'/sort/popular'}><Home sort={'popular'} /></Route>
            <Route path={'/sort/top-rated'}><Home sort={'top_rated'} /></Route>
            <Route path={'/sort/now-playing'}><Home sort={'now_playing'} /></Route>
            <Route path={'/sort/upcoming'}><Home sort={'upcoming'} /></Route>
            <Route path={'/about'}><About /></Route>
            <Route path={'/single-movie/:id'}><SingleMovie /></Route>
            <Route path={'/favourites'}><Favourites /></Route>
            <Route><PageNotFound /></Route>
          </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default AppRouter;
