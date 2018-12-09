import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { newPostAction } from '../actions/postActions';

class Postform extends Component {

    state = {
        title: "",
        body: ""
    }


    onSubmitHandler = (e) => {
        this.props.newPostAction(this.state);
        e.preventDefault();
    }


    render() {
        return (
            <div>
                <h1>Add Post</h1>
                <form onSubmit={this.onSubmitHandler}>
                    <div>
                        <label>Title:</label><br />
                        <input type="text" name="title" value={this.state.title} onChange={e => this.setState({ title: e.target.value })}></input>
                    </div>
                    <div>
                        <label>Body:</label><br />
                        <textarea name="body" value={this.state.body} onChange={e => this.setState({ body: e.target.value })} />
                    </div>
                    <div>
                        <button type="submit"
                            onClick={() => this.onSubmitHandler}
                        >Submit</button>
                    </div>
                </form>
            </div >
        )
    }
}

const mapStateToProps = state => {
    console.log(state);
    return { state };
}

export default connect(mapStateToProps, { newPostAction })(Postform)
