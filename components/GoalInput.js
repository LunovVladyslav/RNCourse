import { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal, Image } from 'react-native';

export default function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('');

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    }

    function addGoalHandler() {
        props.onPress(enteredGoalText);
        setEnteredGoalText('');
        props.onCancel();
    }


    return (
        <Modal visible={props.visible} animationType='slide'>
            <View style={styles.inputContainer}>
                <Image
                    source={require('../assets/images/goal.png')}
                    style={styles.image}
                />
                <TextInput
                    placeholder='Your course goal!'
                    style={styles.textInput}
                    onChangeText={goalInputHandler}
                    value={enteredGoalText}
                />
                <View style={styles.buttonContainer}>
                    <Button title='Cancel' color='#f31282' onPress={props.onCancel} />
                    <Button title='Add Goal' color='#1270F3FF' onPress={addGoalHandler} />
                </View>
            </View>

        </Modal>

    );
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 2,
        backgroundColor: '#311b6b',
    },
    textInput: {
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        color: '#120438',
        borderWidth: 1,
        borderRadius: 6,
        marginBottom: 8,
        width: '70%',
        padding: 16,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '40%',
    },
    image: {
        width: 100,
        height: 100,
        margin: 20,
    },
})