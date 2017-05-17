import React from 'react';
import { Link } from 'react-router';

const Greeting = (props) => {

  const contents =
    props.currentUser === null
    ? <div className='basic-div'>
        <Link to='/signup'>Signup</Link>
        <br />
        <Link to='/login'>Login</Link>
      </div>

    : <div className='basic-div'>
        <p>Hello, {props.currentUser.username}!
        <button onClick={props.logout}>Logout</button>
        </p>
      </div>

  return (
    <div>
      { contents }
    </div>
  )
}

export default Greeting;
