import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import useLibApiService from "../../../hooks/libApiService.hook";

import "./MyReservation.scss";

function MyReservation(props) {

    const [title, setTitle] = useState(null);
    const { getBookByReservationId, cancelBookReservation, initUser } = useLibApiService();
    const userSignInInfo = useSelector(state => {return {
        email: state.userInfo.email,
        isWorker: state.userInfo.isWorker,
    }});
    const {
        id,
        borrowDate,
        returnDate,
        isReturned
    } = props.reservationInfo;

    useEffect(() => {

        getBookByReservationId(id)
            .then(res => setTitle(res.title))
            .catch(err => console.log(err));

    }, []);

    return ( 
        <div className="MyReservation">
            <div className="MyReservationInfo">
                <p className="MessageField">
                    <span className="left">book title:</span><span className="right">{title}</span>
                </p>
                <p className="MessageField">
                    <span className="left">borrow date:</span><span className="right">{borrowDate}</span>
                </p>
                <p className="MessageField">
                    <span className="left">return date:</span><span className="right">{returnDate}</span>
                </p>
                <p className="MessageField">
                    <span className="left">already returned:</span><span className="right">{isReturned ? "Yes": "No"}</span>
                </p>
            </div>
            <button 
                className="MyReservationCancel"
                onClick={() => {
                    cancelBookReservation(id);
                }}>
                Cancel Reservation
            </button>
        </div>    
    );
}

export default MyReservation;