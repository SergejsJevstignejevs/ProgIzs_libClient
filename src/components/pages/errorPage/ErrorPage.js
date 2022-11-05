
import ExclamationMark from "../../../resources/images/exclamation-mark.png";
import "./ErrorPage.scss";

function ErrorPage() {
    return ( 
        <div className="ErrorPage">
            <div className="ErrorContainer">
                <img 
                    className="ErrorImage"
                    src={ExclamationMark}
                    alt="ExclamationMarkImg"></img>
                <div className="ErrorMessage">
                    Something went wrong...
                </div> 
            </div>
        </div>
    );
}

export default ErrorPage;