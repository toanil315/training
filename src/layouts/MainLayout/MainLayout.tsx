import React from 'react'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import Header from '../../components/Header/Header'
import Sidebar from '../../components/Sidebar/Sidebar'

function MainLayout() {
  return (
    <MainLayoutContainer>
        <Header />
        <ContentContainer>
            <div>
                <Sidebar />
            </div>
            <div className='content'>
                <Outlet />
            </div>
        </ContentContainer>
    </MainLayoutContainer>
  )
}

const MainLayoutContainer = styled.div`
    background-color: #1c1c1c;
    min-height: 100vh;
`

const ContentContainer = styled.main`
    max-width: 1200px;
    margin: 50px auto 0;
    padding: 0 15px;

    display: flex;
    justify-content: space-between;

    & > div {
        &:first-child {
            width: 20%;
        }
        &.content {
            width: calc(80% - 30px);
        }
    }
`

export default MainLayout