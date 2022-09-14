import React from 'react'

import { connect } from 'react-redux';

import { Route } from 'react-router-dom';
import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import CollectionPage from '../collection/collection.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

import { firestore,convertCollectionaSnapshotToMap } from '../../firebase/firebase.utils'
import { UpdateCollections } from './../../redux/shop/shop.actions';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview)

const CollectionPageWithSpinner = WithSpinner(CollectionPage)

 class ShopPage extends React.Component{
  state={
    loading: true
  }
  unsubscribeFromSnapshot = null

  componentDidMount() {
    const { UpdateCollections } = this.props
    const collectionRef = firestore.collection('collections');

    collectionRef.get().then(async snapshot => {
      const collectionMap = convertCollectionaSnapshotToMap(snapshot)
      UpdateCollections(collectionMap)
      this.setState({loading: false})
    });
  }

  render(){
    const { match } = this.props
    const { loading } = this.state
 return(
      <div className='shop-page'>
        <Route exact path={`${match.path}`} render= {(props) => <CollectionOverviewWithSpinner isLoading={loading} {...props}/>} />
        <Route path={`${match.path}/:collectionId`} render= {(props) => <CollectionPageWithSpinner isLoading={loading} {...props}/>}/>
      </div>
    ) 
 }
} 

const mapDispatchToMap = dispatch => ({
  UpdateCollections: collectionMap => dispatch(UpdateCollections(collectionMap))
})


export default connect(null,mapDispatchToMap)(ShopPage);