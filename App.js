import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {


  return (

    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput placeholder='Your course goal!' style={styles.textInput} />
        <Button title='Add Goal' />
      </View>
      <View style={styles.goalsContainer}>
        <Text>List of Goals...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomColor: '#cccccc',
    borderBottomWidth: 2,
  },
  textInput: {
    borderColor: '#cccccc',
    borderWidth: 1,
    borderRadius: 6,
    width: '70%',
    padding: 8,
  },
  buttonContainer: {
    width: '20%',
  },
  goalsContainer: {
    flex: 5,
  }
});