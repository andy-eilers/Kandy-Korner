import React, { useEffect, useState } from "react"
//Declaring CustomerList as a function
export const CustomerList = () => {
    // State Variable
    const [customers, setCustomers] = useState([])

    //new state variable
    const [totalCustomerMessage, updateMessage] = useState("")

    // Event Listener to track changes in state to customer array
    useEffect(        
        () => {
            console.log("Initial useEffect")
            fetch("http://localhost:8088/customers")
                .then(res => res.json())
                .then((customerArray) => {
                    setCustomers(customerArray)
                })
        },
        []
    )
    //useEffect takes two parameters
    useEffect(
        () => {
            console.log("Customer state changed")
            //hard coding initial message for single customer
            if (customers.length === 1) {
                updateMessage("You have one customer")
            }
            //interpolating message for varying amounts of customers
            else {
                updateMessage(`You have ${customers.length} customers`)
            }
        },
        [customers]
    )
    //map to list customer array
    return (
        <>
            <div>{totalCustomerMessage}</div>
            {
                customers.slice(0, 5).map(
                    (customerObject) => {
                        return <div key={`customer--${customerObject.id}`}>{customerObject.name}</div>

                    }
                )
            }
        </>
    )
}