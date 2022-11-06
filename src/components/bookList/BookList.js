import { useSelector } from "react-redux";

import Book from "./book/Book";
import "./BookList.scss";

function BookList() {

    const { books } = useSelector(state => state.booksInfo);

    const bookElemList = books.length > 0 ?
        books.map(elem => {

            return (
                <Book
                    key={elem.id}
                    bookInfo={elem}    
                />
            );

        })
        :
        null;

    return ( 
        <div className="BookList">
            {bookElemList}
        </div>
    );
}

export default BookList;