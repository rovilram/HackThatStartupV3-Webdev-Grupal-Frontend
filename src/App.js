
import {useState, useEffect} from 'react';
import './App.css';

import {BrowserRouter as Router, Route} from 'react-router-dom';

import { HomePage } from './Pages/HomePage';
import { DetailPage } from './Pages/DetailPage';
import { InitPage } from './Pages/InitPage';
import { SignupPage } from './Pages/SignupPage';
import { TeamCreatePage } from './Pages/TeamCreatePage';
import { UserPage } from './Pages/UserPage';

import { LoggedProvider } from './context/loggedContext';
import { TeamsView } from './Pages/TeamsView';
import { UserCardsPage } from './Pages/UserCardsPage';
import { HeaderMain } from './components/Header/HeaderMain';
import { Sidebar } from './components/Sidebar/Sidebar';
import {
  useWindowWidth,
} from '@react-hook/window-size';

function App() {

  const [logged, setLogged] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const width = useWindowWidth();

  return (

    <>

     <LoggedProvider value={ {logged, setLogged} } >

          <Router>

            <Sidebar isOpen={isOpen} toggle={toggle} />
            {
              width <= 960 ? (
                <HeaderMain toggle={toggle}/>
              ) : null
            }
            
          
            <Route exact path='/' component={InitPage} />
            <Route exact path='/home' component={HomePage} />
            <Route exact path='/my_teams' component={TeamsView} />
            <Route exact path='/detail' component={DetailPage} />
            <Route exact path='/signup' component={SignupPage} />
            <Route exact path='/teampage' component={TeamCreatePage} />
            <Route exact path='/userpage' component={UserPage} />
            <Route exact path='/usercards' component={UserCardsPage} />
            
          </Router>

      </LoggedProvider>

      </>
  );

};

export default App;
