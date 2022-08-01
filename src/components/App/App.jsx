import React, { useEffect, useState }from "react";
import { Wrapper, Container } from './App.styles.js'
import AppHeader from "../AppHeader/AppHeader.jsx";
import AppContainer from "../AppContainer/AppContainer.jsx";
import LineChart from "../../shared/LineChart/LineChart.jsx";
import ShoppingList from "../ShoppingList/ShoppingList.jsx";
import productsMock from '../../mocks/products.json'
import extractPercentage from "../../extractPercentage.js";

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
                        title='Saudáveis'
                        percentage={extractPercentage(selectedProducts.length, selectedProducts
                            .filter(product => product.tags.includes('healthy'))
                            .length
                        )}
                    />
                    <LineChart
                        color={colors[1]}
                        title='Não tão saudáveis'
                        percentage={extractPercentage(selectedProducts.length, selectedProducts
                            .filter(product => product.tags.includes('junk'))
                            .length

                        )}
                    />
                    <LineChart
                        color={colors[2]}
                        title='Limpeza'
                        percentage={extractPercentage(selectedProducts.length, selectedProducts
                            .filter(product => product.tags.includes('cleaning'))
                            .length
                        )}
                    />
                    <LineChart
                        color={colors[3]}
                        title='Produtos de higiene'
                        percentage={extractPercentage(selectedProducts.length, selectedProducts
                            .filter(product => product.tags.includes('hygiene'))
                            .length
                        )}
                    />
                    <LineChart
                        color={colors[3]}
                        title='Outros'
                        percentage={extractPercentage(selectedProducts.length, selectedProducts
                            .filter(product => product.tags.includes('others'))
                            .length
                        )}
                    />
                </div>}
                />
        </Container>
    </Wrapper>
}
