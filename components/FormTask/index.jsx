import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { IconSave } from "../../components/Icons";
import { useState } from "react";

export default function FormTask({ onFormSubmit }) {
  const [description, setDescription] = useState();

  const submitTask = () => {
    if (!description) {
      return;
    }

    onFormSubmit(description);
    setDescription("");
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <Text style={styles.text}>Adicionar uma tarefa</Text>
          <Text style={styles.label}>Em que você está trabalhando?</Text>
          <TextInput
            style={styles.input}
            numberOfLines={10}
            multiline={true}
            value={description}
            onChangeText={setDescription}
          />

          <View style={styles.actions}>
            <Pressable style={styles.button} onPress={submitTask}>
              <IconSave />
              <Text>Salvar</Text>
            </Pressable>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#021123",
    gap: 16,
    alignItems: "center",
  },
  text: {
    color: "#fff",
    textAlign: "center",
    fontSize: 26,
  },
  inner: {
    backgroundColor: "#98A0A8",
    width: "90%",
    borderRadius: 8,
    padding: 16,
    gap: 32,
  },
  label: {
    fontSize: 18,
    fontWeight: 600,
  },
  input: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 8,
    height: 100,
    textAlignVertical: "top",
    textAlign: "left",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    justifyContent: "flex-end",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
});
