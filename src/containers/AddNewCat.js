import React from 'react';
import { connect } from 'react-redux';
import addcat_action from '../actions/index';

const mapDispatchToProps = (dispatch) => ({
    addCat : (value) => dispatch(addcat_action(value))
});

class AddNewCat extends React.Component {

    constructor(props){
        super(props);
        this.input1 = React.createRef();
        this.input2 = React.createRef();
    }

    handleSubmit = event => {
        event.preventDefault();
        const catObj = {
            sub_id : this.input1.current.value,
            file : this.input2.current.files[0]
        };
        this.props.addCat(catObj);
    };

    render() {
        return (
            <div className="col-md-8 offset-md-2">
                <br />
                <div className="card text-center">
                    <div className="card-header">
                        Add New Cat
                    </div>
                    <div className="card-body">
                        <div className="col-md-10 offset-md-1">
                            <form onSubmit={this.handleSubmit} encType="multipart/form-data">
                                <div className="form-group row">
                                    <label className="col-sm-3 col-form-label">Sub ID</label>
                                    <div className="col-sm-9">
                                        <input type="text" ref={this.input1} className="form-control" placeholder="Enter Sub ID" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-sm-3 col-form-label">Cat Image</label>
                                    <div className="col-sm-9">
                                        <input type="file" name="files" ref={this.input2} className="form-control-file" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-sm-9">
                                        <button className="btn btn-primary">Submit</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}

export default connect(null, mapDispatchToProps)(AddNewCat);
// export default AddNewCat;