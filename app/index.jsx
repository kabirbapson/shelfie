import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import Shelfie from "../assets/images/shelfie.png";
import { Link } from "expo-router";
import ThemedView from "../components/ThemedView";
import Spacer from "../components/Spacer";
import ThemedButton from "../components/ThemedButton";
// import client from "../lib/appwriteClient";
// import { account } from "../lib/appwrite";
const Home = () => {
    const handleSubmit = () => {
        console.log("Button Pressed!");
    }
    // console.log(client,'heyyy');
    // console.log(account, 'heyyy');
    
    console.log('object');
  return (
    <ThemedView style={styles.container}>
      <Image
        source={require("../assets/images/shelfie.png")}
        style={[styles.img, { width: 22 }]}
      />
      {/* <Image source={Shelfie}  /> */}
      <Link href="/login" asChild>
        <Pressable>
          <Spacer />
          <Text>Go to Login Page</Text>
          <Spacer />
        </Pressable>
      </Link>
      <Link href="/{auth}/login" style={styles.link}>
        <Text>Login</Text>
      </Link>

     <ThemedButton  onPress={handleSubmit}>
        <Text>Hit Me</Text>
     </ThemedButton>
      <Spacer height={150} backgroundColor="red">
        <Text>jdjd</Text>
        <View
          style={{ borderColor: "white", borderWidth: 2, height: 10 }}
        ></View>
      </Spacer>
      <Text>Hellow</Text>
    </ThemedView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
  },
  img: {
    marginBottom: 2,
      borderRadius: 10,
    height: 100,
    borderWidth: 1,
    borderColor: "maroon",
  },
  pressed: {
    opacity: 0.7,
  },
  btn: {
    marginTop: 20,
    padding: 10,
    borderWidth: 1,
    backgroundColor: "lightblue",
    borderRadius: 5,
  },
});
