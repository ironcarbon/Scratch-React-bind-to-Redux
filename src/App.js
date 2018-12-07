import React, { Component } from 'react'
import Posts from './components/Posts';
import Postforms from './components/Postform';


export default class App extends Component {
    render() {
        return (
            <div>
                <Postforms />
                <Posts />
            </div>
        )
    }
}
