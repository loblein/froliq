import { connect } from 'react-redux';
import Expander from './expander';

const mapStateToProps = (state) => {
  return {
    show: state.expander.show,
    component: state.expander.component
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Expander);
