import React from 'react'
import { Link } from 'react-router-dom'


class Tables extends React.Component {
    

    handleClick = (id) => {
        this.props.handleClick(id)
    }

    handleResolve = (ticket) => {
        this.props.handleResolve(ticket)
    }

    render () {
        console.log('within table render', this.props.tickets)
        return (
            <div className = "container">
                 <table className = "table table-dark table-hover">
                    <thead>
                        <tr>
                            <th>code no</th>
                            <th>customer</th>
                            <th>department</th>
                            <th>employee</th>
                            <th>message</th>
                            <th>priority</th>
                            <th>action</th>
                            <th>status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.tickets.map(ticket => {
                                return <tr key= { ticket._id } >
                                        <td>{ ticket.code }</td>
                                        <td>{ ticket.customer.name }</td>
                                        <td>{ ticket.department.name }</td>
                                        <td>{ ticket.employees.map(empl => empl.name + " ") }</td>
                                        <td>{ ticket.message }</td>
                                        <td>{ ticket.priority }</td>
                                        <td><Link to ={`/tickets/${ ticket._id }`}>Show  |</Link><Link to ="/tickets" onClick = { () => {this.handleClick(ticket._id)} }> Remove</Link></td>
                                        <td><input type = 'checkbox' checked = { ticket.isResolved} onChange = {() => { this.handleResolve(ticket)}} />completed </td>
                                    </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Tables