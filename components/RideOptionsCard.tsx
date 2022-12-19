import { View, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useSelector } from "react-redux";
import tw from 'twrnc';
import { Origin } from "../redux/actions/nav";
import { selectOrigin } from "../redux/selectors/navSelector";

export default function RideOptionsCard() {
  return (
      <Text>RideOptions</Text>
  );
}
