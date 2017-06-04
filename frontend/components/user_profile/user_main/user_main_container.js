import { connect } from 'react-redux';
import UserMain from './user_main';

const mapStateToProps = (state) => {
  return {
    view: state.view.view
  };
};

const mapDispatchToProps = (state) => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMain);
