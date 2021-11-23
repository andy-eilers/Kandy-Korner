import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"

export const EmployeeList = () => {
    const [employees, changeEmployee] = useState([])

    const history = useHistory()

    useEffect(
        () => {
            fetch("http://localhost:8088/employees")
            .then(res => res.json())
            .then((data) => {
                changeEmployee(data)
            })
        },
        []
    )

    return (
        <>
            <div>
                <button onClick={() => history.push("/employees/hire")}>Hire Employees</button>
            </div>
            {
                employees.map(
                    (employee) => {
                        return <p key={`employee--${employee.id}`}>{employee.name}</p>
                    }
                )
            }
        </>
    )
}