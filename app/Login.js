import { useState } from "react";
import { StyleSheet, View, Image, TextInput, Button } from "react-native";

export default function Login({ navigation }) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = () => {
    console.log("Name:", name);
    console.log("Password:", password);
    if (name == "Andre") {
      navigation.navigate("Die");
    }
  };
  return (
    <View style={styles.container}>
      <Image source={require("../assets/logoMovie.png")} style={styles.image} />
      <TextInput
        style={styles.input}
        placeholder="Name"
        onChangeText={setName}
        value={name}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        onChangeText={setPassword}
        value={password}
      />
      <Button onPress={handleLogin} title="Login" />
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
