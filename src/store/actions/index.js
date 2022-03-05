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