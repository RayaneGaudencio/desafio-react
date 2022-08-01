import React from "react";
import { Wrapper } from "./AppContainer.styles";

export default function AppContainer({ left, middle, right }) {

    return (
        <Wrapper>
            { left }
            { middle }
            { right }
        </Wrapper>
    )
}
