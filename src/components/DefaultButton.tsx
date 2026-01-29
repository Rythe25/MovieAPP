import { FC } from "react"
import { StyleSheet,TouchableOpacity, View, Text } from "react-native"

interface ButtonText {
    title: string
}

const DefaultButton: FC<ButtonText> = ({title}) => {
    return (
        <TouchableOpacity>
            <View style={styles.buttonStyle}>
                 <Text style={styles.textStyle}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default DefaultButton;

const styles = StyleSheet.create({
    buttonStyle: {
        // borderWidth: 1,
        // borderColor: 'white',
        width: 370,
        height: 65,
        borderRadius: 30,
        backgroundColor: '#12cdd9',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textStyle: {
        color: '#ffffff',
        fontSize: 24,
    }
});