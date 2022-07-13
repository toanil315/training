import React, { FC, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/authContext'

function withAuth(Component: FC) {
    const Auth = (props: any) => {
        const {user} = useAuth()
        const navigate = useNavigate()

        useEffect(() => {
            if(!user) {
                navigate("/login")
            }
        }, [])

        return <Component {...props} />
    }

  return Auth
}

export default withAuth