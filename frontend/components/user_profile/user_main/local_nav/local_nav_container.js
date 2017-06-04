import { connect } from 'react-redux';
import LocalNav from './local_nav';
import { fetchJobs } from '../../../../actions/job_actions';
import { renderView } from '../../../../actions/view_actions';

const mapStateToProps = (state) => {
  return {

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    populateOpportunities: (filters) => dispatch(fetchJobs(filters)),
    renderView: (view) => dispatch(renderView(view))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LocalNav);
