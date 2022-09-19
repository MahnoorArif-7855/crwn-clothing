import React from 'react';
import './App.css';

import { connect } from 'react-redux';
import { Route, Switch ,Redirect} from 'react-router-dom'
import { createStructuredSelector } from 'reselect';


import HomePage from "./pages/homepage/homepage.component"
import ShopPage from './pages/shop/shop.component';
import CheckOutPage from './pages/checkout/checkout.component';

import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import { selectCurrentUser } from './redux/user/user.selectors'
import { checkUserSession } from './redux/user/user.actions';



class App extends React.Component {
  
  unsubsubscribeFromAuth=null

  componentDidMount(){

    const { checkUserSession } = this.props
    checkUserSession();
    // this.unsubsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      
    //   if(userAuth){
    //     const userRef = await createUserProfileDocument(userAuth)
        
    //     userRef.onSnapshot(snapShot => {
    //       setCurrentUser({
    //           id: snapShot.id,
    //           ...snapShot.data()
    //         })
    //       })
    //     }
    //     setCurrentUser(userAuth)

    // })
  }
  componentWillUnmount(){
    this.unsubsubscribeFromAuth()
  }
  render(){
  return (
    <div>
      <Header />
      <Switch>
        <Route  exact path='/' component={HomePage}/>
        <Route  path='/shop' component={ShopPage}/>
        <Route exact path='/checkout' component={CheckOutPage}/>
        <Route  
        exact
        path='/Signin' 
        render={() => 
        this.props.currentUser ? 
        (<Redirect to='/'/>)
        :
         (
         <SignInAndSignUp />
         )}/>
      </Switch>
    </div>
  );
}
}
const mapStateToProps = createStructuredSelector({
  currentUser:selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})
export default connect(mapStateToProps,mapDispatchToProps)(App);
