import { View, StyleSheet, Text } from "react-native";
import Colors from "../../constants/colors";

const NumberContainer = (props) => {
    return (
        <View style={styles.numberContainer}>
            <Text style={styles.numberText}>{props.children}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    numberContainer: {
        borderWidth: 4,
        borderColor: Colors.accent500,
        padding: 24,
        borderRadius: 8,
        margin: 24,
        alignItems: "center",
        justifyContent: "center",
    },
    numberText: {
        color: Colors.accent500,
        fontSize: 36,
        fontWeight: "bold",
    },
});

export default NumberContainer;