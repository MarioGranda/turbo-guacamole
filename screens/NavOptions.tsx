import { FlatList, Image, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import tw from 'twrnc';
import { Icon } from "@rneui/base"
import { useNavigation } from "@react-navigation/native";
import { StackNavigation } from "../App";

const data = [
  {
    id: "1",
    title: "Get a ride",
    image: "https://cdn-icons-png.flaticon.com/512/215/215806.png",
    screen: "MapScreen"
  },
  {
    id: "2",
    title: "Order food",
    image: "https://cdn-icons-png.flaticon.com/512/5141/5141534.png",
    screen: "EatScreen"
  }
]

export default function NavOptions({ }) {
  const navigation = useNavigation<StackNavigation>()

  return (
    <FlatList
      keyExtractor={item => item.id}
      data={data}
      horizontal
      renderItem={({ item }) => (
        <TouchableOpacity style={tw`p-2 pb-8 pt-4 bg-red-800 m-2 h-60 w-40 items-center rounded-xl`}
        onPress={() => navigation.navigate({ key: item.screen})}>
          <View>
            <Image style={{
              width: 120,
              height: 120,
              resizeMode: "contain"
            }}
              source={{ uri: item.image }} />
            <Text style={tw`mt-2 text-lg font-semibold text-center`}>
              {item.title}
            </Text>
            <Icon
              style={tw`p-2 bg-black rounded-full w-10 mt-4 self-center`}
              name="arrowright"
              color="white"
              type="antdesign">
            </Icon>
          </View>
        </TouchableOpacity>
      )} />
  )
}
