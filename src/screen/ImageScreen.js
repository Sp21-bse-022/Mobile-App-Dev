import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default function ImageScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/1.jpeg")} style={styles.img} />
      <Image source={require("../../assets/2.jpeg")} style={styles.img1} />
      <Image source={require("../../assets/3.jpeg")} style={styles.img2} />
      <TouchableOpacity
        style={styles.txtcontainer}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.txt}>Go to Home Screen</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    flex: 1,
  },
  img: {
    borderWidth: 2,
    borderColor: "black",
    width: 150,
    height: 150,
    margin: 10,
  },
  img1: {
    borderWidth: 3,
    borderColor: "yellow",
    width: 150,
    height: 150,
    margin: 10,
    alignSelf: "center",
  },
  img2: {
    borderWidth: 2,
    borderColor: "blue",
    width: 150,
    height: 150,
    margin: 10,
    alignSelf: "flex-end",
  },
  txt: {
    fontSize: 10,
    color: "black",
    fontWeight: "bold",
    alignSelf: "center",
  },
  txtcontainer: {
    backgroundColor: "blue",
    borderRadius: 10,
    padding: 12,
    justifyContent: "center",
    margin: 20,
  },
});
