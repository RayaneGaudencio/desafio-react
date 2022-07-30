import React from "react";
import { Wrapper } from "./AppContainer.styles";

export default function AppContainer({ left, middle, right }) {

    return (
        <Wrapper>
            <section>{ left }</section>
            <section>{ middle }</section>
            <section>{ right }</section>
        </Wrapper>
    )
}
