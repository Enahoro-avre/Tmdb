export const initialState = {
    movie: [],
}

export const actionTypes = {
    SET_MOVIE: "SET_MOVIE",
}

const reducer = (state , action) => {
    console.log(action)
    switch(action.type) {
        case actionTypes.SET_MOVIE:
            return{... state , movie: action.movie}

        default:
            return state
    }
}
export default reducer