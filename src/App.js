import React, { Component } from "react";

class App extends Component {

  constructor(){
    super()

    this.state = {
      name : "Parid"
    }
  }
  render (){

    const name = this.state.name;

    return (
      <div>
        <div>Hello {name}</div>
      </div>
    )
  }
}

export default App;