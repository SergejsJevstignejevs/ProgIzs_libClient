import useHttp from "./http.hook"

export default function useLibApiService(){
    
    const { request, process, setProcess } = useHttp();

    const _apiBase = "http://localhost:8080";

    const signInUser = async (userDetails) => {

        const response = await request(
            `${_apiBase}/auth/signin`,
            "POST",
            transformExistingUserDetails(userDetails));

        return response;

    }

    const signUpUser = async (userDetails) => {

        const response = await request(
            `${_apiBase}/auth/signup`,
            "POST",
            transformNewUserDetails(userDetails));

        return response;

    }

    const transformNewUserDetails = (userDetails) => {

        if(!userDetails.isWorker){
            return JSON.stringify({
                name: userDetails.name,
                surname: userDetails.surname,
                contactPhone: userDetails.contactPhone,
                email: userDetails.email,
                password: userDetails.password,
                isWorker: userDetails.isWorker
            })
        }
        
        return JSON.stringify({
            name: userDetails.name,
            surname: userDetails.surname,
            contactPhone: userDetails.contactPhone,
            email: userDetails.email,
            password: userDetails.password,
            isWorker: userDetails.isWorker,
            libraryId: userDetails.libraryId
        })
        
    }

    const transformExistingUserDetails = (userDetails) => {

        return JSON.stringify({
            email: userDetails.email,
            password: userDetails.password
        })

    }

    
    return { process, setProcess, signInUser, signUpUser };

}