import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Search extends React.Component {

    render() {
        return (
            <Router>
                <div class="float-right">
                    <form className="form-inline">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </Router>
        );
    }
}

export default Search;