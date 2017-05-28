import React from 'react';
import { Link } from 'react-router';

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
        <section className='col-md-8 clearfix'>
          <img src={window.girlIphone}></img>
          <h3>Explore</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi</p>
        </section>
        <div className='col-md-2'></div>
      </div>
      <div className='row'>
        <div className='col-md-2'></div>
        <section className='col-md-8 clearfix'>
          <img src={window.workImg} className='float-r'></img>
          <h3>Fund Your Travels</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi</p>
        </section>
        <div className='col-md-2'></div>
      </div>
      <div className='row'>
        <div className='col-md-2'></div>
        <section className='col-md-8 clearfix'>
          <img src={window.playImg}></img>
          <h3>Have an Adventure</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi</p>
        </section>
        <div className='col-md-2'></div>
      </div>
    </div>
  )
}

export default Pitch;
