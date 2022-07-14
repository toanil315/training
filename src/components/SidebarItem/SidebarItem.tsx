import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { ISidebarItem } from '../Sidebar/Sidebar'

interface Props {
    sidebarItem: ISidebarItem
}

function SidebarItem({sidebarItem} : Props) {
  return (
    <NavLinkContainer>
        <NavLink to={sidebarItem.link}>
            {sidebarItem.icon}
            <span>{sidebarItem.title}</span>
        </NavLink>
    </NavLinkContainer>
  )
}

const NavLinkContainer = styled.div`
    a {
        text-decoration: none;
        display: flex;
        align-items: center;
        color: white;
        transition: all 0.2s ease-in;

        &:hover {
            color: #bab8b8;
        }

        i {
            font-size: 20px;
        }

        span {
            font-size: 22px;
            font-weight: 700;
            padding-left: 10px;
        }
    }
`

export default SidebarItem