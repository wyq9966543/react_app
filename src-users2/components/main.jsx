import React, {Component} from 'react'
import propTypes from 'prop-type'
import axios from 'axios'
import PubSub from 'pubsub-js'

export default class Main extends Component {

    state = {
        initView: true,
        loading: false,
        users: null,
        errorMsg: null
    }

    componentDidMount() {
        //
        PubSub.subscribe('search', (msg, searchName) => {
        this.setState({
            initView: false,
            loading: true
        })
            //发送ajax请求
        const url = `https://api.github.com/search/users?q=${searchName}`
        axios.get(url)
            .then(response => {
                //得到响应数据
                const result = response.data
                console.log(result)
                const users = result.items.map(item => ({name: item.login, url: item.html_url, avatarUrl: item.avatar_url}))
                this.setState({loading: false, users})
            })
            .catch(error => {
                this.setState({loading: false, errorMsg: error.message})
            })
        })
    }

    render() {
        const {initView, loading, users, errorMsg} = this.state
        const {searchName} = this.props
        if(initView) {
            return <h2>请输入关键字进行搜索:{searchName}</h2>
        } else if(errorMsg){
            return <h2>{errorMsg}</h2>
        } else if (loading) {
            return <h2>Loading...</h2>
        } else {
            return (
                <div className="row">
                    {
                        users.map((user,index) => (
                            <div className="card">
                                <a href={user.url} target="_blank">
                                    <img src={user.avatarUrl} style={{width: 100}}/>
                                </a>
                                <p className="card-text">{user.name}</p>
                            </div>
                        ))
                    }
                </div>
            )
        }
    }
}
    