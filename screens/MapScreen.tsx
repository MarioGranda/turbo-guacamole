import { useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Icon } from "@rneui/base";
import { View, TouchableOpacity } from "react-native";
import tw from 'twrnc';
import Map from "../components/Map";
import NavigateCard from "../components/NavigateCard";
import RideOptionsCard from "../components/RideOptionsCard";

const MapScreen = () => {
  const navigation = useNavigation()

  const Stack = createStackNavigator()
  return (
    <View style={tw`bg-red-900 h-full`}>
      <TouchableOpacity 
      onPress={() => navigation.navigate("HomeScreen" as never)}style={tw`absolute top-10 left-5 z-50 rounded-full bg-gray-100 shadow-lg`}>
      <Icon name="chevron-left" type="fontawesome" />
      </TouchableOpacity>
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

export default MapScreen
