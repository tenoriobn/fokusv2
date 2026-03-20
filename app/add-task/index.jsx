import { Pressable, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { IconSave } from "../../components/Icons";

export default function AddTask() {
  return (
    <SafeAreaView>
      <Text>Adicionar uma tarefa</Text>

      <View>
        <Text>Em que você está trabalhando?</Text>
        <TextInput />
        <Pressable>
          <IconSave />
          <Text>Salvar</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
