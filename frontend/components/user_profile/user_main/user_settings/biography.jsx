import React from 'react';

class Biography extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      home_town: this.props.biography.home_town || '',
      personal_info: this.props.biography.personal_info || ''
    };

    this.handleHomeTown = this.handleHomeTown.bind(this);
    this.handlePersonalInfo = this.handlePersonalInfo.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleHomeTown(event) {
    const town = event.currentTarget.value;
    this.setState({
      home_town: town
    });
  };

  handlePersonalInfo(event) {
    const info = event.currentTarget.value;
    this.setState({
      personal_info: info
    });
  };

  handleSubmit(event) {
    event.preventDefault();
    const biography = this.state;
    this.refs.homeTown.value = '';
    this.refs.personalInfo.value = '';
    this.props.updateBio({biography});
  }

  render() {
    return (
      <form className='user-settings-form' onSubmit={this.handleSubmit}>
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
                <input type='text' ref='homeTown' placeholder={this.state.home_town} onChange={this.handleHomeTown}></input>
              </label>
            </div>
          </div>
          <div className='form-block-full'>
            <label className='biography'>
              Biography
              <textarea className='bio-full' ref='personalInfo' placeholder={this.state.personal_info} onChange={this.handlePersonalInfo}></textarea>
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
