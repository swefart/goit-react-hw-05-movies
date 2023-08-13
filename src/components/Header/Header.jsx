import { HeaderWrapper, Nav, NavList, NavItem, RouteLink } from "./Header.styled";

const Header = () => {
    return (
        <HeaderWrapper>
            <Nav>
                <NavList>
                    <NavItem>
                        <RouteLink to="/">Home</RouteLink>   
                    </NavItem>
                     <NavItem>
                        <RouteLink to="/movies">Movies</RouteLink>  
                    </NavItem>
                </NavList>
            </Nav>
        </HeaderWrapper>
    )
}

export default Header;