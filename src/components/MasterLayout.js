import React from 'react';
import Header from './Header';
import Search from "./Search";

class MasterLayout extends React.Component {

    render() {
        return (
            <div className="container">
                <Header />
                <Search />
            </div>
        );
    }
}

export default MasterLayout;

