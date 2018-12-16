import React from 'react';
import { connect } from 'react-redux';

class BreedList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            breeds : [],
            breedslist:[],
            id :""
        }
        this.clickSearch = this.clickSearch.bind(this);
        this.selectedBreed = this.selectedBreed.bind(this);
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
        e.preventDefault();
        const id =this.state.id;
        let url = "https://api.thecatapi.com/v1/breeds/" + id;
        fetch(url, {
            headers: new Headers({
                'Content-Type': 'application/json',
                'x-api-key': 'ae5ff833-92da-43c8-bb7e-6876ee19398a'
            })
        })
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        breedslist : result
                    });
                }
            )
    }
    selectedBreed(e) {
        const breed_id =e.target.value;
        this.setState({
            id : breed_id
        })
    }
    render() {
        const breeds = this.state.breeds;
        const list = this.state.breedslist;
        return (
            <div className="col-md">
                <div className="form-group float-right">
                    <form className="form-inline">
                        <select name="breedList" onChange={this.selectedBreed}>
                            {breeds.map(breed => (
                                <option value={breed.id}>{breed.name}</option>
                            ))}
                        </select>
                        <button className="btn btn-sm  my-2 my-sm-0"id="searchBreeds" type="submit" onClick={this.clickSearch}>Search</button>
                    </form>
                </div>
                 <div className="card bg-light mb-3" style={{"width": "30em"}}>
                    <div className="card-body">
                        <h5 className="card-title"> Breed List Detail</h5>
                        <h5 className="card-title">{list.name}</h5>
                        <p className="card-text">{list.description}</p>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">{list.life_span}</li>
                            <li className="list-group-item">{list.temperament}</li>
                            <li className="list-group-item">{list.wikipedia_url}</li>
                        </ul>
                    </div>
                 </div>
            </div>
        );
    };
}
export default BreedList;
{/*<h6 className="card-subtitle mb-2 text-muted">{list.name}</h6>*/}
