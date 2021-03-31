import React from "react";

function Card(props) {
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">{props.title}</h5>
            <p class="card-text">
                {props.description}
            </p>
        </div>
    </div>;
}

export default Card;