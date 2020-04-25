import React, {Component} from 'react'
import PropTypes from 'prop-type'

import './comment-item.css'

export default class Item extends Component {

    static propTypes = {
        comment: PropTypes.object,
        deleteComment: PropTypes.func,
        index: PropTypes.number
    }

    handleClick = () => {
        const {comment, deleteComment, index} = this.props
        if(window.confirm(`确认删除${comment.username}`)){
            deleteComment(index)
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
    