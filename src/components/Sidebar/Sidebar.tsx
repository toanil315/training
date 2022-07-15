import React from 'react'
import styled from 'styled-components'
import SidebarItem from '../SidebarItem/SidebarItem';
import BackgroundSidebar from '../../assets/imgs/Rectangle 364.png'

export interface Route {
  id: number;
  name: string;
  path: string;
  Icon: JSX.Element
}

const routes: Route[] = [
  {
    id: 1,
    name: 'Home',
    path: '/',
    Icon: <i className="fa-solid fa-house"></i>
  },
  {
    id: 2,
    name: 'Search',
    path: '/search',
    Icon: <i className="fa-solid fa-search"></i>
  },
  {
    id: 3,
    name: 'Setting',
    path: '/a',
    Icon: <i className="fa-solid fa-gear"></i>
  },
]

function Sidebar() {
  const renderSideBarItem = () => {
    return routes.map((route, index) => {
      return <SidebarItem item={route} key={route.id} />
    })
  }

  return (
    <SidebarContainer>
      <div>
        {renderSideBarItem()}
      </div>
    </SidebarContainer>
  )
}

const SidebarContainer = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  padding: 25px;
  border-top: 1px solid rgba(255, 255, 255, 0.4);
  box-shadow: 0 -5px 10px rgba(255, 255, 255, 0.1);
  background: linear-gradient(90deg, #5936B4 1.95%, #692685 101.56%);

  & > div {
    padding: 0 60px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
  }
`

export default Sidebar