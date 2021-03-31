import React from "react";
import Card from "./Card";
import info from "./emojiInfo"


function App() {
    return (
        <div>
            <div class="jumbotron jumbotron-fluid">
                <div class="container">
                    <h1 class="display-4">Emojipedia</h1>
                </div>
            </div>
                {/* <div className="col-4"> */}
                {info.map(info => <Card title = {info.title} description = {info.description} emoji = {info.emoji} />)}
                {/* </div> */}
            
        </div>
    );
}

export default App;
