import { StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/colors";

const Title = (props) => {
    return (
        <View style={styles.titleContainer}>
            <Text style={styles.title}>{props.children}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    titleContainer: {
        borderWidth: 2,

        width: '80%',
        borderColor: Colors.white,
        borderRadius: 8,
        padding: 12,
        marginBottom: 24,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: Colors.white,
        textAlign: 'center',
    }
});
export default Title;