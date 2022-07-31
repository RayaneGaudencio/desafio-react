import React from "react";
import { Wrapper, Container } from './App.styles.js'
import AppHeader from "../AppHeader/AppHeader.jsx";
import AppContainer from "../AppContainer/AppContainer.jsx";
import Checkbox from "../../shared/Checkbox/Checkbox.jsx";
import LineChart from "../../shared/LineChart/LineChart.jsx";

export default function App() {

    const colors = ['#c23b3b', '#DB4444', '#e95f53','#f88075']

    return <Wrapper>
        <Container>
            <AppHeader  />
            <AppContainer
                left={<div>
                    <h4>Produtos disponíveis</h4>

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
                    <h4>Lista de compras</h4>
                </div>}
                right={<div>
                    <h4>Estatísticas</h4>

                    <LineChart
                        color={colors[0]}
                        title='Alimentos'
                        percentage={80}
                    />
                    <LineChart
                        color={colors[1]}
                        title='Produtos de limpeza'
                        percentage={30}
                    />
                    <LineChart
                        color={colors[2]}
                        title='Frutas/Vegetais'
                        percentage={10}
                    />
                    <LineChart
                        color={colors[3]}
                        title='Outros'
                        percentage={30}
                    />
                </div>}
                />
        </Container>
    </Wrapper>
}
