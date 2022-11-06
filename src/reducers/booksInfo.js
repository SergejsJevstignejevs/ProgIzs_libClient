const initialState = {
    books: []
}

const bookInfo = (state = initialState, action) => {
    switch(action.type) {
        case "INITIALIZE_BOOKS" : {
            return {
                books: action.payload
            }
        }
        default: {
            return {
                ...state
            }
        }
    }
}

export default bookInfo;