import { useSelector } from "react-redux";

import useLibApiService from "../../../hooks/libApiService.hook";

import NotFoundImage from "../../../resources/images/image-not-found.png";
import "./Book.scss";

function Book(props) {

    const userId = useSelector(state => state.userInfo.id);
    const { makeBookReservation} = useLibApiService();

    const {
        id,
        title,
        author,
        publisher,
        genre,
        pages,
        copies,
        releaseDate,
        bookReservations    
    } = props.bookInfo;

    return (
        <div className="Book">
            <img src={NotFoundImage} alt="BookName" />
            <div className="BookInfo">
                <p className="MessageField">
                    <span className="left">title:</span><span className="right">{title}</span>
                </p>
                <p className="MessageField">
                    <span className="left">author:</span><span className="right">{author}</span>
                </p>
                <p className="MessageField">
                    <span className="left">publisher:</span><span className="right">{publisher}</span>
                </p>
            </div>
            <div className="Buttons">
                <button
                    onClick = {() => {
                        makeBookReservation({
                            bookId: id,
                            userId: userId
                        });
                    }}
                >
                    Make a Reservation
                </button>
                <button>
                    See More
                </button>  
            </div>
        </div>
    );
}

export default Book;