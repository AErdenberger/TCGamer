import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import LoginFormPage from './components/LoginFormPage';
import SignUpFormPage from './components/SignUpFormPage';
import Navigation from './components/Navigation';
import CardIndex from './components/CardsIndex';
import CardShow from './components/CardShowPage';
import './index.css'
import NavFilterBar from './components/NavFilterBar';
import BottomLinks from './components/BottomLinks';
import Cart from './components/Cart';
import SplashPage from './components/SplashPage';

function App() {
  return (
    <>
      <Navigation />
      <NavFilterBar />
      <Switch>
        <Route exact path="/" component={SplashPage}/>
        <Route path="/login">
          <LoginFormPage />
        </Route>
        <Route path="/signup">
          <SignUpFormPage />
        </Route>
        <Route exact path="/cards/category/:cardGameName" component={CardIndex} />
        <Route exact path="/cards" component={CardIndex} />
        <Route exact path="/cards/:cardId" component={CardShow} />
        <Route exact path="/cart" component={Cart} />
        <Redirect to="/" />
      </Switch>
      <BottomLinks />
    </>
  );
}

export default App;
