import { connect } from 'react-redux';
import Opportunities from './opportunities';

const mapStateToProps = (state) => {
  return {
    jobs: state.jobs,
    filter: state.filter
  };
};

const mapDispatchToProps = (dispatch) => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Opportunities);
