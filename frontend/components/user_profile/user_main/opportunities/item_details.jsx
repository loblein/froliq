import React from 'react';
import FontAwesome from 'react-fontawesome';

const ItemDetails = ({job}) => {

  return (
    <div className='item-details clearfix'>
      {job.business_name && <h4>{job.business_name}</h4>}
      <div className='employer-star-rating'>
          <FontAwesome className='fa fa-star' />
          <FontAwesome className='fa fa-star' />
          <FontAwesome className='fa fa-star' />
          <FontAwesome className='fa fa-star' />
          <FontAwesome className='fa fa-star' />
      </div>
      <br />
      {job.location && <h5>{job.location}</h5>}
      {job.background_info && <p>{job.background_info}</p>}
    </div>
  );
};

export default ItemDetails;
