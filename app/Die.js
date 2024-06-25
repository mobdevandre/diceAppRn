import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";

export default function App() {
  const [die, setDie] = useState(0);
  const [dieTwo, setDieTwo] = useState(0);
  const [image, setImage] = useState(require("../assets/questionMark.jpeg"));
  const [imageTwo, setImageTwo] = useState(
    require("../assets/questionMark.jpeg")
  );

  rollDie = () => {
    let randomNum = Math.floor(Math.random() * 6) + 1;
    setDie(randomNum);
    switch (randomNum) {
      case 1:
        setImage(require("../assets/die1.png"));
        break;
      case 2:
        setImage(require("../assets/die2.png"));
        break;
      case 3:
        setImage(require("../assets/die3.png"));
        break;
      case 4:
        setImage(require("../assets/die4.png"));
        break;
      case 5:
        setImage(require("../assets/die5.png"));
        break;
      case 6:
        setImage(require("../assets/die6.png"));
        break;
    }

    let randomNumTwo = Math.floor(Math.random() * 6) + 1;
    setDieTwo(randomNumTwo);
    switch (randomNumTwo) {
      case 1:
        setImageTwo(require("../assets/die1.png"));
        break;
      case 2:
        setImageTwo(require("../assets/die2.png"));
        break;
      case 3:
        setImageTwo(require("../assets/die3.png"));
        break;
      case 4:
        setImageTwo(require("../assets/die4.png"));
        break;
      case 5:
        setImageTwo(require("../assets/die5.png"));
        break;
      case 6:
        setImageTwo(require("../assets/die6.png"));
        break;
    }
  };
  return (
    <View style={styles.container}>
      <Text>Jogo!</Text>
      <Image source={image} style={styles.image} />
      <Text>{die}</Text>
      <Image source={imageTwo} style={styles.image} />
      <Text>{dieTwo}</Text>
      <Button title={"Rolar dado"} onPress={() => rollDie()} />
      <StatusBar style="auto" />
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
    width: 100,
    height: 100,
  },
});
