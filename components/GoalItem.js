import { StyleSheet, View, Text } from "react-native";

export default function GoalItem(props) {
    return (
        <View style={styles.goalItem}>
            <Text style={styles.goalText}>{props.text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    goalItem: {
        marginVertical: 6,
        padding: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
    },
    goalText: {
        color: 'white',
        padding: 8,
    },
});