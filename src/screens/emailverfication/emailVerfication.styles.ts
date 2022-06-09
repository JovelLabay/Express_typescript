import { StyleSheet } from "react-native";
import { colors, fontSizes } from "../../../styles/styles";

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    backgroundColor: colors.mainBackgroundColor,
  },
  sendValidation: {
    position: "absolute",
    backgroundColor: colors.brandColor,
    height: 50,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 12,
    bottom: 5,
    left: 20,
    right: 20,
  },
  textBtnValidation: {
    color: colors.reduceWhite,
    fontSize: fontSizes.regular,
    fontWeight: "bold",
  },
});

export default styles;
