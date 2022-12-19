import { AnyAction } from "redux"

interface State {
    origin: string | null;
    destination: string | null;
    travelTimeInformation: string | null;
}

const initialState: State = {
    origin: null,
    destination: null,
    travelTimeInformation: null
}

const navReducer = (
    state = initialState,
    action: AnyAction
) => {
    switch (action.type) {
        case "SET_ORIGIN":
            return {
                ...state,
                origin: action.payload
            };
        case "SET_DESTINATION":
            return {
                ...state,
                destination: action.payload
            };
        case "SET_TRAVELTIMEINFORMATION":
            return {
                ...state,
                travelTimeInformation: action.payload
            };
        default:
            return state;
    }

}

export default navReducer
