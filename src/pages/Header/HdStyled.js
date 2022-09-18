import styled from "styled-components";

export const DivHeader = styled.div`
    display: flex;
    background-color: blue;
`

export const NavItem = styled.a`
    &:hover{color:${props => props.active === true ? '#232424a7' : '#31955f'}; cursor: pointer}
    color:${props => props.active ? '#31955f' : '#232424a7'}
    `
    // color:${props => props.active === 1 ? 'white' : 'black'};