import { connect } from 'react-redux';
import BackgroundInfo from './background_info';
import { updateEmployerDetails } from '../../../../actions/employer_detail_actions';

const mapStateToProps = (state) => {
  return {
    employerDetail: (state.session.currentUser.employer_detail)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateEmployerDetails: (info) => dispatch(updateEmployerDetails(info))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BackgroundInfo);
