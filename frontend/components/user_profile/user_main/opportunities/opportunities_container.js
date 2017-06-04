import { connect } from 'react-redux';
import Opportunities from './opportunities';

const mapStateToProps = (state) => {
  return {
    jobs: state.jobs
  };
};

const mapDispatchToProps = (dispatch) => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Opportunities);
