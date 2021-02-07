import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GamesPage from './components/games-page';
import HomePage from './components/home-page';
import NavMain from './components/nav-main';;


function App() {
  const menuItems = [
    {
      anchor: 'Home',
      link: '/home'
    },
    {
      anchor: 'Games',
      link: '/games'
    }
  ];

  return (
    <Router>
      <div>
        <NavMain items={menuItems} />
      </div>
      <Switch>
        <Route path='/home'>
          <HomePage />
        </Route>
        <Route path='/games'>
          <GamesPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
