import { StyleSheet } from "react-native";
import { colors, fontSizes } from "../../../styles/styles";

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    backgroundColor: colors.mainBackgroundColor,
  },
  validationTitle: {
    textAlign: "center",
    marginVertical: 12,
    fontSize: fontSizes.regular,
    fontWeight: "bold",
  },
  sendValidation: {
    position: "absolute",
    backgroundColor: colors.brandColor,
    height: 50,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 12,
    bottom: 20,
    left: 20,
    right: 20,
  },
  textBtnValidation: {
    color: colors.reduceWhite,
    fontSize: fontSizes.regular,
    fontWeight: "bold",
  },
  textBtnValidation_two: {
    color: colors.reduceWhite,
    fontSize: fontSizes.regular,
    fontWeight: "bold",
    paddingVertical: 15,
    textAlign: "center",
  },
  textBtnValidationTitle: {
    color: colors.reduceWhite,
    fontSize: fontSizes.big,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export { styles };
