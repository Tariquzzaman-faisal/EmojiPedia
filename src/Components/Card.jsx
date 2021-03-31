import React from "react";

function Card(props) {
    return (
        <div className="card cardbox" style={{width: 18 + 'rem'}}>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{props.emoji}</h6>
                <p className="card-text">{props.description}</p>
            </div>
        </div>
    );
}

export default Card;
