import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useSelector } from "react-redux";
import tw from "tailwind-react-native-classnames";
import { selectOrigin } from "../slices/navSlices.";

const Map = () => {
  const origin = useSelector(selectOrigin);
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        mapType="mutedStandard"
        initialRegion={{
          latitude: 8.961, //at this position, origin.location.lat should be here, but we dont have google api key cause of payment, so replace it when you do
          longitude: 7.467, //origin.location.long should be here, but we dont have google api key
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
      >
        {/* {origin?.location && (  */}
        <Marker
          coordinate={{
            latitude: 8.961,
            longitude: 7.467,
          }}
          title="Origin"
          description="lokogoma"
          identifier="origin"
        />
        {/* )} */}
      </MapView>
    </View>
  );
};

export default Map;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  map: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
