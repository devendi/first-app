import React from "react";

function Card(porps) {
  // console.log(porps)
    return (
        <div className="card">
          <img src={porps.content.imageUrl} alt="cat " className="card-img-top" />
          <div className="card-body">
            <h4>{porps.content.title}</h4>
            <small className="text-muted">Published {porps.content.published}</small>
          </div>
        </div>
    )
}

export default Card;