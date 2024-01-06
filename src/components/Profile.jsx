/* eslint-disable no-unused-vars */
import React, {useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {user} = useContext(UserContext);
    if(!user) return <div>Please login</div>
  return (
    <div>
      <h1>Profile</h1>
        <h3>Welcome, {user.username}</h3>
    </div>
  )
}

export default Profile
