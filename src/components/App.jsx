import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note, {Card} from "./Note";
import noteMaster from "../notes";




function App() {
    return (<div >
        <Header / >

        {noteMaster.map((noteMaster) =>
        <Card 
        key = {noteMaster.key}     
        head = {noteMaster.title}
        para = { noteMaster.content}
        />
    )};  
     
    <Footer / >
        </div>);
}


export default App;