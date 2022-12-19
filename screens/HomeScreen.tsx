import { Image, SafeAreaView, View } from "react-native";
import tw from 'twrnc';
import NavOptions from "./NavOptions";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from '@env';
import { useDispatch } from "react-redux";
import { setOrigin } from "../redux/actions/nav";

export default function HomeScreen() {
  const dispatch = useDispatch()
  return (
    <SafeAreaView style={tw`bg-red-900 h-full`}>
      <View style={tw`flex text-red-400 p-5`}>
        <Image style={{
          width: 100,
          height: 100,
          resizeMode: "contain"
        }}
          source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" }} />
        <GooglePlacesAutocomplete
          styles={{
            container: {
              flex: 0
            }, textInput:
            {
              fontSize: 18
            }
          }}
          debounce={400}
          placeholder='Search'
          fetchDetails={true}
          minLength={2}
          nearbyPlacesAPI="GooglePlacesSearch"
          enablePoweredByContainer={false}
          onPress={(data, details = null) => {
            if (details)
            dispatch(setOrigin({
              location: details?.geometry.location,
              description: data.description
            }))
          }}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: 'en',
          }}
        />
        <NavOptions />
      </View>
    </SafeAreaView>
  );
}
