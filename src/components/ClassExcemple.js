import React, { Component } from "react";

class App extends Component {

  constructor(){

    super()

    this.state = {
      firstname:'',
      lastname:'',
      name:'',
    }

  }

  changeHandler = (e) => {
    // console.log(e.target.value)
    this.setState({
      [e.target.name]:e.target.value
    })
  }
  
  submitHandler = (e) => {
    e.preventDefault()
    console.log(this.state)
    this.setState({
      name: `${this.state.firstname} ${this.state.lastname}`
    })

    this.state.firstname = ''
    this.state.lastname = ''
  }

  render (){

    const {name} = this.state

    return (
      <div className="p-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <div className="card-header">Learn React</div>
                <div className="card-body">
                  <form onSubmit={this.submitHandler}>
                    <div className="mb-3"> 
                      <label htmlFor="firstname" className="form-label">Firstname</label>
                      <input type="text"  value={this.state.firstname} onChange={this.changeHandler} name="firstname"  id="firstname" className="form-control" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="lastname" className="form-label">Lastname</label>
                      <input type="text" name="lastname" value={this.state.lastname}  onChange={this.changeHandler} className="form-control" id="lastname"  />
                    </div>
                    <button className="btn btn-primary btn-block" type="submit">show</button>
                  </form>
                </div>
                <div className="card-footer">
                  my name is {name ? name : '. . . '}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;