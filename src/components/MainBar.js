import "../App";
import React from 'react';
import logo from "../assests/logo.png";
import AskMe from "../assests/ask-me.svg";


const MainBar = () =>{
return(
        <div className="main-top">
            <div className="main-inner">
                <div className="main-top-upper">
                    <img src={logo} alt="" className="main-logo" />
                    <h2 >
                        Welcome to <span className="lorem-para">Lorem Ipsum</span> 👋
                    </h2>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Molestiae tempore nihil reiciendis dignissimos cupiditate
                        explicabo ipsam iste, blanditiis magni? Distinctio!
                    </p>
                    </div>
                <div className="main-btns">
                    <button className="first-btn">
                        <img src={logo} alt="" />
                        Internal Knowledge
                    </button>
                    <button>
                        <img src={AskMe} alt="" />
                        Internal Knowledge
                    </button>
                </div>
            </div>
      </div>
    )

}
export default MainBar;