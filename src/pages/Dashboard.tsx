import React from 'react'
import { useAuth } from '../context/authContext'
import withAuth from '../HOC/withAuth'

function Dashboard() {
  const {user} = useAuth()

  return (
    <div>Welcome {user?.userName}</div>
  )
}

export default withAuth(Dashboard)