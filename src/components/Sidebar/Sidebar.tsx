import React from 'react'
import styled from 'styled-components'
import SidebarItem from '../SidebarItem/SidebarItem';

export interface ISidebarItem {
    id: number;
    link: string;
    title: string;
    icon: JSX.Element;
}

const sidebarItemList: ISidebarItem[] = [
    {
        id: 1,
        link: '/',
        title: 'Home',
        icon: <i className="fa fa-home"></i>
    }
]

function Sidebar() {
  return (
    <SidebarContainer>
        {
            sidebarItemList.map((sidebarItem, index) => {
                return <SidebarItem sidebarItem={sidebarItem} key={sidebarItem.id} />
            })
        }
    </SidebarContainer>
  )
}

const SidebarContainer = styled.nav`
    
`

export default Sidebar