const initState = {
    category: [{}]
}


const filterReducer = (state=initState, action) => {
    switch(action.type) {
        case "FILTER_CATEGORY":
            return {...state, filterCategory: action.payload.category };
        default:
            return {...state}
    }
}

export default filterReducer;