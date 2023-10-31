import React from "react";
import "../App";
import LowerSidebarVector from "../assests/Lower-Sidebar-Vector.png";
import Cross from "../assests/cross-main.svg";

const Suggestion = () =>{

    return(
        <div className="main-mid">
            <img src={LowerSidebarVector} alt="" />
            <p>
            Ask me a question or ask me to summarize a document for you! While
            like humans, I'm not perfect and have my limitations, your
            feedback is the key to my improvement.
            </p>
            <img src={Cross} alt="" />
         </div>
    )
    
}
export default Suggestion;