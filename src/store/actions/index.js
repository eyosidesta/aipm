export const signIn = (data) => {
    return {
        type: "SIGN_IN",
        payload: data
    }
}

export const signOut = () => {
    return {
        type: "SIGN_OUT"
    }
}

export const getNewsAction = (data) => {
    return {
        type: "GET_NEWS",
        payload: data
    }
}

export const getPrayerMovementAction = (data) => {
    return {
        type: "GET_PRAYER_MOVEMENT",
        payload: data
    }
}

export const getTestimoniesAction = (data) => {
    return {
        type: "GET_TESTIMONIES",
        payload: data
    }
}

export const getTestimonyAction = (data) => {
    return {
        type: "GET_TESTIMONY",
        payload: data
    }
}

export const getStaffMembersAction = (data) => {
    return {
        type: "GET_STAFF_MEMBERS",
        payload: data
    }
}

export const getStaffMemberAction = (data) => {
    return {
        type: "GET_STAFF_MEMBER",
        payload: data
    }
}