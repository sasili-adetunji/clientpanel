import React from 'react'
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <Link to="client/add" className="btn btn-success btn-block">
        <i className="fas fa-plus"> New  </i>
        </Link>
    )
}

export default Sidebar;
