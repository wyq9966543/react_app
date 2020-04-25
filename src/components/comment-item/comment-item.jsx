import React, {Component} from 'react'
import PubSub from 'pubsub-js'

import './comment-item.css'

export default class Item extends Component {

    handleClick = () => {
        const {comment, index} = this.props
        if(window.confirm(`确认删除${comment.username}`)){
            PubSub.publish('deleteComment', index)
        }
    }

    render() {
        const {comment} = this.props
        return (
            <li className="list-group-item">
                <div className="handle">
                    <a href="#" onClick={this.handleClick}>删除</a>
                </div>
                <p className="user"><span>{comment.username}</span><span>说:</span></p>
                <p className="centence">{comment.content}</p>
            </li>
        )
    }
}
    