import React, { Component } from 'react'
import axios from 'axios'

class PostList extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         post:[],
         errMess:[]
      }
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res=>{
            console.log(res)
            this.setState({
                post:res.data
            })
        })
        .catch(err=>{
            console.log(err)
            this.setState({
                errMess:"ERROR WHILE RETRIVEING THE DATA"
            })
        })
    }
    
  render() {
      const {post,errMess}=this.state
    return (
      <>
        Post list
    {post.length?post.map(x=><div key={x.id}>{x.title}</div>) : null}
    {errMess?<div>{errMess}</div>:null}

      </>
    )
  }
}

export default PostList
