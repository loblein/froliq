import { connect } from 'react-redux';
import Opportunities from './opportunities';
import { clearFloatbox } from '../../../../actions/floatbox_actions';

const mapStateToProps = (state) => {
  return {
    jobs: state.jobs,
    filter: state.filter,
    floatbox: state.floatbox
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    clearFloatbox: () => dispatch(clearFloatbox())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Opportunities);
