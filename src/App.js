import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'

import HomePage from "./pages/homepage/homepage.component"
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth,createUserProfileDocument } from './firebase/firebase.utils'


class App extends React.Component {
  constructor(){
    super()

    this.state={
      currentUser: null
    }
  }

  unsubsubscribeFromAuth=null

  componentDidMount(){
    this.unsubsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth)
        
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
        });
      }
        this.setState({currentUser: userAuth})

    })
  }
  componentWillUnmount(){
    this.unsubsubscribeFromAuth()
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
