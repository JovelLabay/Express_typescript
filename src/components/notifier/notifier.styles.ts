import { StyleSheet } from "react-native";
import { colors, fontSizes } from "../../../styles/styles";

const styles = StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: colors.error,
    marginHorizontal: 10,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
  },
  containerSuccess: {
    height: 40,
    backgroundColor: colors.brandColor,
    marginHorizontal: 10,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
  },
  error: {
    color: colors.reduceWhite,
    fontSize: fontSizes.regular,
  },
});

export default styles;
