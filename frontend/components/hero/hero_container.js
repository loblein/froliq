import { connect } from 'react-redux';
import Hero from './hero';

const mapStateToProps = (state, ownProps) => {
  return {
    loggedIn: state.session.currentUser !== null
  };
};

const mapDispatchToProps = (dispatch) => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Hero);
