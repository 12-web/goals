import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { Form } from "./src/components/Form";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
    </View>
  );
}

function HomeView({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home View</Text>
      <Button title="Go to Form" onPress={() => navigation.navigate("Form")} />
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {
        <Stack.Navigator initialRouteName="HomeView">
          <Stack.Screen name="Form" component={Form} />
          <Stack.Screen name="HomeView" component={HomeView} />
        </Stack.Navigator>
        // <View style={styles.container}>
        //   <Text>Добавьте цель</Text>
        //   <Form />
        // </View>
      }
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    paddingTop: 80,
  },
});
