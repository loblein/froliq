import React from 'react';

const Pitch = () => {
  return (
    <div className='pitch container-fluid'>
      <div className='row'>
        <div className='col-md-2'></div>
        <div className='col-md-8'>
          <div className='text-center'>
            <span className='pitch-heading'>Froliq </span>
            <span className='pitch-sub-heading'>...and be free</span>
          </div>
        </div>
        <div className='col-md-2'></div>
      </div>
      <div className='row'>
        <div className='col-md-2'></div>
        <section className='col-md-8'>
          <img src={window.travelImg}></img>
        </section>
        <div className='col-md-2'></div>
      </div>
      <div className='row'>
        <div className='col-md-2'></div>
        <section className='col-md-8'>
          <img src={window.workImg} className='float-r'></img>
        </section>
        <div className='col-md-2'></div>
      </div>
      <div className='row'>
        <div className='col-md-2'></div>
        <section className='col-md-8'>
          <img src={window.playImg}></img>
        </section>
        <div className='col-md-2'></div>
      </div>
    </div>
  )
}

export default Pitch;
