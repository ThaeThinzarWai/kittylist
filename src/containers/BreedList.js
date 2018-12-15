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
    render() {
        const breeds = this.state.breeds;
        return (
            <div>
                <div className="col-md-12">
                    <h6>breed List</h6>
                    {breeds.map(breed => (
                        <div className="col-md-4">
                            <span class="badge badge-light">{breed.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        );
    };
}
export default BreedList;
