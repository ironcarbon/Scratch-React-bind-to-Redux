import React, { Component } from 'react'
//import axios from 'axios';
import { connect } from 'react-redux';
import { getUsersAction } from '../actions/postActions';
import PropTypes from 'prop-types';

class Posts extends Component {


    componentDidMount() {

        this.props.getUsersAction();


    }


    render() {
        const postItems = this.props.posts.map(post => (
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        ));
        return (
            <div>
                <h1>Posts</h1>
                {postItems}
            </div>
        );
    }
}

const mapStateToProps = state => ({

    posts: state.posts.items

}
)
Posts.propTypes = {
    getUsersAction: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
}


export default connect(mapStateToProps, { getUsersAction })(Posts)