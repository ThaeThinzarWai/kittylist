import React from 'react';
import { connect } from 'react-redux';
import addfav_action from '../actions/add_fav';

const mapDispatchToProps = (dispatch) => ({
    addFav : (value) => dispatch(addfav_action(value))
});

const api_key = "6e27939c-67e0-4eaa-bb9e-9f9e2a212c9b";

class CatList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            cats : []
        }
    }

    componentDidMount() {
        fetch("https://api.thecatapi.com/v1/images/?limit=10", {
            headers: new Headers({
                'Content-Type': 'application/json',
                'x-api-key': '6e27939c-67e0-4eaa-bb9e-9f9e2a212c9b'
            })
        })
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        cats : result
                    });
                }
            )
    }

    handleFavourite =  function(image_id, sub_id) {

        const fav_data = {
            "image_id" : image_id,
            "sub_id" : sub_id
        }
        this.props.addFav(fav_data);
     };

    render() {
        const cats = this.state.cats;

        return (
            <div className="row" style={{"marginTop":"20px"}}>
                {cats.map(cat => (
                    <div className="col-md-4" style={{"marginBottom":"10px"}}>
                        <div className="card-deck" style={{"padding":"50px"}}>
                            <div className="card" style={{"width":"18rem", "height":"350px"}}>
                                <img className="card-img-top img-fluid" src={cat.url}  style={{"height":"200px"}} />
                                <div className="card-body">
                                    <h5 className="card-title">{cat.sub_id}</h5>
                                    <p className="card-text">{cat.id}</p>
                                    <button onClick={()=>this.handleFavourite(cat.id, cat.sub_id)} className="btn btn-primary">Mark as Favourite</button>
                                </div>
                            </div>
                        </div>

                    </div>
                ))}
            </div>
        );
    };
}

export default connect(null, mapDispatchToProps)(CatList);