import { RECEIVE_CATEGORY_SELECTOR, RECEIVE_CATEGORY_SELECTOR_ERRORS } from '../actions/category_selector_actions';
import { merge } from 'lodash';

const _initialState = Object.freeze({
  categories: {},
  errors: []
});

const CategorySelectorReducer = (state = _initialState, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_CATEGORY_SELECTOR:
      return merge({}, _initialState, {categories: action.categorySelector});
    case RECEIVE_CATEGORY_SELECTOR_ERRORS:
      return merge({}, state, {errors: action.errors});
    default:
      return state;
  };

};

export default CategorySelectorReducer;
