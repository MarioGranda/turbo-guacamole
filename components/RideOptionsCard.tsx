import { Icon, Image } from "@rneui/base";
import { View, Text, FlatList, TouchableOpacity, processColor } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from 'twrnc';
import taxi from "../assets/standard-taxi.jpg"
import van from "../assets/van-taxi.jpg"
import limo from "../assets/limousine-taxi.jpg"
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const data = [
  {
    id: "1",
    image: taxi,
    name: "Taxi",
    multiplier: 1,
  },
  {
    id: "2",
    image: van,
    name: "Taxi van",
    multiplier: 1.1,
  },
  {
    id: "3",
    image: limo,
    name: "Taxi limo",
    multiplier: 1.3,
  },
]

interface Taxi {
  id: string;
  image: string;
  name: string;
  multiplier: number;
}

export default function RideOptionsCard() {
  const [selected, setSelected] = useState<Taxi | null>(null)
  const navigation = useNavigation()
  return (
    <SafeAreaView style={tw`bg-white flex-grow`}>
      <View style={tw`flex-row items-center pb-5`}>
        <TouchableOpacity
          onPress={() => {navigation.navigate("NavigateCard" as never)
          console.log("hola")}}
          style={tw` bg-gray-200 rounded-full mr-22 ml-5`}>
          <Icon name="chevron-left" type="fontawesome" />
        </TouchableOpacity>
        <Text style={tw`text-xl text-center`}>RideOptions</Text>
      </View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={tw`flex-row justify-evenly items-center h-18 ${selected?.id === item.id ? "bg-gray-200" : ""}`}
            onPress={() => setSelected(item)}>
            <Image style={{
              width: 100,
              height: 100,
              resizeMode: "contain"
            }}
              source={item.image} />
            <View style={tw`text-black`}>
              <Text style={tw`font-semibold text-xl`}>
                {item.name}
              </Text>
              <Text>
                Travel time...
              </Text>
            </View>
            <View style={tw`text-black`}>
              <Text style={tw`font-semibold text-xl`}>
                100€
              </Text>
            </View>
          </TouchableOpacity>
        )}>
      </FlatList>
    </SafeAreaView>
  );
}
