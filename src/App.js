import React, { Component } from "react";

class App extends Component {

  constructor(){
    super()

    this.state = {
      name : "Parid"
    }
  }
  render (){
    return (
      <div>
        <div>Hello {this.state.name}</div>
      </div>
    )
  }
}

export default App;