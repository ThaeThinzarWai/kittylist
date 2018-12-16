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
        fetch("https://api.thecatapi.com/v1/breeds/abys", {
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
            <div className="col-md" style={{"padding-top":"20px"}}>
                <div className="form-group">
                    <form className="form-inline">
                        <select className="border border-info btn-sm" name="breedList" value={this.state.id} onChange={this.selectedBreed}>
                            {breeds.map(breed => (
                                <option value={breed.id}>{breed.name}</option>
                            ))}
                        </select>
                        <button className="btn btn-outline-info btn-sm  my-2 my-sm-0"id="searchBreeds" type="submit" onClick={this.clickSearch}>Search</button>
                    </form>
                </div>
                 <div className="card border-info mb-3" style={{"width": "30em"}}>
                     <div className="card-header text-info"><b>Breed List:</b> {list.name}</div>
                     <div className="card-body text-info">
                         <p className="card-text"><b>{list.name}: </b><i>{list.description}</i></p>
                         <hr/>
                         <p className="card-text"><b>Life-Span: </b>{list.life_span}</p>
                         <hr/>
                         <p className="card-text"><b>Temperament: </b>{list.temperament}</p>
                         <hr/>
                         <p className="card-text"><b>Wikipedia_url: </b>{list.wikipedia_url}</p>
                     </div>
                 </div>
                <hr style={{"height": "6px",
                    "background": "url(http://ibrahimjabbari.com/english/images/hr-12.png) repeat-x 0 0",
                    "border": "0",
                }}/>
            </div>
        );
    };
}
export default BreedList;
{/*<h6 className="card-subtitle mb-2 text-muted">{list.name}</h6>*/}
