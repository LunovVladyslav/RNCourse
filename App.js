import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      enteredGoalText,
    ]);
    setEnteredGoalText('');
  }


  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput placeholder='Your course goal!' style={styles.textInput} onChangeText={goalInputHandler} />
        <Button title='Add Goal' onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        {courseGoals.map((goal, index) => (
          <View key={index} style={styles.goalItem}>
            <Text style={{ color: 'white' }}>{index + 1}. {goal}</Text>
          </View>
        ))}
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
  },
  goalItem: {
    marginVertical: 6,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
});