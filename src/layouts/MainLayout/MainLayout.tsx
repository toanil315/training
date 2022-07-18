import React from 'react'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import Sidebar from '../../components/Sidebar/Sidebar'

function MainLayout() {
  return (
    <MainLayoutContainer>
        <Outlet />
        <Sidebar />
    </MainLayoutContainer>
  )
}

const MainLayoutContainer = styled.div`
    position: relative;
    max-width: 400px;
    margin: 10px auto;
    max-height: 96vh;
    background: linear-gradient(90deg, #5936B4 0%, #362A84 103.55%);
    border-radius: 60px;
    box-shadow: 2px 2px 10px 5px rgba(89, 54, 180, 0.4);
    overflow: hidden;
`

export default MainLayout