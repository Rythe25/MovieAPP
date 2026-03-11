import { FC } from "react";
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from "react-native";

interface TextButtonProps {
  title: string;
  onPress?: () => void;
  variant?: "inline" | "block";
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

const TextButton: FC<TextButtonProps> = ({
  title,
  onPress,
  variant = "inline",
  containerStyle,
  textStyle,
}) => {
  if (variant === "block") {
    return (
      <TouchableOpacity
        style={[styles.container, containerStyle]}
        onPress={onPress}
      >
        <Text style={[styles.font, textStyle]}>{title}</Text>
      </TouchableOpacity>
    );
  }

  return (
    <Text style={[styles.font, textStyle]} onPress={onPress}>
      {title}
    </Text>
  );
};

export default TextButton;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  font: {
    fontSize: 18,
    color: "#12cdd9",
    fontWeight: 500,
  },
});
