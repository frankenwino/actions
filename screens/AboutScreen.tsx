import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button, StyleSheet, Text, View } from "react-native";
import { RootStackParamList } from "../App";

type AboutProps = NativeStackScreenProps<RootStackParamList, "About">;

export default function AboutScreen({ navigation }: AboutProps) {
  return (
    <View style={styles.container}>
      <Text>About Screen</Text>
      <Button
        title="Go to Home screen"
        onPress={() => navigation.navigate("Home")}
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
});
