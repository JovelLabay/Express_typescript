import { StyleSheet } from "react-native";
import { fontSizes, colors } from "../../../styles/styles";

const styles = StyleSheet.create({
  container: {
    height: 250,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  logoName: {
    fontSize: fontSizes.logoTitle,
    color: colors.brandColor,
    fontWeight: "bold",
  },
});

export { styles };
