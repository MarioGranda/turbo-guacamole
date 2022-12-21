import { useNavigation } from '@react-navigation/native'
import { Icon } from '@rneui/base'
import React, { FC, RefObject } from 'react'
import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import { GooglePlacesAutocompleteRef } from 'react-native-google-places-autocomplete'
import { useDispatch } from 'react-redux'
import tw from 'twrnc'
import { setDestination, setOrigin } from '@/redux/actions/nav'
import { Point } from "react-native-google-places-autocomplete";


const data = [
    {
        id: "1",
        icon: "home",
        name: "Home",
        location: { "lat": 40.4526148, "lng": -3.6232624 },
        description: "Avenida de los Prunos, 5, Madrid, Spain"
    },
    {
        id: "2",
        icon: "briefcase",
        name: "Gym",
        location: { "lat": 40.4319795, "lng": -3.631175 },
        description: "Kamus Barbell Club, Calle de Miguel Fleta, Madrid, Spain"
    }
]


interface Props {
    inputRef: RefObject<GooglePlacesAutocompleteRef>
    screen: string;
}

const NavFavourites: FC<Props> = ({ inputRef, screen }) => {
    const dispatch = useDispatch()
    const navigation = useNavigation()

    const onPress = (description: string, location: Point) => {
        inputRef.current?.setAddressText(description)
        const data = {
            location,
            description
        }
        if (screen === "home") {
            dispatch(setOrigin(data))
        } else {
            dispatch(setDestination(data))
            navigation.navigate('RideOptionsCard' as never)
        }
    }

    return (
        <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={() => (
                <View style={tw`bg-gray-200 h-0.1 w-3/4 self-center`} />
            )}
            renderItem={({ item: { name, location, description, icon } }) => (
                <TouchableOpacity style={tw`flex-row items-center p-5`}
                    onPress={() => onPress(description, location)}>
                    <Icon
                        style={tw`mr-4 rounded-full p-3 bg-red-400`}
                        name={icon}
                        type="ionicon"
                        color="white"
                        size={18}
                    />
                    <View>
                        <Text style={tw`font-semibold text-lg`}>
                            {name}
                        </Text>
                        <Text>
                            {description}
                        </Text>
                    </View>
                </TouchableOpacity>
            )}
        />
    )
}

export default NavFavourites;
