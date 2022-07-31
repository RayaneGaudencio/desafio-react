import React from "react";
import { Wrapper, Container } from './App.styles.js'
import AppHeader from "../AppHeader/AppHeader.jsx";
import AppContainer from "../AppContainer/AppContainer.jsx";
import Checkbox from "../../shared/Checkbox/Checkbox.jsx";

export default function App() {

    return <Wrapper>
        <Container>
            <AppHeader  />
            <AppContainer
                left={<div>
                    Produtos disponíveis

                    <Checkbox
                        title="Salmão"
                        value={false}
                    />
                    <Checkbox
                        title="Frango"
                        value={true}
                    />
                </div>}
                middle={<div>
                    Lista de compras
                </div>}
                right={<div>
                    Estatísticas
                </div>}
                />
        </Container>
    </Wrapper>
}
