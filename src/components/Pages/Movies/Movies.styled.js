import { styled } from "styled-components";



export const Form = styled.form`
padding-bottom:20px;
margin-bottom: 20px;

`

export const Label = styled.label`

`

export const Search = styled.input`
    width: 300px;
    height: 30px;
    margin-right: 10px;
    font-size: 16px;
    outline: none;
    border: 1px solid black;
    
    &:focus {
        border 1px solid transparent;
    }
`

export const Btn = styled.button`
    width: 70px;
    height: 34px;
    background-color: gray;
    font-size: 16px;
    font-weight: 600;
    border: 1px solid black;
    border-radius: 4px;

    &:focus {
        background-color: pink;
        color: white;
    }
`