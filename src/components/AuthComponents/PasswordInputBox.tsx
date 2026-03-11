import { FC, useState } from "react"
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native"
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

interface PasswordInputProps {
  label: string;
  placeholder?: string;
  value: string;
  onChangeText?: (text: string) => void;
}

const PasswordInputBox: FC<PasswordInputProps> = ({
  label,
  placeholder,
  value,
  onChangeText,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.labelContainer}>
        <Text style={styles.labelStyle}>{label}</Text>
      </View>

      <View style={styles.inputContainer}>
        <View style={styles.passwordContainer}>
          <View style={styles.passwordInputContainer}>
            <TextInput
              style={styles.textInputstyle}
              placeholder={placeholder}
              placeholderTextColor="#868692"
              secureTextEntry={!isVisible}
              value={value}
              onChangeText={onChangeText}
            />
          </View>

          <TouchableOpacity
            style={styles.hiddenContainer}
            onPress={() => setIsVisible((prev) => !prev)}
          >
            <FontAwesome6
              name={isVisible ? "eye" : "eye-slash"}
              size={20}
              color="white"
            />
          </TouchableOpacity>
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
    height: 64,
    width: "100%",
    maxWidth: 360,
    borderRadius: 30,
    paddingHorizontal: 18,
    justifyContent: "center",
  },
  labelContainer: {
    position: "absolute",
    top: -10,
    left: 16,
    paddingHorizontal: 6,
    backgroundColor: "#1f1d2b",
  },
  labelStyle: {
    color: 'white',
    fontSize: 16
  },
  inputContainer: {
    justifyContent: "center",
  },
  passwordContainer:{
    flexDirection: 'row',
    alignItems: "center",
  },
  passwordInputContainer:{
    flex: 1,
  },
  textInputstyle: {
    color: "white",
    fontSize: 16,
    paddingVertical: 0,
    textAlignVertical: "center",
  },
  hiddenContainer: {
    width: 36,
    alignItems: "center",
    justifyContent: "center",
  }
});
