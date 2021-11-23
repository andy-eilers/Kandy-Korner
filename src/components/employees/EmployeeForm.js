import React, { useState } from "react"
import { useHistory } from "react-router-dom"

export const EmployeeForm = () => {
    const [employee, updateEmployee] = useState({
        name: "",
        location: "",
        manager: false,
        fullTime: true,
        hourlyRate: 19.75
    })

    const history = useHistory()

    const hireEmployee = (event) => {
        event.preventDefault()

        const newEmployee = {
            name: employee.name,
            location: employee.location,
            manager: employee.manager,
            fullTime: employee.fullTime,
            hourlyRate: employee.hourlyRate
        }

    const fetchOption = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newEmployee)
    }

    return fetch("http://localhost:8088/employees", fetchOption)
        .then(() => {
            history.push("/employees")
        })
    }

    return (
        <form className="employeeForm">
           <h2 className="employeeForm__title">Hire Employee</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Employee Name:</label>
                    <input
                        onChange={
                            (event) => {
                                const copy = { ...employee }
                                copy.name = event.target.value
                                updateEmployee(copy)
                            }
                        }
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Name of Employee"
                        />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="location">Employee Location:</label>
                    <input
                        onChange={
                            (event) => {
                                const copy = { ...employee }
                                copy.location = event.target.value
                                updateEmployee(copy)
                            }
                        }
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Employee Location"
                        />
                </div>
            </fieldset>
            <fieldset>
            <div className="form-group">
                    <label htmlFor="name">Manager:</label>
                    <input type="checkbox"
                        onChange={
                            (event) => {
                                const copy = { ...employee }
                                if (event.target.value === "on") {
                                    copy.manager = true                       
                                    
                                } else {
                                    copy.manager = false
                                }
                                console.log(event.target.value)
                                updateEmployee(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
            <div className="form-group">
                    <label htmlFor="name">Full Time:</label>
                    <input type="checkbox"
                        onChange={
                            (event) => {
                                const copy = { ...employee }
                                if (event.target.value === "on") {
                                    copy.fullTime = true                       
                                    
                                } else {
                                    copy.fullTime = false
                                }
                                console.log(event.target.value)
                                updateEmployee(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="hourlyRate">Hourly Rate:</label>
                    <input
                        onChange={
                            (event) => {
                                const copy = { ...employee }
                                copy.hourlyRate = event.target.value
                                updateEmployee(copy)
                            }
                        }
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="HourlyRate"
                        />
                </div>
            </fieldset>
            <button className="btn btn-primary" onClick={hireEmployee}>
                Finish Hiring
            </button> 
        </form>
    )
}