import React from 'react';
import { connect } from 'react-redux';

class BreedList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            breeds : []
        }
    }
    componentDidMount() {
        fetch("https://api.thecatapi.com/v1/breeds?limit=10&page=0", {
            headers: new Headers({
                'Content-Type': 'application/json',
                'x-api-key': 'ae5ff833-92da-43c8-bb7e-6876ee19398a'
            })
        })
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        breeds : result
                    });
                }
            )
    }
    clickSearch(e) {

    }
    render() {
        const breeds = this.state.breeds;
        return (
            <div className="col-md">
                <div className="float-right">
                    <form className="form-inline">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search Breeds"
                               aria-label="Search"/>
                        <button className="btn btn-outline-success my-2 my-sm-0"id="searchBreeds" type="submit" onClick={this.clickSearch}>Search</button>
                    </form>
                </div>
                <div>
                    <h6>Breed List</h6>
                    {breeds.map(function(breed, i){
                        return <div className={"row"} key={i}>
                            {[
                                <a href="#" className="badge badge-light" key={i}>{breed.name}</a>,
                                <br/>
                            ]}
                        </div>;
                    })}
                </div>
            </div>
        );
    };
}
export default BreedList;
