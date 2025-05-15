import { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

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
  }


  return (
    <View style={styles.container}>
      <GoalInput onChangeText={goalInputHandler} onPress={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList
          alwaysBounceVertical={false}
          showsVerticalScrollIndicator={false}
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <GoalItem text={itemData.item} />
            );
          }}
          keyExtractor={(item, index) => {
            return `${index + item}`;
          }} />

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
  goalsContainer: {
    flex: 5,
  },
});