import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default function RockPaperS() {
  const [imageRock, setImageRock] = useState(require("../assets/rock.png"));
  const [imagePaper, setImagePaper] = useState(require("../assets/paper.png"));
  const [imageScis, setImageScis] = useState(require("../assets/scissors.png"));
  const [imagePc, setImagePc] = useState(
    require("../assets/questionMark.jpeg")
  );
  const [result, setResult] = useState("");

  playPc = (choice) => {
    let randomNum = Math.floor(Math.random() * 3) + 1;
    switch (randomNum) {
      case 1:
        setImagePc(require("../assets/rock.png"));
        break;
      case 2:
        setImagePc(require("../assets/paper.png"));
        break;
      case 3:
        setImagePc(require("../assets/scissors.png"));
        break;
    }

    if (choice === randomNum) {
      setResult("Empatou");
    } else if (
      (choice === 1 && randomNum === 3) ||
      (choice === 2 && randomNum === 1) ||
      (choice === 3 && randomNum === 2)
    ) {
      setResult("Ganhou");
    } else {
      setResult("Perdeu");
    }
  };

  return (
    <View style={styles.container}>
      <Text>Jogo!</Text>
      <TouchableOpacity onPress={() => playPc(1)}>
        <Image source={imageRock} style={styles.image} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => playPc(2)}>
        <Image source={imagePaper} style={styles.image} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => playPc(3)}>
        <Image source={imageScis} style={styles.image} />
      </TouchableOpacity>
      <Text>PC:</Text>
      <Image source={imagePc} style={styles.image} />
      <Text>Result:</Text>
      <Text>{result}</Text>
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
