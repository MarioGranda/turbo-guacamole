import { Point } from "react-native-google-places-autocomplete";

export type ActionType = ReturnType<typeof setOrigin | typeof setDestination | typeof setTravelTimeInformation>

export interface Origin {
    location: Point;
    description: string;
}

export const setOrigin = (origin: Origin) => {
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
