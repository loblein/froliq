import React from 'react';
import BiographyContainer from './biography_container';
import AccountSettingsContainer from './account_settings_container';
import RolesContainer from './roles_container';
import BackgroundInfoContainer from './background_info_container';

class UserSettings extends React.Component {
  constructor() {
    super();

  };

  render() {
    var view2, view3;
    if (this.props.currentUser.employer === true) {
      view2 = <BackgroundInfoContainer />;
      view3 = <RolesContainer />;
    } else {
      view2 = <BiographyContainer />;
      view3 = <RolesContainer />;
    }

    return (
      <div className='user-settings-form-container'>
        <AccountSettingsContainer />
        { view2 }
        { view3 }
      </div>
    )
  };

}

export default UserSettings;
