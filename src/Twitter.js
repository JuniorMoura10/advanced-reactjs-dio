import React, { Component } from 'react'

class Twitter extends Component {


    componentDidMount(){
       this.props.getPosts()
}

render(){
    const {posts} = this.props.posts

    return(
        <div>
            {posts}
        </div>
    )
}
}
export default Twitter