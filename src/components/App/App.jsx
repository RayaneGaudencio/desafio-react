import React, { useEffect, useState }from "react";
import { Wrapper, Container } from './App.styles.js'
import AppHeader from "../AppHeader/AppHeader.jsx";
import AppContainer from "../AppContainer/AppContainer.jsx";
import LineChart from "../../shared/LineChart/LineChart.jsx";
import ShoppingList from "../ShoppingList/ShoppingList.jsx";
import productsMock from '../../mocks/products.json'

export default function App() {

    const colors = ['#c23b3b', '#DB4444', '#e95f53','#f88075']

    const [ products, setProducts ] = useState(productsMock.products)
    const [ selectedProducts, setSelectedProducts ] = useState([])

    useEffect(() => {
        const newSelectedProducts = products
        .filter(product => product.checked)
        setSelectedProducts(newSelectedProducts)
    }, [products])

    function handleToggle( id ) {
        const newProducts = products.map(product =>
            product.id === id
            ? {...product, checked: !product.checked}
            : product
        )
        setProducts(newProducts)
    }

    return <Wrapper>
        <Container>
            <AppHeader  />
            <AppContainer
                left={<ShoppingList
                    title="Produtos disponíveis"
                    products={products}
                    onToggle={handleToggle}
                    />}
                middle={<ShoppingList
                    title="Carrinho de compras"
                    products={selectedProducts}
                    onToggle={handleToggle}
                    />}
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
