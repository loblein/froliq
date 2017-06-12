import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import JobsReducer from './jobs_reducer';
import ViewReducer from './view_reducer';
import FilterReducer from './filter_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  jobs: JobsReducer,
  view: ViewReducer,
  filter: FilterReducer
});

export default RootReducer;
