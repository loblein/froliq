import React from 'react';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    const email = this.props.currentUser.email;
    return (
      <h2>
        hi, {email}
      </h2>
    )
  }
}

export default UserProfile;
