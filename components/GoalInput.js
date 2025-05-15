import { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

export default function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('');

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    }

    function addGoalHandler() {
        props.onPress(enteredGoalText);
        setEnteredGoalText('');
    }


    return (
        <View style={styles.inputContainer}>
            <TextInput
                placeholder='Your course goal!'
                style={styles.textInput}
                onChangeText={goalInputHandler}
                value={enteredGoalText}
            />
            <Button title='Add Goal' onPress={addGoalHandler} />
        </View>
    );
}

const styles = StyleSheet.create({
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
})