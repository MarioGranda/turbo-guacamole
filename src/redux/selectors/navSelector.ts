import { useSelector } from "react-redux";
import { RootState } from "../store";

export const selectOrigin = () =>
    useSelector((state: RootState) => state.nav.origin);

export const selectDestination = () =>
    useSelector((state: RootState) => state.nav.destination);

export const selectTravelTimeInformation = () =>
    useSelector((state: RootState) => state.nav.travelTimeInformation);

