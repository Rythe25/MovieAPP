import { useNavigation } from "@react-navigation/native";
import { FC } from "react"
import { StyleSheet, Text, TouchableOpacity, View, TextInput } from "react-native"
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

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
            <View style={styles.passwordContainer}>
                <View style={styles.passwordInputContainer}>
                    <TextInput 
                        style={styles.textInputstyle} 
                        placeholder={placeholder}
                        placeholderTextColor={'white'}/>
                </View>
                <View style={styles.hiddenContainer}>
                    <FontAwesome6 name="eye-low-vision" size={24} color="white" />
                </View>

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
    // borderWidth:1,
    // borderColor:'white',
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
    borderWidth:1,
    // borderColor:'white',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    top: -10,
  },
  passwordContainer:{
    flexDirection: 'row',
  },
  passwordInputContainer:{
    // borderWidth:1,
    // borderColor:'white',
    alignSelf: "flex-start",
  },
  textInputstyle: {
    // borderWidth:1,
    // borderColor:'white',
    width:270
  },
  hiddenContainer: {
    // borderWidth:1,
    // borderColor:'white',
    width:50,
    justifyContent:'center',
    alignItems: 'center'
  }
});