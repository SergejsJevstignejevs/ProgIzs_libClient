import { useSelector } from "react-redux";

import MyReservation from "./myReservation/MyReservation";
import "./MyReservationsList.scss";

function MyReservationsList() {

    const { bookReservations } = useSelector(state => state.userInfo);

    const reservElemList = bookReservations.length > 0 ? 
        bookReservations.map(elem => {
            
            return (
                <MyReservation 
                    key={elem.id}
                    reservationInfo={elem}
                />
            );

        })
        :
        <h2 className="NoReservations">There are no reservations!</h2>;

    return ( 
        <div className="MyReserationsList">
            {reservElemList}
        </div>
    );
}

export default MyReservationsList;