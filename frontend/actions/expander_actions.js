export const RECEIVE_SHOW = 'RECEIVE_SHOW';
export const RECEIVE_COMPONENT = 'RECEIVE_COMPONENT';

export const receiveShow = show => {

  return {
    type: RECEIVE_SHOW,
    show
  };
};

export const receiveComponent = component => {

  return {
    type: RECEIVE_COMPONENT,
    component
  };
};
