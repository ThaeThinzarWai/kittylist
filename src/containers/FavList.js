import React from 'react';

class FavList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            fav_cats : []
        }
    }

    componentDidMount() {
        fetch("https://api.thecatapi.com/v1/favourites", {
            headers: new Headers({
                'Content-Type': 'application/json',
                'x-api-key': '6e27939c-67e0-4eaa-bb9e-9f9e2a212c9b'
            })
        })
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        fav_cats : result
                    });
                }
            )
    }

    render() {
        const fav_cats = this.state.fav_cats;

        return (
            <div className="row" style={{"margin":"0px"}}>
                {fav_cats.map(cat => (
                    <div className="col-md-4">
                        <div className="card-deck" style={{"padding":"50px", "padding-bottom":"0px","padding-top":"15px"}}>
                            <div className="card" style={{"width":"18rem", "height":"350px"}}>  
                                <img className="card-img-top img-fluid" src={cat.image.url}  style={{"height":"200px"}} />
                                <div className="card-body">
                                    <h5 className="card-title">{cat.sub_id}</h5>
                                    <p className="card-text">{cat.id}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    };
}

export default FavList;