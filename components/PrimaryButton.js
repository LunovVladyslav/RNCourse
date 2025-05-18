import { Pressable, StyleSheet, Text, View } from "react-native";

const PrimaryButton = (props) => {
    function pressHandler() {
        props.onPress();
    }

    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable
                onPress={pressHandler}
                android_ripple={{ color: "#640233" }}
                style={({ pressed }) =>
                    pressed
                        ? [styles.buttonInnerContainer, styles.pressed]
                        : styles.buttonInnerContainer}
            >
                <Text style={styles.buttonText}>{props.children}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: "hidden",
    },
    buttonInnerContainer: {
        backgroundColor: "#72063c",
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2, // for Android
        shadowColor: "black", // for iOS    
        shadowOffset: { width: 0, height: 2 }, // for iOS
        shadowRadius: 6, // for iOS
        shadowOpacity: 0.25, // for iOS
    },
    buttonText: {
        color: "white",
        textAlign: "center",
        fontSize: 18,
    },
    pressed: {
        opacity: 0.75,
    },
});

export default PrimaryButton;