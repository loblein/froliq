import { connect } from 'react-redux';
import NewListing from './new_listing';
import { createListing } from '../../../../actions/job_actions';
import { setCategories } from '../../../../actions/category_selector_actions';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
    listing: state.listing
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createListing: (listing) => dispatch(createListing(listing)),
    setCategories: (categorySelector) => dispatch(setCategories(categorySelector))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewListing);
