import { connect } from 'react-redux';
import ExpanderSwitch from './expander_switch';
import { receiveShow, receiveComponent } from '../../actions/expander_actions';

const mapStateToProps = (state) => {

  return {
    visibleComponent: state.expander.component,
    expanderVisible: state.expander.show
  };
};

  const mapDispatchToProps = (dispatch) => {

  return {
    showExpander: (bool) => dispatch(receiveShow(bool)),
    setComponent: component => dispatch(receiveComponent(component))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpanderSwitch);
