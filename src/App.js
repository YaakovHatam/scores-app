import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import GamesPage from './components/games-page';
import DataPage from './components/data-page';
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
    },
    {
      anchor: 'Data',
      link: '/data'
    }
  ];

  return (
    <Router>
      <Container>
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
          <Route path='/data'>
            <DataPage />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
