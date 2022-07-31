import styled from "styled-components";

export const Wrapper = styled.div`
    height: 32px;

    display: flex;
    align-items: center;
    gap: 7px;

    font-size: 17px;
`

export const Indicator = styled.div`
    height: 14px;
    width: 14px;

    border-radius: 7px;

    ${props => props.value ? 'background-color: salmon;' : ''}
    border: 2px solid salmon;

    cursor: pointer;
`
