import { useState } from "react";
import { StyleSheet, View, Image, TextInput, Button } from "react-native";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Button onPress={() => navigation.navigate("Die")} title="Die" />
      <Button
        onPress={() => navigation.navigate("RockPaperS")}
        title="Rock Paper Scissor"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
  input: {
    width: 200,
    height: 50,
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
});
