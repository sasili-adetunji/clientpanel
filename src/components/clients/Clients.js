import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class Clients extends Component {

    render() {
        const clients = [
            {
                id: '11111',
                firstName: 'Sasil',
                lastName: 'Asde',
                email: 'sasil@gmail.com',
                phone: '12345',
                balance: '20'

            },
            {
                id: '222222',
                firstName: 'Ajibola',
                lastName: 'Adeola',
                email: 'adeola@gmail.com',
                phone: '3212342',
                balance: '60'

            }
        ]

        if (clients) {
            return (
                <div className="row">
                    <div className="col-md-6">
                        <h2>
                            {' '}
                            <i className="fas fa-users" /> Clients {' '}

                        </h2>
                    </div>
                    <div className="col-md-6">
                    </div>
                    <table className="table table-sttriped">
                        <thead className="thead-inverse">
                            <tr>
                                <th> Name </th>
                                <th> Email </th>
                                <th> Balance </th>
                                <th>  </th>
                            </tr>
                        </thead>
                        <tbody>
                            { clients.map(client => (
                                <tr key={client.id}>
                                    <td> {client.firstName} {client.lastName}</td>
                                    <td> {client.email} </td>
                                    <td> ${parseFloat(client.balance).toFixed(2)} </td>
                                    <td>
                                        <Link to={`/client/${client.id}`} className="btn btn-sm btn-secondary" >
                                        <i className="fas fa-arrow-circle-right"> Details </i>
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )
        } else {
            return (
                <h1> Loading.....</h1>
            )
        }
    }
}

export default Clients;
