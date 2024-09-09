import React from 'react'
import { useUser } from '../context/UserContext'

const User: React.FC = () => {
  const { user } = useUser()

  return (
    <div>
      <h2>User</h2>
      {user ? <p>Welcome, {user}!</p> : <p>Please log in</p>}
    </div>
  )
}

export default User
