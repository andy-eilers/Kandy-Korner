import React, { useEffect, useState } from "react"

export const ProductList = () => {
    const [products, updateProducts] = useState([])
    const [productTypes, setProductType] = useState("")
    const [prices, setPrice] = useState("")

    useEffect(
        () => {
            fetch("http://localhost:8088/products?_expand=productType")
            .then(res => res.json())
            .then((data) => {
                updateProducts(data)
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
            {
                products.map(
                    (product) => {
                        return <p key={`product--${product.id}`}>{product.name} is a {product.productType.name} kind of candy and costs {product.price}</p>
                    }
                )
            }
        </>
    )

}