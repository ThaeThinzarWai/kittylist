import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Header extends React.Component {

    render() {
        return (
            <Router>
                <ul className="nav">
                    <li className="nav-item">
                        <Link to="/" className="nav-link active">Cat List</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/breeds" className="nav-link">Breed List</Link>
                    </li>
                </ul>
            </Router>
        );
    }
}

export default Header;