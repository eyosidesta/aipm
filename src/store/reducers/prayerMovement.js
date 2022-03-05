const prayerMovementReducer = (state = [], action) => {
    switch(action.types) {
        case "GET_PRAYER_MOVEMENT":
            return state = action.payload;
        default:
            return state;
    }
}

export default prayerMovementReducer;