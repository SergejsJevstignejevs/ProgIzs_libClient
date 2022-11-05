import { useState } from "react";
import { NavLink } from "react-router-dom";

import NotFoundImage from "../../../resources/images/image-not-found.png";
import "./MainPage.scss";

function MainPage() {

    const [selectedLink, setSelectedLink] = useState(1);

    const linkInfo = [
        {text: "View Books"},
        {text: "My Reservations"},
        {text: "My Profile"}
    ];

    const linkElements = linkInfo.map((elem, i) => {

        const clazz = i === selectedLink ? "Selected" : null;

        return (
            <NavLink 
                end
                id={i}
                className={clazz}
                to="/main"
                onClick={() => setSelectedLink(i)}
            >{elem.text}</NavLink>
        );

    });

    return (  
        <div className="MainPage">
            <div className="MainContent">
                <div className="ViewPanel">
                    <nav>
                        {linkElements}
                    </nav>
                </div>
                <div className="BookList">
                    <div className="Book">
                        <img src={NotFoundImage} alt="BookName" />
                        <div className="BookInfo">
                            <span>title:</span>
                            <span>author:</span>
                            <span>publisher:</span>
                        </div>
                        <button className="BookReservation">
                            Make a Reservation
                        </button>
                    </div>
                    <div className="Book">
                        <img src={NotFoundImage} alt="BookName" />
                        <div className="BookInfo">
                            <span>title:</span>
                            <span>author:</span>
                            <span>publisher:</span>
                        </div>
                        <button className="BookReservation">
                            Make a Reservation
                        </button>
                    </div>
                    <div className="Book">
                        <img src={NotFoundImage} alt="BookName" />
                        <div className="BookInfo">
                            <span>title:</span>
                            <span>author:</span>
                            <span>publisher:</span>
                        </div>
                        <button className="BookReservation">
                            Make a Reservation
                        </button>
                    </div>
                    <div className="Book">
                        <img src={NotFoundImage} alt="BookName" />
                        <div className="BookInfo">
                            <span>title:</span>
                            <span>author:</span>
                            <span>publisher:</span>
                        </div>
                        <button className="BookReservation">
                            Make a Reservation
                        </button>
                    </div>
                    <div className="Book">
                        <img src={NotFoundImage} alt="BookName" />
                        <div className="BookInfo">
                            <span>title:</span>
                            <span>author:</span>
                            <span>publisher:</span>
                        </div>
                        <button className="BookReservation">
                            Make a Reservation
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainPage;