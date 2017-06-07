import React from 'react';
import BiographyContainer from './biography_container';
import AccountSettingsContainer from './account_settings_container';
import RolesContainer from './roles_container';

const UserSettings = () => {
  return (
    <div className='user-settings-form-container'>
      <AccountSettingsContainer />
      <BiographyContainer />
      <RolesContainer />
    </div>
  )
}

export default UserSettings;
