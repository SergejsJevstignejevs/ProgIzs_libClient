import { useSelector } from "react-redux";

import "./MyProfile.scss";

function MyProfile() {

    const {
        contactPhone,
        createdAt,
        email,
        name,
        surname,
    } = useSelector(state => state.userInfo);

    return (
        <div className="MyProfile">
            <div className="ProfileInfo">
                <p className="MessageField">
                    <span className="left">Name:</span><span className="right">{name}</span>
                </p>
                <p className="MessageField">
                    <span className="left">Surname:</span><span className="right">{surname}</span>
                </p>
                <p className="MessageField">
                    <span className="left">Email:</span><span className="right">{email}</span>
                </p>
                <p className="MessageField">
                    <span className="left">Contact Phone:</span><span className="right">{contactPhone}</span>
                </p>
                <p className="MessageField">
                    <span className="left">Created At:</span><span className="right">{createdAt}</span>
                </p>
            </div>
            <button className="ChangeInfo">
                Change Details
            </button>
        </div>
    );
}

export default MyProfile;