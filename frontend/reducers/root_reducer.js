import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import JobsReducer from './jobs_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  jobs: JobsReducer
});

export default RootReducer;
