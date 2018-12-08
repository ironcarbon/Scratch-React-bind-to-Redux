import React, { Component } from 'react';
import axios from 'axios';

export default class extends Component {

    state = {
        title: "",
        body: ""
    }


    onSubmitHandler = (e) => {
        const post = {
            title: this.state.title,
            body: this.state.body
        }


        axios.post('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(post)
        })
            .then(res => console.log(res))


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
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

