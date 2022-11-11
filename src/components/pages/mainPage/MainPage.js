import { useEffect, useReducer } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { changeSelectedLink } from "../../../actions";
import useLibApiService from "../../../hooks/libApiService.hook";

import BookList from "../../bookList/BookList";
import MyReservationsList from "../../myReservationsList/MyReservationsList";
import MyProfile from "../../myProfile/MyProfile";
import "./MainPage.scss";

function MainPage() {

    const { selectedLinkNum } = useSelector(state => state.viewLinks);
    const userId = useSelector(state => state.userInfo.id);
    const userSignInInfo = useSelector(state => {
        return ({
            email: state.userInfo.email,
            isWorker: state.userInfo.isWorker
        });
    });
    const { setBooksInfo, initUser } = useLibApiService();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {

        if(userId === null){

            navigate("/error");

        }

        setBooksInfo();

    }, []);

    const linkInfo = [
        {text: "View Books"},
        {text: "My Reservations"},
        {text: "My Profile"}
    ];

    const linkElements = linkInfo.map((elem, i) => {

        const clazz = i === selectedLinkNum ? "Selected" : null;

        return (
            <NavLink 
                end
                key={i}
                className={clazz}
                to="/main"
                onClick={() => {
                    dispatch(changeSelectedLink(i));
                    initUser(userSignInInfo);
                }}
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
                {selectedLinkNum === 0 ? 
                    <BookList></BookList>
                 : null}
                {selectedLinkNum === 1 ?
                    <MyReservationsList></MyReservationsList>
                 : null}
                {selectedLinkNum === 2 ?
                    <MyProfile></MyProfile>
                 : null}
            </div>
        </div>
    );
}

export default MainPage;