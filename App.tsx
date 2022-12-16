import { Provider } from "react-redux"
import { store } from './redux/store';
import HomeScreen from './screens/HomeScreen';
import {SafeAreaProvider} from "react-native-safe-area-context"


export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
      <HomeScreen />
      </SafeAreaProvider>
    </Provider>
  );
}

