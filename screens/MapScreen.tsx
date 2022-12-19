import { createStackNavigator } from "@react-navigation/stack";
import { View, Text } from "react-native";
import tw from 'twrnc';
import Map from "../components/Map";
import NavigateCard from "../components/NavigateCard";
import RideOptionsCard from "../components/RideOptionsCard";

export default function MapScreen() {

  const Stack = createStackNavigator()
  return (
    <View style={tw`bg-red-900 h-full`}>
      <View style={tw`h-1/2`}>
        <Map />
      </View>
      <View style={tw`h-1/2`}>
      <Stack.Navigator>
            <Stack.Screen name='NavigateCard' component={NavigateCard} 
            options={{
              headerShown: false
            }}/>
            <Stack.Screen name='RideOptionsCard' component={RideOptionsCard} 
            options={{
              headerShown: false
            }}/>
      </Stack.Navigator>
      </View>
    </View>
  );
}
