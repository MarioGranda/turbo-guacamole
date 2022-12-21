import { GOOGLE_MAPS_APIKEY } from "@env";

const getMatrixUrl = (destination: string, origin: string) => {
    return `https://maps.googleapis.com/maps/api/distancematrix/json?origins=
    ${origin}&destinations=${destination}&units=imperial&key=${GOOGLE_MAPS_APIKEY}`
}

export default getMatrixUrl;
