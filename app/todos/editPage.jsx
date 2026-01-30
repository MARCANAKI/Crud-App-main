import { Text, TextInput, View, StyleSheet } from "react-native";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
const EditPage = () => {
    return(
        <SafeAreaView style = {styles.container}>
            <Text style = {styles.header}>Edit Post</Text>
            <Text style = {styles.label}>Title:</Text>
            <TextInput style = {styles.Input}></TextInput>
            <Text style = {styles.label}>Post:</Text>
            <TextInput style = {styles.Input1}></TextInput>
        </SafeAreaView>

    )
}

export default EditPage;

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: 'white'
},
Input: {
  padding: 10,
  width: '80%',
  backgroundColor: 'white',
  marginLeft: 10,
  marginRight: 10,
  borderRadius: 10,
  borderColor: 'gray',
  borderWidth: 2,
  marginBottom: 20,
},
header: {
    fontSize: 24,
    fontWeight: 'bold',
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
  width: '80%',
  height: 200,
  backgroundColor: 'white',
  marginLeft: 10,
  marginRight: 10,
  borderRadius: 10,
  borderColor: 'gray',
  borderWidth: 2,
}
})