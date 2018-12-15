import React from 'react';
import { connect } from 'react-redux';
import addcat_action from '../actions/index'

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
            <div className="row" style={{"marginTop":"20px"}}>
                <div className="col-md-7">
                    <form onSubmit={this.handleSubmit} encType="multipart/form-data">
                        <div className="form-group">
                            <label>Sub ID</label>
                            <input type="text" ref={this.input1} className="form-control" placeholder="Enter Sub ID" />
                        </div>
                        <div className="form-group">
                            <label>Cat Image</label>
                            <input type="file" name="files" ref={this.input2} className="form-control-file" />
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    };
}

export default connect(null, mapDispatchToProps)(AddNewCat);
// export default AddNewCat;