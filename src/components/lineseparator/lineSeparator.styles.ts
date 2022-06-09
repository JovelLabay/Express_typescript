import { StyleSheet } from "react-native";
import { colors, opacity } from "../../../styles/styles";

const styles = StyleSheet.create({
  container: {
    marginVertical: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  left: {
    borderBottomWidth: 1,
    width: "40%",
    borderBottomColor: colors.fontColor,
    opacity: opacity.almost,
  },
  right: {
    borderBottomWidth: 1,
    width: "40%",
    borderBottomColor: colors.fontColor,
    opacity: opacity.almost,
  },
  or: {
    marginHorizontal: 12,
  },
});

export default styles;
