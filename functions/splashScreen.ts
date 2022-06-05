import { preventAutoHideAsync, hideAsync } from "expo-splash-screen";

// PROLONG SPLASH SCREEN
const prolongSplash = async () => {
  await preventAutoHideAsync();
};
// SHOW SPLASH SCREEN
const showScreen = async () => {
  await hideAsync();
};

export { prolongSplash, showScreen };
