import React from "react";

function Note(){
    return(
        <div className="note">
            <h1>Heading</h1>
            <p>This is a paragraph</p>
        </div>
    );
}

function Card(props){
    return <div className="note">
        <h1>{props.head}</h1>
        <p>{props.para}</p>
    </div>
}

export default Note;
export {Card};