import { FontAwesome } from "@expo/vector-icons";
import { FC } from "react";
import { StyleSheet, View, TextInput } from "react-native";

interface SearchBoxProps {
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
}

const SearchBox: FC<SearchBoxProps> = ({ placeholder, value, onChangeText }) => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInputstyle}
          placeholder={placeholder}
          placeholderTextColor={"#8e8e8f"}
          value={value}
          onChangeText={onChangeText}
        />
      </View>

      <View style={styles.iconContainer}>
        <FontAwesome name="search" size={16} color={"#8e8e8f"} />
      </View>
    </View>
  );
};

export default SearchBox;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#373c44",
    height: 50,
    borderRadius: 20,
    alignItems: "center",
    padding: 5,
  },
  inputContainer: {
    flex: 1.9,
    paddingLeft: 10,
  },
  textInputstyle: {
    color: "#ffffff",
  },
  iconContainer: {
    flex: 0.2,
    justifyContent: "center",
    alignItems: "center",
  },
});