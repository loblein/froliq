export const RENDER_VIEW = 'RENDER_VIEW';

export const renderView = view => {
  return {
    type: RENDER_VIEW,
    view
  };
};
