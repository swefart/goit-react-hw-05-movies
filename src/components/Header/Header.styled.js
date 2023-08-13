import { styled } from "styled-components";
import { NavLink } from "react-router-dom";

export const HeaderWrapper = styled.header`
padding-left: 20px;
    background-color: grey;
    margin-bottom: 20px;
`
export const Nav = styled.nav``

export const NavList = styled.ul`
display: flex;
gap: 20px;
font-size: 24px;
`

export const NavItem = styled.li`
padding: 10px 0;
`

export const RouteLink = styled(NavLink)`
    color: white;
    text-decoration: none;


    &.active {
        color: pink;
    }
`