import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Route } from '../Sidebar/Sidebar'

interface Props {
    item: Route
}

function SidebarItem({item} : Props) {
  return (
    <SideBarItemContainer>
        <NavLink className={({ isActive }) =>
              isActive ? "active" : ""
            } to={item.path}>
            <span>
                {item.Icon}
            </span>
        </NavLink>
    </SideBarItemContainer>
  )
}

const SideBarItemContainer = styled.span`
    & > a {
        width: 40px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: rgba(255, 255, 255, 0.8);
        font-size: 20px;
        &.active {
            border-bottom: 2px solid white;
        }
    }
`

export default SidebarItem