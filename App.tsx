import { Provider } from "react-redux"
import { store } from './redux/store';
import HomeScreen from './screens/HomeScreen';
import { SafeAreaProvider } from "react-native-safe-area-context"
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackNavigationProp } from "@react-navigation/stack"
import MapScreen from "./screens/MapScreen";

type RootStackParamList = {
  HomeScreen: undefined;
  MapScreen: undefined;
};

export type StackNavigation = StackNavigationProp<RootStackParamList>

const Stack = createStackNavigator<RootStackParamList>()

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <Stack.Navigator>
            <Stack.Screen name='HomeScreen' component={HomeScreen} 
            options={{
              headerShown: false
            }}/>
             <Stack.Screen name='MapScreen' component={MapScreen} 
            options={{
              headerShown: false
            }}/>
          </Stack.Navigator>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}

