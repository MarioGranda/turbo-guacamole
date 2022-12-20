import { GOOGLE_MAPS_APIKEY } from "@env";
import { useEffect, useRef } from "react";
import { View, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import { useSelector } from "react-redux";
import tw from 'twrnc';
import { Origin } from "../redux/actions/nav";
import { selectDestination, selectOrigin } from "../redux/selectors/navSelector";

export default function Map() {
  const origin = selectOrigin()
  const destination = selectDestination()
  const mapRef = useRef<MapView>(null)

  useEffect(() => {
    if (!origin || !destination) return;
    mapRef.current?.fitToSuppliedMarkers(["origin", "destination"], {
      edgePadding: {top: 50, bottom: 50, right: 50, left:50}
    })
  }, [origin, destination])
  return (
      <MapView
        style={tw`flex-1`}
        mapType={"terrain"}
        ref={mapRef}
        initialRegion={{
          latitude: origin.location.lat,
          longitude: origin.location.lng,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
      >
        {origin && destination && 
        <MapViewDirections
        origin={origin.description}
        destination={destination.description}
        apikey={GOOGLE_MAPS_APIKEY}
        strokeWidth={5}
        strokeColor={"red"}
        />
        }
        {origin?.location &&
          <Marker
          coordinate={{
            latitude: origin.location.lat,
            longitude: origin.location.lng,
          }}
          title="Origin"
          description={origin.description}
          identifier="origin"/>}
        {destination?.location &&
          <Marker
          coordinate={{
            latitude: destination.location.lat,
            longitude: destination.location.lng,
          }}
          title="Destination"
          description={destination.description}
          identifier="destination"/>}
      </MapView>
  );
}
