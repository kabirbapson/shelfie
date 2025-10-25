import { Image, StyleSheet, Text, View } from "react-native";
import Shelfie from "../assets/images/shelfie.png";
import { Link } from "expo-router";
import ThemedView from "../components/ThemedView";
import Spacer from "../components/Spacer";
const Home = () => {
  return (
    <ThemedView>
      <Image
        source={require("../assets/images/shelfie.png")}
        style={[styles.img, { width: 22 }]}
      />
      {/* <Image source={Shelfie}  /> */}
      <Link href="/about">Go to About Page</Link>
      <Text style={{ fontSize: 30, color: "maroon" }}>
        Are you sure you are fine???
      </Text>
      <Spacer height={50}  backgroundColor="red">
              <Text>jdjd</Text>
              <View style={{borderColor:'white', borderWidth:2, height:10}}>
                  
              </View>
      </Spacer>
      <Text>Hellow</Text>
    </ThemedView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffff00ff",
  },
  img: {
    width: 200,
    height: 200,
    marginBottom: 20,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: "maroon",
  },
});
