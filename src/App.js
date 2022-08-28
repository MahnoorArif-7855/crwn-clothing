import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { Route, Switch ,Redirect} from 'react-router-dom'

import HomePage from "./pages/homepage/homepage.component"
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth,createUserProfileDocument } from './firebase/firebase.utils'
import { setCurrentUser } from "./redux/user/user.actions"


class App extends React.Component {
  constructor(){
    super()

    this.state={
      currentUser: null
    }
  }

  unsubsubscribeFromAuth=null

  componentDidMount(){
    const { setCurrentUser } = this.props
    this.unsubsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth)
        
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            })
          })
        }
        setCurrentUser(userAuth)

    })
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
const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser
})
const mapDispatchToProps= dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))

})
export default connect(
  mapStateToProps,
  mapDispatchToProps
  )
  (App);
