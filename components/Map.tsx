import { View, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useSelector } from "react-redux";
import tw from 'twrnc';
import { Origin } from "../redux/actions/nav";
import { selectOrigin } from "../redux/selectors/navSelector";

export default function Map() {
  const origin = selectOrigin()
  return (
      <MapView
        style={tw`flex-1`}
        mapType={"terrain"}
        initialRegion={{
          latitude: origin.location.lat,
          longitude: origin.location.lng,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
      >
        {origin?.location &&
          <Marker
          coordinate={{
            latitude: origin.location.lat,
            longitude: origin.location.lng,
          }}
          title="Origin"
          description={origin.description}
          identifier="origin"/>}
      </MapView>
  );
}
