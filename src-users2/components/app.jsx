import React, {Component} from 'react'

import Search from "./search"
import Main from "./main"

export default class App extends Component {

    render() {
        return (
            <div id="app">
                <div className="container">
                    <Search/>
                    <Main/>
                </div>
            </div>
        )
    }
}
    