import React from "react";
import Card from "./components/Card";

function App() {
  
    return (
      <div className="py-4">
        <div className="container">
          <h3>The Post</h3>
          <hr />
          <div className="row">
            <div className="col-md-4">
              <Card 
                imageUrl="http://placekitten.com/g/300/200" 
                title="First Post" 
                published="06 Feb, 2020" 
              />
            </div>
            <div className="col-md-4">
              <Card 
                imageUrl="http://placekitten.com/g/300/200" 
                title="Second Post" 
                published="06 Mar, 2018" 
              />
            </div>
            <div className="col-md-4">
              <Card 
                imageUrl="http://placekitten.com/300/200" 
                title="Third Post" 
                published="06 Feb, 2019" 
              />
            </div>
          </div>
        </div>
      </div>
    )
}
export default App;