import React from "react";
import { Modal, StyleSheet, Text, View } from "react-native";
import { BlurView } from "expo-blur";
import { FontAwesome } from "@expo/vector-icons";
import TextButton from "../AuthComponents/TextButton";

type PopupModalProps = {
  visible: boolean;
  loading?: boolean;
  onCancel: () => void;
  onConfirm: () => void;
  title?: string;
  message?: string;
  confirmText?: string;
  cancelText?: string;
  iconName?: React.ComponentProps<typeof FontAwesome>["name"];
};

const PopupModal = ({
  visible,
  loading = false,
  onCancel,
  onConfirm,
  title = "Log out",
  message = "Are you sure you want to log out?",
  confirmText = "Log Out",
  cancelText = "Cancel",
  iconName = "question-circle",
}: PopupModalProps) => {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.backdrop}>
        <BlurView intensity={40} tint="dark" style={StyleSheet.absoluteFill} />
        <View style={styles.dim} />

        <View style={styles.card}>
          <View style={styles.iconWrap}>
            <View style={styles.iconBadge}>
              <FontAwesome name={iconName} size={26} color="#0d0d11" />
            </View>
          </View>

          <Text style={styles.title}>{title}</Text>
          <Text style={styles.message}>{message}</Text>

          <View style={styles.actions}>
            <TextButton
              variant="block"
              title={loading ? "Logging Out..." : confirmText}
              onPress={loading ? undefined : onConfirm}
              containerStyle={[styles.buttonBase, styles.confirmButton, loading && styles.disabled]}
              textStyle={styles.confirmText}
            />

            <TextButton
              variant="block"
              title={cancelText}
              onPress={loading ? undefined : onCancel}
              containerStyle={[styles.buttonBase, styles.cancelButton, loading && styles.disabled]}
              textStyle={styles.cancelText}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default PopupModal;

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  dim: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(7,8,12,0.45)",
  },
  card: {
    width: "100%",
    backgroundColor: "#1f1d2b",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#2f3142",
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 20,
  },
  iconWrap: {
    alignItems: "center",
    marginBottom: 12,
  },
  iconBadge: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#12cdd9",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 5,
    borderColor: "#d4af37",
  },
  title: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 8,
    textAlign: "center",
  },
  message: {
    color: "#b8b8c0",
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 20,
    textAlign: "center",
  },
  actions: {
    flexDirection: "row",
    gap: 12,
  },
  buttonBase: {
    flex: 1,
    height: 52,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1.5,
    borderColor: "#12cdd9",
  },
  cancelButton: {
    backgroundColor: "transparent",
  },
  confirmButton: {
    backgroundColor: "#12cdd9",
  },
  cancelText: {
    color: "#12cdd9",
    fontSize: 16,
    fontWeight: "500",
  },
  confirmText: {
    color: "#0d0d11",
    fontSize: 16,
    fontWeight: "600",
  },
  disabled: {
    opacity: 0.6,
  },
});
