import { Provider } from "react-redux"
import { store } from './redux/store';
import HomeScreen from './screens/HomeScreen';
import { SafeAreaProvider } from "react-native-safe-area-context"
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack"
import MapScreen from "./screens/MapScreen";
import { KeyboardAvoidingView, Platform } from "react-native";

const Stack = createStackNavigator()

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <KeyboardAvoidingView style={{ flex: 1 }}
          behavior={Platform.OS === "ios" ? "padding" : "height"}>
            <Stack.Navigator>
              <Stack.Screen name='HomeScreen' component={HomeScreen}
                options={{
                  headerShown: false
                }} />
              <Stack.Screen name='MapScreen' component={MapScreen}
                options={{
                  headerShown: false
                }} />
            </Stack.Navigator>
          </KeyboardAvoidingView>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}

