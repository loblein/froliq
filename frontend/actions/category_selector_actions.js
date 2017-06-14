import * as APIUtil from '../util/category_selector_api_util';

export const RECEIVE_CATEGORY_SELECTOR = 'RECEIVE_CATEGORY_SELECTOR';
export const RECEIVE_CATEGORY_SELECTOR_ERRORS = 'RECEIVE_CATEGORY_SELECTOR_ERRORS';

export const setCategories = categorySelector => dispatch => {

  return APIUtil.setCategories(categorySelector)
    .then(categorySelector => dispatch(receiveCategorySelector(categorySelector)),
      error => dispatch(receiveCategorySelectorErrors(error.responseJSON)))
};

export const receiveCategorySelector = categorySelector => {

  return {
    type: RECEIVE_CATEGORY_SELECTOR,
    categorySelector
  };
};

export const receiveCategorySelectorErrors = errors => {

  return {
    type: RECEIVE_CATEGORY_SELECTOR_ERRORS,
    errors
  };
};
