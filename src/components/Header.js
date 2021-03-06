import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CatList from '../containers/CatList';
import BreedList from '../containers/BreedList';
import FavList from '../containers/FavList';
import AddNewCat from '../containers/AddNewCat';


class Header extends React.Component {
    render() {
        return (
            <Router>
                <React.Fragment>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                        <a className="navbar-brand" href="#">Kitty Project</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <Link to="/" className="nav-link active">Cat List</Link>
                                <Link to="/breeds" className="nav-link">Breed List</Link>
                                <Link to="/favouritelist" className="nav-link">Favourite List</Link>
                                <Link to="/addcat" className="nav-link">Add New Cat</Link>
                            </div>
                        </div>
                    </nav>
                    <Route exact path="/" component={CatList} />
                    <Route path="/breeds" component={BreedList} />
                    <Route path="/favouritelist" component={FavList} />
                    <Route path="/addcat" component={AddNewCat} />
                </React.Fragment>
            </Router>
        );
    }
}

export default Header;