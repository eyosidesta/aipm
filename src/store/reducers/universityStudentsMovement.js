export const universityStudentsMovementsReducer = (state = [], action) => {
    switch(action.type) {
        case "UNIVERSITY_STUDENTS_MOVEMENTS":
            return state = action.payload;
        default:
            return state;
    }
}

export const universityStudentsMovementReducer = (state = {}, action) => {
    switch(action.type) {
        case "UNIVERSITY_STUDENTS_MOVEMENT":
            return state = action.payload;
        default:
            return state;
    }
}