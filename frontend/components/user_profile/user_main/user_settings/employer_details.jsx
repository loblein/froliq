import React from 'react';
import FontAwesome from 'react-fontawesome';

class EmployerDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      business_name: this.props.employerDetail.business_name || '',
      location: this.props.employerDetail.location || '',
      background_info: this.props.employerDetail.background_info || ''
    };

    this.handleBusinessName = this.handleBusinessName.bind(this);
    this.handleLocation = this.handleLocation.bind(this);
    this.handleBusinessDetails = this.handleBusinessDetails.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleBusinessName(event) {
    const businessName = event.currentTarget.value;
    this.setState({
      business_name: businessName
    });
  };

  handleLocation(event) {
    const newLocation = event.currentTarget.value;
    this.setState({
      location: newLocation
    });
  };

  handleBusinessDetails(event) {
    const backgroundInfo = event.currentTarget.value;
    this.setState({
      background_info: backgroundInfo
    });
  };

  handleSubmit(event) {
    event.preventDefault();
    const employer_detail = this.state;
    this.refs.businessName.value = '';
    this.refs.location.value = '';
    this.refs.businessDetails.value = '';
    this.props.updateEmployerDetails({employer_detail});
  }

  render() {
    return(
      <form className='user-settings-form' onSubmit={this.handleSubmit}>
        <div className='clearfix'>
          <h3>Background Info</h3>
          <div className='form-block'>
            <div className='left'>
              <p>Tell us a bit about yourself or your company.</p>
              <p>Include a location and some background information to help prospective hires find you.</p>
            </div>
          </div>
          <div className='form-block'>
            <div className='right'>
              <label>
                Business Name
                <input type='text'
                  ref='businessName'
                  placeholder={this.state.business_name}
                  onChange={this.handleBusinessName}></input>
              </label>
            </div>
            <div className='right'>
              <label>
                Location
                <input type='text'
                  ref='location'
                  placeholder={this.state.location}
                  onChange={this.handleLocation}></input>
              </label>
            </div>
          </div>
          <div className='form-block-full'>
            <label className='full-width'>
              Business Details / Background Info
              <textarea className='full-textarea'
                ref='businessDetails'
                placeholder={this.state.background_info}
                onChange={this.handleBusinessDetails}></textarea>
            </label>
          </div>
        </div>
        <div className='update-button-container'>
          <div className='update-button'>
            <input className='update' type='submit' value='Update Background Info' />
            <FontAwesome className='fa fa-long-arrow-right update-arrow' />
          </div>
        </div>
        <ul className='errors'>

        </ul>
        <div className='clearfix'></div>
        <div className='horizontal_rule' />
      </form>
    );
  };
};

export default EmployerDetails;
