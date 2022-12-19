import { View, Text } from "react-native";
import tw from 'twrnc';
import Map from "../components/Map";

export default function MapScreen() {
  return (
    <View style={tw`bg-red-900 h-full`}>
      <View style={tw`h-1/2`}>
        <Map />
      </View>
      <View style={tw`h-1/2`}>
      </View>
    </View>
  );
}
