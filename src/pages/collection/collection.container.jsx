import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';

import WithSpinner from '../../components/with-spinner/with-spinner.component';
import {  selectIsCollectionLoaded } from '../../redux/shop/shop.selectors';
import CollectionPage from './collection.component';

const mapStateToProps = createStructuredSelector({
    isLoading: state => !selectIsCollectionLoaded(state)
  })

  const CollectionContainer = compose(
    connect(mapStateToProps),
    WithSpinner)
    (CollectionPage)

  export default CollectionContainer