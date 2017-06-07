import React from 'react';

class Biography extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (
      <form className='user-settings-form'>
        <div className='clearfix'>

          <div className='form-block'>
            <div className='left'>
              <p className='note'>Include your home town and a brief bio (one or two paragraphs) to improve the look of your profile.</p>
            </div>
          </div>
          <div className='form-block'>
            <div className='right'>
              <label>
                Home Town
                <input type='text'></input>
              </label>
            </div>
          </div>
          <div className='form-block-full'>
            <label className='biography'>
              Biography
              <textarea className='bio-full'></textarea>
            </label>
          </div>

        </div>
        <ul className='errors'>
          
        </ul>
        <div className='update-button-container'>
          <input type='submit' className='update-button' value='Update Personal Info'/>
        </div>
      </form>
    )
  }
}

export default Biography;
