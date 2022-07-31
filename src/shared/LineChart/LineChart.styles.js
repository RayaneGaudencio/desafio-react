import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 15px 0;

    span {
        font-size: 12px;
        color: slategray;
        margin: 4px 0px;
    }
`

export const ProgressBar = styled.div`
    height: 14px;
    border-radius: 3px;
    background-color: ${props => props.color ? props.color : 'salmon;'};
    width: ${props => props.percentage ? props.percentage : 0}%;
`
