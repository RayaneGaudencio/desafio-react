import styled from "styled-components";

export const Wrapper = styled.main`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    padding: 24px;
    height: calc(100% - 70px);

    font-size: 20px;

    h4 {
        font-weight: 500;
        font-family: Arial, Helvetica, sans-serif;
        color: #c23b3b;
    }
`
