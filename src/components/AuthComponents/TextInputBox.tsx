import { FC } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
} from "react-native";

interface TextInputProps {
  label: string;
  placeholder: string;
  value: string;
  onChangeText?: (text: string) => void;
}

const TextInputBox: FC<TextInputProps> = ({
  label,
  placeholder,
  value,
  onChangeText
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.labelContainer}>
        <Text style={styles.labelStyle}>{label}</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInputstyle}
          placeholder={placeholder}
          placeholderTextColor={"#868692"}
          value={value}
          onChangeText={onChangeText}
        />
      </View>
    </View>
  );
};

export default TextInputBox;

const styles = StyleSheet.create({
  container: {
    borderWidth: 0.8,
    borderColor: "#868692",
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
    color: "white",
    fontSize: 16,
  },
  inputContainer: {
    justifyContent: "center",
  },
  textInputstyle: {
    color: "white",
    fontSize: 16,
    paddingVertical: 0,
    textAlignVertical: "center",
  },
});
