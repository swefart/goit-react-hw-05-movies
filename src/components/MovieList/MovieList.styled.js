import { styled } from "styled-components";
import { Link } from "react-router-dom";


export const TrandList = styled.ul`
    
`

export const TrandItem = styled.li`
    margin-bottom: 8px;
`

export const TrandItemLink = styled(Link)`
    color: black;
    text-decoration:none;
    &:hover {
        color: pink;
    }
`