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

    render() {
        const cats = this.state.cats;

        return (
            <div>
                <div className="row">
                    {cats.map(cat => (
                        <div className="col-md-4">
                            <h2>{cat.sub_id}</h2>
                        </div>
                    ))}
                </div>
            </div>
        );
    };
}

export default CatList;