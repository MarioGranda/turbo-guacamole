export type ActionType = ReturnType<typeof setOrigin | typeof setDestination | typeof setTravelTimeInformation>

export const setOrigin = (origin: string) => {
    return {
        type: "SET_ORIGIN" as const,
        payload:
            origin
    }
}

export const setDestination = (destination: string) => {
    return {
        type: "SET_DESTINATION" as const,
        payload:
            destination
    }
}

export const setTravelTimeInformation = (travelTimeInformation: string) => {
    return {
        type: "SET_TRAVELTIMEINFORMATION" as const,
        payload:
            travelTimeInformation
    }
}
