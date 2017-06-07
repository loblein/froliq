import { connect } from 'react-redux';
import Biography from './biography';
import { updateBio } from '../../../../actions/user_actions';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
    biography: state.session.currentUser.biography
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateBio: (bio) => dispatch(updateBio(bio))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Biography);
