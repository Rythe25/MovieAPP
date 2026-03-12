import { FC } from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import RootStackParamList from "../../navigation/Auth/RootStackParamList";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

interface ButtonProps {
  title: string;
  onPress?: () => void;
  screen?: keyof RootStackParamList;
}

type AuthNavProp = NativeStackNavigationProp<RootStackParamList>;

const DefaultButton: FC<ButtonProps> = ({ title, onPress, screen }) => {
  const navigation = useNavigation<AuthNavProp>();

  return (
    <TouchableOpacity onPress={onPress}>
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
    backgroundColor: "#12cdd9",
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    color: "#ffffff",
    fontSize: 24,
  },
});
