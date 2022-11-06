export const changeSelectedLink = (selectedLinkNum) => {
    return {
        type: "CHANGE_SELECTED_LINK",
        payload: selectedLinkNum
    }
}

export const initializeUser = (userDetails) => {
    return {
        type: "INITIALIZE_USER",
        payload: userDetails
    }
}

export const initializeBooks = (booksDetails) => {
    return {
        type: "INITIALIZE_BOOKS",
        payload: booksDetails
    }
}