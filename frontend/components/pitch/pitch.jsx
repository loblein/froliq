import React from 'react';
import { Link } from 'react-router';

const Pitch = () => {
  return (
    <div className='pitch container-fluid'>
      <div className='row'>
        <div className='col-lg-6 pitch-column'>
          <header>
            <div className='traveler-header'>
            </div>
          </header>
          <div className='super-header'><h2>Travelers</h2></div>
          <div className='pitch-item-container'>
            <div className='pitch-item clearfix'>
              <img src={window.girlIphone}></img>
              <h3>Explore</h3>
              <p>Take a road-trip through the countryside to see places you've never seen. Find freedom while meeting new people, or discover a new place to live.</p>
            </div>
            <div className='pitch-item clearfix'>
              <img src={window.makingCoffee} className='float-r'></img>
              <h3>Fund Your Travels</h3>
              <p>Find work while traveling. Whether a recent graduate or just needing a change of pace, now you can travel without the stress of draining your savings.</p>
            </div>
            <div className='pitch-item clearfix'>
              <img src={window.haveAdventure}></img>
              <h3>Have an Adventure</h3>
              <p>Choose from unique job opportunities and make new friends. Hang out with coworkers and plan your next adventure. Froliq and be free.</p>
            </div>
          </div>
        </div>

        <div className='col-lg-6 pitch-column'>
          <header>
            <div className='employer-header'>
            </div>
          </header>
          <div className='super-header'><h2>Employers</h2></div>
          <div className='pitch-item-container'>
            <div className='pitch-item clearfix'>
              <img src={window.girlLaptop}></img>
              <h3>Create</h3>
              <p>Make a free profile and customize your information to drive new prospective employees to your business.</p>
            </div>
            <div className='pitch-item clearfix'>
              <img src={window.cafeGirl} className='float-r'></img>
              <h3>Find Great People</h3>
              <p>Review profiles and find new hires from around the country. Name your rate and find help when you need it.</p>
            </div>
            <div className='pitch-item clearfix'>
              <img src={window.meeting}></img>
              <h3>Never be Understaffed</h3>
              <p>Skip the hassle of long-term hires and adapt to changing seasons. Rate and review applicants with ease.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pitch;
