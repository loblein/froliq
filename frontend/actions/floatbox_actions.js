export const POPULATE_FLOATBOX = 'RECEIVE_FLOATBOX';
export const DISPLAY_FLOATBOX = 'DISPLAY_FLOATBOX';
export const CLEAR_FLOATBOX = 'CLEAR_FLOATBOX';

export const populateFloatbox = data => {

  return {
    type: POPULATE_FLOATBOX,
    data
  };
};

export const clearFloatbox = () => {

  return {
    type: CLEAR_FLOATBOX
  };
};

export const displayFloatbox = () => {

  return {
    type: DISPLAY_FLOATBOX
  };
};
