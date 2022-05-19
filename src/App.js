import React, { useState } from "react";

function App() {

    const [firstname, setFirtsname] = useState('')
    const [lastname, setLastname] = useState('')
    const [name, setName] = useState('')

    const submitHandler = (e) => {
      e.preventDefault()
      setName (`${firstname} ${lastname}`)
      setFirtsname('')
      setLastname('')
    }
    return (
        <div className="p-5">
            <div className="container">
            <div className="row">
                <div className="col-md-4">
                <div className="card">
                    <div className="card-header">Learn React Fuction</div>
                    <div className="card-body">
                    <form onSubmit={submitHandler}>
                        <div className="mb-4"> 
                            <label htmlFor="firstname" className="form-label">Firstname</label>
                            <input type="text" value={firstname} onChange={(e) => setFirtsname(e.target.value)} name="firstname"  id="firstname" className="form-control" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="lastname" className="form-label">Lastname</label>
                            <input type="text" value={lastname} onChange={(e) => setLastname(e.target.value)} name="lastname" id="lastname" className="form-control" />
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
export default App;