import React from 'react';

const Travel = () => {

  return (
    <div className='travel'>
      <div className='travel-item'>
        <img src={window.girlIphone}></img>
        <h3>Travel</h3>
        <p className='clearfix'>
          Froliq is designed to give individuals the ability to travel freely.
          It was created for people
          who may not know where they'd like to settle, but probably can't
          afford to travel without first finding a job.
          It's a catch-22 if you don't yet know where you'd like to live. With
          Froliq, simply create a profile and search for new locations worth exploring.
        </p>
      </div>
    </div>
  );

};

export default Travel;
