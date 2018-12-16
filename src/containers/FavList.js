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
            <div className="row" style={{"marginTop":"20px"}}>
                {fav_cats.map(cat => (
                    <div className="col-md-4">
                        <img src={cat.image.url} className="img-responsive" width="70%" />
                        <h2>{cat.sub_id}</h2>
                        <h5>{cat.id}</h5>
                    </div>
                ))}
            </div>
        );
    };
}

export default FavList;