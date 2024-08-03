


import React from "react";
import ReactDOM from "react-dom/client";

const Title = () =>
(<a href="/">
    <img
    className="logo"
    alt="LOGO"
    src="https://yt3.googleusercontent.com/FFffswAYvW-eIAKgSmGh85tMKFqp6SvLSSvx3BjvqJO2seP9pJnEeXWu_5HAMi82bZnDoVBWEA=s900-c-k-c0x00ffffff-no-rj"></img>
</a>
);

const Header = () =>(
    <div className="header">
        <Title />
        
        <div className="nav-items" >
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>

            </ul>

        </div>

    </div>
);

const burgerKing = {
    name : "Burger King",
    image : "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_400/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/7f76a072-c1bc-4d74-ac56-33e0eea20c1e_5934.JPG",
    cousine :["Burger", "American"],
    rating : "4.2"
};


const Restraunt = () =>(
    <div className="card">
        <img src={burgerKing.image}/>
        <h2>{burgerKing.name}</h2>
        <h4>{burgerKing.cousine.join(",")}</h4>
        <h3>{burgerKing.rating} Star</h3>
    </div>  
)

const Body = () =>(
    <div className="restra-list">
    <Restraunt/>
    <Restraunt/>
    <Restraunt/>
    <Restraunt/>
    <Restraunt/>
    <Restraunt/>
    <Restraunt/>
    <Restraunt/>
    </div>
);

const Footer = () =>(
    <h2>FOOTER</h2>
);


const Applayout = () =>(
    <React.Fragment>
    <Header/>
    <Body/>
    <Footer/>
    </React.Fragment>
);






const rom = ReactDOM.createRoot(document.getElementById("root"));
rom.render( <Applayout /> );