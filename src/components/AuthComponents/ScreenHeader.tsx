import { useNavigation } from "@react-navigation/native";
import { FC } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import RootStackParamList from "../../navigation/Auth/RootStackParamList";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import Ionicons from "@expo/vector-icons/Ionicons";

interface ScreenHeaderProps {
  title: string | null;
  background?: string;
  showBackButton?: boolean;
}

type AuthNavProp = NativeStackNavigationProp<RootStackParamList>;

const ScreenHeader: FC<ScreenHeaderProps> = ({ title, background }) => {
  const navigation = useNavigation<AuthNavProp>();

  const showBackButton = navigation.canGoBack();

  return (
    <View style={styles.headerContainer}>

      {showBackButton && (
        <View
          style={[
            styles.backButtonContainer,
            background && styles.backButtonBackground
          ]}
        >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back-sharp" size={30} color="white" />
          </TouchableOpacity>
        </View>
      )}

      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
};

export default ScreenHeader;

const styles = StyleSheet.create({
  headerContainer: {
    // borderWidth:1,
    // borderColor: 'white',
    flexDirection: "row",
    height: 50,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  backButtonContainer: {
    width: 40,
    height: 40,
    position: "absolute",
    left: 0,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },
  backButtonBackground: {
    backgroundColor: "#2a2c39",
  },
  headerTitle: {
    fontSize: 24,
    color: "#ffffff",
    fontWeight: 500,
  },
});
