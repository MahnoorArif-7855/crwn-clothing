import './App.css';
import { Route, Switch } from 'react-router-dom'

import HomePage from "./pages/homepage/homepage.component"
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth } from './firebase/firebase.utils'
import React from 'react';

class App extends React.Component {
  constructor(){
    super()

    this.state={
      currentUser: null
    }
  }

  unsubsubscribeFromAuth=null

  componentDidMount(){
    this.unsubsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user})

      console.log(user)
    })
  }
  render(){
  return (
    <div>
      <Header currentUser={this.state.currentUser}/>
      <Switch>
        <Route  exact path='/' component={HomePage}/>
        <Route  path='/shop' component={ShopPage}/>
        <Route  path='/Signin' component={SignInAndSignUp}/>
      </Switch>
    </div>
  );
}
}

export default App;
