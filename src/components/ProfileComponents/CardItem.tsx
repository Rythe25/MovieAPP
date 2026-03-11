import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

interface CardItemProps {
  icon: keyof typeof FontAwesome.glyphMap;
  label: string;
  onPress?: () => void;
}

const CardItem: React.FC<CardItemProps> = ({ icon, label, onPress }) => {
  return (
    <TouchableOpacity style={styles.cardItemRow} onPress={onPress}>
      <View style={styles.infoContainer}>
        <View style={styles.iconContainer}>
          <FontAwesome name={icon} size={16} color="#0b0f1a" />
        </View>

        <Text style={styles.accountText}>{label}</Text>
      </View>

      <FontAwesome name="chevron-right" size={14} color="#12cdd9" />
    </TouchableOpacity>
  );
};

export default CardItem;

const styles = StyleSheet.create({
  cardItemRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 14,
    paddingHorizontal: 16,
  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  iconContainer: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: "#868692",
    alignItems: "center",
    justifyContent: "center",
  },
  accountText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "500",
  },
});