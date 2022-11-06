import { useDispatch, useSelector } from "react-redux";

import { initializeBooks, initializeUser } from "../actions";
import useHttp from "./http.hook"

export default function useLibApiService(){
    
    const { request, process, setProcess } = useHttp();
    const userSignInInfo = useSelector(state => {return {
        email: state.userInfo.email,
        isWorker: state.userInfo.isWorker,
    }});
    const dispatch = useDispatch();

    const _apiBase = "http://localhost:8080";

    const signInUser = async (signInUserDetails) => {

        const response = await request(
            `${_apiBase}/auth/signin`,
            "POST",
            transformExistingUserDetails(signInUserDetails));

        return response;

    }

    const signUpUser = async (signUpUserDetails) => {

        const response = await request(
            `${_apiBase}/auth/signup`,
            "POST",
            transformNewUserDetails(signUpUserDetails));

        await initUser({
            isWorker: signUpUserDetails.isWorker,
            email: signUpUserDetails.email,
        });

        return response;

    }

    const initUser = async (signInUserDetails) => {

        let response;

        if(!signInUserDetails.isWorker){

            response = await request(
                `${_apiBase}/users/email/${signInUserDetails.email}`);

        }
        else {

            response = await request(
                `${_apiBase}/workers/email/${signInUserDetails.email}`);

        }

        dispatch(
            initializeUser(
                {
                    ...response, 
                    isWorker: signInUserDetails.isWorker
                }
            )
        );

    }

    const getBookByReservationId = async (reservationId) => {

        const response = await request(
            `${_apiBase}/books/bookReservation/${reservationId}`);

        return response

    }

    const setBooksInfo = async () => {

        const response = await request(
            `${_apiBase}/books`);
        dispatch(
            initializeBooks(response)
        );

    }

    const makeBookReservation = async (reservationInfo) => {

        const response = await request(
            `${_apiBase}/bookReservations`,
            "POST",
            transformReservationInfo(reservationInfo)
        );

    }

    const cancelBookReservation = async (reservationId) => {

        const response = await request(
            `${_apiBase}/bookReservations/${reservationId}`,
            "DELETE"
        );
    
        initUser(userSignInInfo);

    }

    const transformReservationInfo = (reservationInfo) => {

        return JSON.stringify({
            userId: reservationInfo.userId,
            bookId: reservationInfo.bookId
        });

    }

    const transformNewUserDetails = (signUpUserDetails) => {

        if(!signUpUserDetails.isWorker){
            return JSON.stringify({
                name: signUpUserDetails.name,
                surname: signUpUserDetails.surname,
                contactPhone: signUpUserDetails.contactPhone,
                email: signUpUserDetails.email,
                password: signUpUserDetails.password,
                isWorker: signUpUserDetails.isWorker
            })
        }
        
        return JSON.stringify({
            name: signUpUserDetails.name,
            surname: signUpUserDetails.surname,
            contactPhone: signUpUserDetails.contactPhone,
            email: signUpUserDetails.email,
            password: signUpUserDetails.password,
            isWorker: signUpUserDetails.isWorker,
            libraryId: signUpUserDetails.libraryId
        })
        
    }

    const transformExistingUserDetails = (signInUserDetails) => {
        initUser(signInUserDetails)

        return JSON.stringify({
            email: signInUserDetails.email,
            password: signInUserDetails.password
        })

    }
    
    return { 
        process, 
        setProcess, 
        signInUser, 
        signUpUser, 
        getBookByReservationId, 
        setBooksInfo, 
        makeBookReservation,
        cancelBookReservation,
        initUser
    };

}