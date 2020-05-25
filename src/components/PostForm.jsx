import React, { Component } from 'react'
import axios from 'axios'
import {Form} from 'reactstrap'

class PostForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         userId:'',
         title:'',
         body:''
      }
    }
    changeHandler=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    submitHandler=e=>{
        e.preventDefault()//prevent page refresh
        console.log(this.state)
        axios.post('https://jsonplaceholder.typicode.com/posts',this.state)
        .then(res=>{
            console.log(res)

        })
        .catch(err=>{
            console.log(err)
        })

    }
    
  render() {
      const {userId,title,body}=this.state
    return (
      <>
        <Form onSubmit={this.submitHandler}>
            <input type="text" name="userId" value={userId} onChange={this.changeHandler}></input>
            <input type="text" name="title" value={title} onChange={this.changeHandler}></input>
            <input type="text" name="body" value={body} onChange={this.changeHandler}></input>
            <button type='submit'>Submit</button>
        </Form>
      </>
    )
  }
}

export default PostForm
