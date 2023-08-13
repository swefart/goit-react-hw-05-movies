import { styled } from "styled-components";
import { Link } from "react-router-dom";

export const Back = styled(Link)`
display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 2px;
  padding: 2px 4px;
  margin-bottom: 10px;

  background-color: #f5f5f5;
  color: black;

  border: 1px solid black;
  border-radius: 4px;

  text-decoration: none;

  &:active {
    background-color: pink;
    color: white;
  }
`


export const MovieBox = styled.div`
display:flex;
gap: 20px;
padding: 20px 0;
`

export const Poster = styled.img`
display: block;
width: 17%;
`

export const InfoBox = styled.div`
`

export const Title = styled.h1`
    margin-bottom: 12px;
`

export const Overview = styled.h2`
    margin-bottom: 12px;   
`

export const Genres = styled.h3`
    margin-bottom: 12px;   
`

export const Description = styled.p`
    margin-bottom: 12px;   
`

export const InfoList = styled.ul``

export const InfoItem = styled.li`
margin-bottom: 10px;
`

export const InfoLink = styled(Link)`
font-size: 18px;
font-weight: 600;

text-decoration: none;
`

export const SubTitle = styled.h2`
    font-size: 16px;
    margin-bottom: 10px;
`