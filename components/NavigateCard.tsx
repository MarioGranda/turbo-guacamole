import {  Text, SafeAreaView, View } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { useDispatch } from "react-redux";
import tw from "twrnc";
import { setDestination } from "../redux/actions/nav";
import { GOOGLE_MAPS_APIKEY } from '@env';
import { useNavigation } from "@react-navigation/native";

export default function NavigateCard() {
  const dispatch = useDispatch()
  const navigation = useNavigation()
  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <Text style={tw`text-center py-5 text-xl`}>Heyyy</Text>
      <View
      style={tw`border-t border-gray-200 flex-shrink`}>
        <View>
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
          placeholder='Where to?'
          fetchDetails={true}
          minLength={2}
          nearbyPlacesAPI="GooglePlacesSearch"
          enablePoweredByContainer={false}
          onPress={(data, details = null) => {
            if (details)
            dispatch(setDestination({
              location: details?.geometry.location,
              description: data.description
            }))
            navigation.navigate('RideOptionsCard')
          }}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: 'en',
          }}
        />
        </View>
      </View>
    </SafeAreaView>
  );
}
