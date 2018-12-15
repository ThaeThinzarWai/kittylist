import React from 'react';

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

    handleFavourite = event => {
        alert('Mark as Fav Test!!');
    }

    render() {
        const cats = this.state.cats;

        return (
            <div className="row" style={{"marginTop":"20px"}}>
                {cats.map(cat => (
                    <div className="col-md-4">
                        <img src={cat.url} className="img-responsive" width="70%" />
                        <h2>{cat.sub_id}</h2>
                        <h5>{cat.id}</h5>
                        <button onClick={this.handleFavourite} className="btn btn-primary">Mark as Favourite</button>
                    </div>
                ))}
            </div>
        );
    };
}

export default CatList;