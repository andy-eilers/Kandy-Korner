import React, { useEffect, useState } from "react"

export const ProductList = () => {
    const [products, changeProduct] = useState([])
    const [productTypes, setProductType] = useState("")
    const [prices, setPrice] = useState("")

    useEffect(
        () => {
            fetch("http://localhost:8088/products")
            .then(res => res.json())
            .then((data) => {
                changeProduct(data)
            })
        },
        []
    )

    useEffect (
        () => {
            const justProductTypes = products.map(product => product.productType)
            setProductType(justProductTypes.join(", "))
        }, [products])

    useEffect (
        () => {
            const justPrices = products.map(product => product.price)
            setPrice(justPrices.join(", "))
        }, [products])

    return (
        <>
            <div>Product Types: { productTypes }</div>
            <div>Prices: { prices }</div>
            {
                products.map(
                    (product) => {
                        return <p key={`product--${product.id}`}>{product.name}</p>
                    }
                )
            }
        </>
    )

}