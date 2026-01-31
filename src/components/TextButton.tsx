import { useNavigation } from "@react-navigation/native";
import { FC } from "react"
import { StyleSheet, Text, TouchableOpacity } from "react-native"
import AuthStackParamList from "../navigation/Auth/AuthStackParamList";
import{ NativeStackNavigationProp } from "@react-navigation/native-stack";

interface ButtonInput {
    title: string
    screen: keyof AuthStackParamList
}

type AuthNavProp = NativeStackNavigationProp<AuthStackParamList>;

const TextButton: FC<ButtonInput> = ({title,screen}) => {
    const navigation = useNavigation<AuthNavProp>();

    return (
        // <TouchableOpacity style={styles.container} onPress={() => navigation.navigate(screen)}>
        //  <Text style={styles.font}> {title}</Text>   
        // </TouchableOpacity>
        <Text style={styles.font} onPress={() => navigation.navigate(screen)}>
             {title}
        </Text>   
    );
};

export default TextButton;

const styles = StyleSheet.create({
    font:{
        fontSize: 18,
        color: '#12cdd9',
        fontWeight: 500
    }
});