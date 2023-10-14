import { useState } from "react";
import logo from "../../assets/icon.png";
import {
  SafeAreaView,
  TextInput,
  StyleSheet,
  Button,
  Text,
  View,
} from "react-native";

export const Form = ({ navigation }) => {
  const [goalName, setGoalName] = useState("Название");
  const [goalTheme, setGoalTheme] = useState("Категория");

  const handleSubmit = () => {
    console.log({ name: goalName, theme: goalTheme });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.form}>
        <Text>Добавить цель</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setGoalName(text)}
          value={goalName}
        />
        <TextInput
          style={styles.input}
          onChangeText={(text) => setGoalTheme(text)}
          value={goalTheme}
        />
        <Button title="Отправить" onPress={handleSubmit} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  form: {
    width: 300,
    gap: 20,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "100%",
    padding: 5,
    borderBottomColor: "#000",
    borderBottomWidth: 1,
  },
});
