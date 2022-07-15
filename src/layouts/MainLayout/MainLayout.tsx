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
    padding: 40px;
    min-height: 96vh;
    background: linear-gradient(90deg, #5936B4 0%, #362A84 103.55%);
    border-radius: 60px;
    box-shadow: 0 0 5px rgba(0,0,0, 0.2);
    overflow: hidden;
`

export default MainLayout