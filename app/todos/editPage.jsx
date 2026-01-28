import { Text, TextInput, View, StyleSheet } from "react-native";
const EditPage = () => {
    return(
        <View style = {styles.container}>
            <Text>EditPage</Text>
            <TextInput style = {styles.Input}></TextInput>
        </View>
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
  backgroundColor: 'gray',
  marginLeft: 10,
  marginRight: 10,
  borderRadius: 10,
}

})