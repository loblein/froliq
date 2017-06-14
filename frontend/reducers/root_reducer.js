import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import JobsReducer from './jobs_reducer';
import ViewReducer from './view_reducer';
import FilterReducer from './filter_reducer';
import ListingReducer from './listing_reducer';
import CategorySelectorReducer from './category_selector_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  jobs: JobsReducer,
  view: ViewReducer,
  filter: FilterReducer,
  listing: ListingReducer,
  categorySelector: CategorySelectorReducer
});

export default RootReducer;
