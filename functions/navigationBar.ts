import {
  setBackgroundColorAsync,
  setButtonStyleAsync,
} from "expo-navigation-bar";

import { colors } from "../styles/styles";

const changeNavigationBar = async () => {
  await setBackgroundColorAsync(colors.mainBackgroundColor);
  await setButtonStyleAsync("dark");
};

export { changeNavigationBar };
