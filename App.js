import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {


  return (

    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput placeholder='Your course goal!' style={styles.textInput} />
        <Button title='Add Goal' />
      </View>
      <View>
        <Text>List of Goals...</Text>
        <Text>Hello World!</Text>
        <Text>New Sync test!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    backgroundColor: '#fff',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textInput: {
    borderColor: '#2B60FFFF',
    borderWidth: 1,
    borderRadius: 6,
    width: '70%',
    padding: 8,
  },
  buttonContainer: {
    width: '20%',
  },
});