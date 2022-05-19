import axios, { Axios } from "axios";
import React, { Component } from "react";

class App extends Component {

  constructor(){
    super()

    this.state = {

      user : []
    }
  }

  // async teknik 1
  getUser = async()=>{
    let response = await axios.get('https://jsonplaceholder.typicode.com/users/1')
    this.setState({
      user : response.data
    })
  }

  // async teknik 2
  // async getUser() {

  // }

  // mounted(){this.getUser()} 
  
  componentDidMount(){
    this.getUser()
  }

  render (){
    
    const user = this.state.user;
    return (
      <div>
        <div>Hello {user.name}</div>
        <div>Hello {user.username}</div>
      </div>
    )
  }
}

export default App;