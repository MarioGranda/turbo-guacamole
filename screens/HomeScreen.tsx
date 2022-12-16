import { Image, SafeAreaView, View } from "react-native";
import tw from 'twrnc';
import NavOptions from "./NavOptions";

export default function HomeScreen() {
  return (
    <SafeAreaView style={tw`bg-red-900 h-full`}>
      <View style={tw`text-red-400 p-5`}>
        <Image style={{
            width: 100,
            height: 100,
            resizeMode: "contain"
        }}
        source={{uri: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"}}/>
      </View>
      <NavOptions />
    </SafeAreaView>
  );
}
