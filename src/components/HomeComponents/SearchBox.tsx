import { useNavigation } from "@react-navigation/native";
import { FontAwesome} from "@expo/vector-icons";
import { FC } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from "react-native";

interface SearchBoxProps {
  placeholder?: string;
}

const SearchBox: FC<SearchBoxProps> = ({ placeholder }) => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInputstyle}
          placeholder={placeholder}
          placeholderTextColor={"#8e8e8f"}
        />
      </View>

      <View style={styles.iconContainer}>
        <FontAwesome style={styles.searchIcon} name="search" size={16} color={"#8e8e8f"}/>
      </View>

    </View>
  );
};

export default SearchBox;

const styles = StyleSheet.create({
  container: {
    // borderWidth: 1,
    // borderColor: 'red',
    flexDirection: 'row',
    backgroundColor : "#373c44",
    height: 50,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    padding: 5
  },
  inputContainer: {
    flex: 1.9,
    paddingLeft: 10,
  },
  textInputstyle: {
    // borderWidth:1,
    // borderColor:'red',
    color: "#8e8e8f",
  },
  iconContainer:{
    flex:0.2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  searchIcon: {
    // borderWidth:1,
    // borderColor:'red',
  }
});
