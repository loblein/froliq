import { connect } from 'react-redux';
import Hero from './hero';
import { receiveShow, receiveComponent } from '../../actions/expander_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    loggedIn: state.session.currentUser !== null,
    visibleComponent: state.expander.component,
    expanderVisible: state.expander.show
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    showExpander: (bool) => dispatch(receiveShow(bool)),
    setComponent: component => dispatch(receiveComponent(component))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Hero);
