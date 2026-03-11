import { StyleSheet, Text, Pressable, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

interface CardItemProps {
  icon: keyof typeof FontAwesome.glyphMap;
  label: string;
  onPress?: () => void;
}

const CardItem: React.FC<CardItemProps> = ({ icon, label, onPress }) => {
  return (
    <Pressable style={styles.cardItemRow} onPress={onPress}>
      {({ pressed }) => (
        <>
          <View style={styles.infoContainer}>
            <View style={styles.iconContainer}>
              <FontAwesome
                name={icon}
                size={16}
                color={pressed ? "#12cdd9" : "#c7c7c7"}
              />
            </View>

            <Text style={styles.accountText}>{label}</Text>
          </View>

          <FontAwesome name="chevron-right" size={14} color="#12cdd9" />
        </>
      )}
    </Pressable>
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
    backgroundColor: "#26262965",
    alignItems: "center",
    justifyContent: "center",
  },
  accountText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "500",
  },
});