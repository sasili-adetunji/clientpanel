import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link  } from "react-router-dom";
import { connect } from "react-redux";
import { setAllowRegistration, setDisableBalanceOnAdd, setDisableBalanceOnEdit } from "../../actions/settingsActions";


class Settings extends Component {

    allowRegistrationChange = () => {
        const { setAllowRegistration } = this.props
        setAllowRegistration()
    }

    disableBalanceOnAddChange = () => {
        const { setDisableBalanceOnAdd } = this.props
        setDisableBalanceOnAdd()
    }

    disabledBalanceOnEditChange = () => {
        const { setDisableBalanceOnEdit } = this.props
        setDisableBalanceOnEdit()
    }

    render() {
        const {disabledBalanceOnAdd, disabledBalanceOnEdit, allowRegistration} = this.props.settings
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
                    <div className="card-header">Edit Settings</div>
                    <div className="card-body">
                    <form>
                        <div className="form-group">
                            <label> Allow Registration </label>
                            <input
                                type="checkbox"
                                name="allowRegistration"
                                checked={!!allowRegistration}
                                onChange={this.allowRegistrationChange}
                            />
                        </div>
                        <div className="form-group">
                            <label> Disable Balance on Add </label>
                            <input
                                type="checkbox"
                                name="disabledBalanceOnAdd"
                                checked={!!disabledBalanceOnAdd}
                                onChange={this.disableBalanceOnAddChange}
                            />
                        </div>
                        <div className="form-group">
                            <label> Disable Balance on Edit </label>
                            <input
                                type="checkbox"
                                name="disabledBalanceOnEdit"
                                checked={!!disabledBalanceOnEdit}
                                onChange={this.disabledBalanceOnEditChange}
                            />
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        )
    }
}

Settings.propTypes = {
    settings: PropTypes.object.isRequired,
    setDisableBalanceOnAdd: PropTypes.func.isRequired,
    setDisableBalanceOnEdit: PropTypes.func.isRequired,
    setAllowRegistration: PropTypes.func.isRequired

}
export default connect(
    (state, props) => ({
        auth: state.firebase.auth,
        settings: state.settings
    }),
{setAllowRegistration, setDisableBalanceOnEdit, setDisableBalanceOnAdd})
(Settings);
