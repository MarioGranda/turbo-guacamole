import {  Text, SafeAreaView, View } from "react-native";
import { GooglePlacesAutocomplete, GooglePlacesAutocompleteRef } from "react-native-google-places-autocomplete";
import { useDispatch } from "react-redux";
import tw from "twrnc";
import { setDestination } from "../redux/actions/nav";
import { GOOGLE_MAPS_APIKEY } from '@env';
import { useNavigation } from "@react-navigation/native";
import NavOptions from "./NavOptions";
import NavFavourites from "./NavFavourites";
import { useRef } from "react";

export default function NavigateCard() {
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const ref = useRef<GooglePlacesAutocompleteRef>(null)
  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <Text style={tw`text-center py-5 text-xl`}>Heyyy</Text>
      <View
      style={tw`border-t border-gray-200 flex-shrink`}>
        <View>
        <GooglePlacesAutocomplete
          ref={ref}
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
            console.log(details?.geometry.location)
            if (details)
            dispatch(setDestination({
              location: details?.geometry.location,
              description: data.description
            }))
            navigation.navigate('RideOptionsCard' as never)
          }}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: 'en',
          }}
        />
        </View>
        <NavFavourites inputRef={ref} screen="map"/>
      </View>
    </SafeAreaView>
  );
}
