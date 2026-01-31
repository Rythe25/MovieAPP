import { useNavigation } from "@react-navigation/native";
import { FC } from "react"
import { StyleSheet, Text, TouchableOpacity, View, TextInput } from "react-native"
import AuthStackParamList from "../navigation/Auth/AuthStackParamList";
import{ NativeStackNavigationProp } from "@react-navigation/native-stack";

interface PasswordInputProps {
  label: string;
  placeholder?: string;
}

const PasswordInputBox: FC<PasswordInputProps> = ({label,placeholder}) => {
  return (
    <View style={styles.container}>
        <View style={styles.labelContainer}>
            <Text style={styles.labelStyle}> {label} </Text>
        </View>

        <View style={styles.inputContainer}>
<           TextInput 
                style={styles.textInputstyle} 
                placeholder={placeholder}
                placeholderTextColor={'white'}/>

            <View style={styles.hiddenContainer}>

            </View>
        </View>
    </View>
  );
};

export default PasswordInputBox;

const styles = StyleSheet.create({
  container: {
    borderWidth: 0.8,
    borderColor:'#868692',
    height: 70,
    width: 360,
    borderRadius: 30
  },
  labelContainer: {
    borderWidth:1,
    borderColor:'white',
    position: 'relative',
    alignSelf: "flex-start",
    justifyContent: 'center',
    alignItems: 'center',
    top: -10,
    left: 20

  },
  labelStyle: {
    color: 'white',
    backgroundColor: '#1f1d2b',
    fontSize: 16
  },
  inputContainer: {
    // flex: 1,
    // flexDirection: 'row',
  },
  textInputstyle: {
    borderWidth:1,
    borderColor:'white',
    position: 'absolute',
    width: 320,
    top: -10,
  },
  hiddenContainer: {
    borderWidth:1,
    borderColor:'white',
  }
});