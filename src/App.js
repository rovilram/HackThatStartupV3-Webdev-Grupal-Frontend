
import {useState} from 'react';
import './App.css';

import {BrowserRouter as Router, Route} from 'react-router-dom';

import { HomePage } from './Pages/HomePage';
import { DetailPage } from './Pages/DetailPage';
import { InitPage } from './Pages/InitPage';
import { SignupPage } from './Pages/SignupPage';

import { LoggedProvider } from './context/loggedContext';
import { TeamsView } from './Pages/TeamsView';

function App() {

  const [logged, setLogged] = useState(false);

  return (

    <>

     <LoggedProvider value={ {logged, setLogged} } >

          <Router>
          
            <Route exact path='/' component={InitPage} />
            <Route exact path='/home' component={HomePage} />
            <Route exact path='/my_teams' component={TeamsView} />
            <Route exact path='/detail' component={DetailPage} />
            <Route exact path='/signup' component={SignupPage} />
            
          </Router>

      </LoggedProvider>

      </>
  );

};

export default App;
