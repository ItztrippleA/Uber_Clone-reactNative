import React from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import tw from "tailwind-react-native-classnames";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/core";

const data = [
  {
    id: "123",
    title: "Get a ride",
    image: "https://links.papareact.com/3pn",
    screen: "MapScreen",
  },
  {
    id: "456",
    title: "Order food",
    image: "https://links.papareact.com/28w",
    screen: "EatsScreen", // Change in future...
  },
];

const NavOptions = () => {
  const navigation = useNavigation();
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      horizontal
      renderItem={({ item }) => {
        return (
          <TouchableOpacity
            onPress={() => navigation.navigate(item.screen)}
            style={tw`p-2 pb-8 pt-4 bg-gray-200 m-2 w-40 h-60`}
          >
            <View>
              <View style={tw`pl-4`}>
                <Image
                  style={[
                    {
                      width: 120,
                      height: 120,
                      resizeMode: "contain",
                    },
                  ]}
                  source={{ uri: item.image }}
                />
              </View>
              <Text style={tw`text-center text-lg font-semibold`}>
                {item.title}
              </Text>
              <Icon
                style={tw`p-2 bg-black rounded-full w-10 mt-4`}
                name="arrowright"
                color="white"
                type="antdesign"
              />
            </View>
          </TouchableOpacity>
        );
      }}
    />
  );
};

export default NavOptions;
