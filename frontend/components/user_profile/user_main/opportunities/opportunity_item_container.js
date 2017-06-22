import { connect } from 'react-redux';
import OpportunityItem from './opportunity_item';
import { populateFloatbox, displayFloatbox } from '../../../../actions/floatbox_actions';

const mapStateToProps = (state) => {
  return {

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    populateFloatbox: (data) => dispatch(populateFloatbox(data)),
    displayFloatbox: () => dispatch(displayFloatbox()),
    clearFloatbox: () => dispatch(clearFloatbox())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OpportunityItem);
