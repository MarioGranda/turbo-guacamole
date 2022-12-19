import { useSelector } from "react-redux";
import { RootState } from "../store";
import { Origin } from "../actions/nav";

export const selectOrigin = () =>
    useSelector((state: RootState) => state.nav.origin);

export const selectDestination = () =>
    useSelector((state: RootState) => state.nav.origin);

export const selecTravelTimeInformation = () =>
    useSelector((state: RootState) => state.nav.origin);

