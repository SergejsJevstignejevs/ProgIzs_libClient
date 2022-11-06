const initialState = {
    id: null,
    contactPhone: null,
    createdAt: null,
    email: null,
    name: null,
    surname: null,
    isAdmin: null,
    isWorker: null,
    bookReservations: []
}

const userInfo = (state = initialState, action) => {
    switch(action.type) {
        case "INITIALIZE_USER" : {
            return {
                ...state,
                id: action.payload.id,
                contactPhone: action.payload.contactPhone,
                createdAt: action.payload.createdAt,
                email: action.payload.email,
                name: action.payload.name,
                surname: action.payload.surname,
                isAdmin: action.payload.isAdmin,
                isWorker: action.payload.isWorker,
                bookReservations: action.payload.bookReservations
            }
        }
        default: {
            return {
                ...state
            }
        }
    }
}

export default userInfo;