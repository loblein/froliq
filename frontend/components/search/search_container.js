import Search from './search';
import { connect } from 'react-redux';
import { search } from '../../actions/'

const mapStateToProps = (state) => {
  return {

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    search: location => dispatch(search(location))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
