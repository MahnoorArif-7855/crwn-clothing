import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';


import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors';
import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionFetching
  })

  const CollectionOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner)
    (CollectionOverview)

  export default CollectionOverviewContainer