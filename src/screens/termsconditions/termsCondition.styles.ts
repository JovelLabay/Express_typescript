import { StyleSheet } from "react-native";
import { borderWidths, colors, fontSizes } from "../../../styles/styles";

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    backgroundColor: colors.mainBackgroundColor,
  },
  buttonsBottom: {
    position: "absolute",
    height: 70,
    bottom: 5,
    flexDirection: "row",
    left: 10,
    right: 10,
    justifyContent: "space-around",
    alignItems: "center",
  },
  decline: {
    height: 50,
    borderWidth: borderWidths.thick,
    borderColor: colors.brandColor,
    borderRadius: 5,
    width: 180,
    justifyContent: "center",
    alignItems: "center",
  },
  verify: {
    height: 50,
    backgroundColor: colors.brandColor,
    borderRadius: 5,
    width: 180,
    justifyContent: "center",
    alignItems: "center",
  },
  verify_disabled: {
    height: 50,
    backgroundColor: colors.opacityColor,
    borderRadius: 5,
    width: 180,
    justifyContent: "center",
    alignItems: "center",
  },
  btnText1: {
    color: colors.fontColor,
    fontSize: fontSizes.regular,
    fontWeight: "bold",
  },
  btnText2: {
    color: colors.mainBackgroundColor,
    fontSize: fontSizes.regular,
    fontWeight: "bold",
  },
});

export default styles;
