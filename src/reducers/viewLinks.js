const initialState = {
    selectedLinkNum: 0
}

const viewLinks = (state = initialState, action) => {
    switch(action.type) {
        case "CHANGE_SELECTED_LINK" : {
            return {
                ...state,
                selectedLinkNum: action.payload
            }
        }
        default: {
            return {
                ...state
            }
        }
    }
}

export default viewLinks;