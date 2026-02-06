import { Text, TextInput, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { Pressable } from "react-native";

function EditPage() {
  const { itemEdit } = useLocalSearchParams();

  const parsedItem = JSON.parse(itemEdit)

  const [title, setTitle] = useState(parsedItem.title);



  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Edit Post</Text>

      <Text style={styles.label}>Title:</Text>
      <TextInput
        style={styles.Input}
        value={title}
        onChangeText={setTitle}/>
        <Pressable style={styles.updateButton} onPress={() => console.log("Update pressed")} handlePress={itemEdit}>
          <Text style={styles.updateButtonText}>Update</Text>
        </Pressable>
    </SafeAreaView>
  );
}

export default EditPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  Input: {
    padding: 10,
    width: "80%",
    backgroundColor: "white",
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 10,
    borderColor: "gray",
    borderWidth: 2,
    marginBottom: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    marginLeft: 10,
    marginTop: 10,
  },
  label: {
    fontSize: 18,
    marginLeft: 10,
    marginBottom: 3,
  },
  Input1: {
    padding: 10,
    width: "80%",
    height: 200,
    backgroundColor: "white",
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 10,
    borderColor: "gray",
    borderWidth: 2,
  },
    updateButton: {
    backgroundColor: "#007BFF",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    marginHorizontal: 10,
    marginRight: 70,
    },
});
