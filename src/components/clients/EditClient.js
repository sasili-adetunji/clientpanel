import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import Spinner from '../layout/Spinner'


class EditClient extends Component {

    constructor(props) {
        super()

        this.firstNameInput = React.createRef();
        this.lastNameInput = React.createRef();
        this.emailInput = React.createRef();
        this.phoneInput = React.createRef();
        this.balanceInput = React.createRef();

    }




    onSubmit = (e) => {
        e.preventDefault();
        const { firestore, history, client } = this.props;
        const updatedClient = {
            firstName: this.firstNameInput.current.value,
            lastName: this.lastNameInput.current.value,
            email: this.emailInput.current.value,
            phone: this.phoneInput.current.value,
            balance: this.balanceInput.current.value === '' ? 0 : this.balanceInput.current.value
        }
        firestore.update({collection: 'clients', doc: client.id}, updatedClient).then(() => {
            history.push('/')
        })
    }

    render() {
        const {client} = this.props
        const {disabledBalanceOnEdit} = this.props.settings

        if (client ) {

            return (
                <div>
                <div className="row">
                    <div className="col-md-6">
                        <Link to="/" className="btn btn-link">
                            <i className="fas fa-arrow-circle-left">
                                Back To Dashboard
                            </i>
                        </Link>
                    </div>
                </div>
                    <div className="card">

                    <div className="card-header"> Add Client</div>
                    <div className="card-body">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label htmlFor="firstName"> First Name</label>
                            <input
                                type="text"
                                className="form-control"
                                name="firstName"
                                minLength="2"
                                required
                                defaultValue={client.firstName}
                                ref={this.firstNameInput}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastName"> Last Name</label>
                            <input
                                type="text"
                                className="form-control"
                                name="lastName"
                                minLength="2"
                                required
                                defaultValue={client.lastName}
                                ref={this.lastNameInput}

                            />
                        <div className="form-group">
                            <label htmlFor="email"> Email</label>
                            <input
                                type="email"
                                className="form-control"
                                name="email"
                                defaultValue={client.email}
                                ref={this.emailInput}

                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone"> Phone</label>
                            <input
                                type="text"
                                className="form-control"
                                name="phone"
                                minLength="10"
                                required
                                defaultValue={client.phone}
                                ref={this.phoneInput}

                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="balance"> Balance</label>
                            <input
                                type="text"
                                className="form-control"
                                name="balance"
                                defaultValue={client.balance}
                                ref={this.balanceInput}
                                disabled={disabledBalanceOnEdit}

                            />
                        </div>
                        <input type="submit" value="Edit Client" className="btn btn-block btn-primary"/>
                        </div>
                    </form>
                    </div>

                </div>
            </div>
            )
        } else {
            return (
                <Spinner />
            )
        }
    }
}

EditClient.propTypes = {
    firestore: PropTypes.object.isRequired,
    settings: PropTypes.object.isRequired
}

export default compose(
    firestoreConnect((props) => [
        {collection: 'clients', storeAs: 'client', doc: props.match.params.id}
    ]),
    connect(({ firestore: { ordered }, settings }, props) => ({
        client: ordered.client && ordered.client[0],
        settings: settings
    }))
  )(EditClient)
