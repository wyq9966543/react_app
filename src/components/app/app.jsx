import React, {Component} from "react";
import PubSub from 'pubsub-js'

import Add from "../comment-add/comment-add";
import List from "../comment-list/comment-list";
export default class App extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //        comments: [
    //            {username: 'Tom', content: 'very good'},
    //            {username: 'Jack', content: 'very difficult'}
    //        ]
    //     }
    // }
    state = {
       comments: [
           {username: 'Tom', content: 'very good'},
           {username: 'Jack', content: 'very difficult'}
       ]
    }

    componentDidMount() {
        //订阅消息
        PubSub.subscribe('deleteComment', (msg, index) => {
            this.deleteComment(index)
        })
    }

    addComment = (comment) => {
        const {comments} = this.state
        comments.unshift(comment)
        //更新状态
        this.setState({comments})
    }

    deleteComment = (index) => {
        const {comments} = this.state
        comments.splice(index,1)
        //更新状态
        this.setState({comments})
    }

    render() {
        const {comments} = this.state
        return (
            <div>
                <header className="site-header jumbotron">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <h1>请发表对React的评论</h1>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="container">
                    <Add addComment={this.addComment}></Add>
                    <List comments={comments}></List>
                </div>
            </div>
        )
    }
}
