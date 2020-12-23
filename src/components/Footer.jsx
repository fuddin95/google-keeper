import React from "react";

const date = new Date();
const year = date.getFullYear();

function Footer(){
    return (<footer>
        <p>©{year} Muhammd Fahad Uddin</p>
    </footer>);
}

export default Footer;