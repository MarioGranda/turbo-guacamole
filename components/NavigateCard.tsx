import {  Text, SafeAreaView, View, TouchableOpacity } from "react-native";
import { GooglePlacesAutocomplete, GooglePlacesAutocompleteRef } from "react-native-google-places-autocomplete";
import { useDispatch } from "react-redux";
import tw from "twrnc";
import { setDestination } from "../redux/actions/nav";
import { GOOGLE_MAPS_APIKEY } from '@env';
import { useNavigation } from "@react-navigation/native";
import NavFavourites from "./NavFavourites";
import { useRef } from "react";
import { Icon } from "@rneui/base";

const NavigateCard = () => {
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const ref = useRef<GooglePlacesAutocompleteRef>(null)
  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <View
      style={tw`flex-shrink`}>
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

      <View style={tw`flex flex-row justify-evenly border-t border-gray-100 w-3/4 self-center py-6`}>
        <TouchableOpacity 
        onPress={() => navigation.navigate("RideOptionsCard" as never)}style={tw`bg-black flex flex-row justify-between px-4 py-3 w-24 rounded-full`}>
          <Icon name="car" type="font-awesome" color="white" size={16}/>
          <Text style={tw`text-white`}>Rides</Text>
        </TouchableOpacity>
        <TouchableOpacity style={tw`flex flex-row justify-between px-4 py-3 w-24 rounded-full`}>
          <Icon name="fast-food-outline" type="ionicon" color="black" size={16}/>
          <Text style={tw`text-black`}>Eat</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default NavigateCard;
