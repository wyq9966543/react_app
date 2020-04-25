import React, {Component} from 'react'
import PropTypes from 'prop-type'

import './comment-list.css'
import Item from "../comment-item/comment-item"

export default class List extends Component {

    static propTypes = {
        comment: PropTypes.array,
        deleteComment: PropTypes.func
    }

    render() {
        const {comments} = this.props
        const display = comments.length === 0 ? 'block' : 'none'
        return (
            <div className="col-md-8">
                <h3 className="reply">评论回复：</h3>
                <h2 style={{display}}>暂无评论，点击左侧添加评论！！！</h2>
                <ul className="list-group">
                    {
                        comments.map((comment, index) => <Item comment={comment} key={index} index={index}/>)
                    }
                </ul>
            </div>
        )
    }
}

