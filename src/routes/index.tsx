import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import ReactNativeModal from "react-native-modal";
import SnackbarComponent from "@/components/general/SnackbarComponent";
import useCheckNewUpdates from "@/hooks/useCheckNewUpdate";
import COLORS from "@/constants/Colors";
import MainStack from "./stacks/MainStack";
import useCheckingForcedStoreUpdate from "@/hooks/useCheckingForcedStoreUpdate";

function Route() {
  useCheckNewUpdates();
  useCheckingForcedStoreUpdate();

  const navTheme = DefaultTheme;
  navTheme.colors.background = COLORS.dark;

  return (
    <SafeAreaProvider>
      <NavigationContainer theme={navTheme}>
        <MainStack />

        {/* GENERAL MODALS */}
        <SnackbarComponent />
        <ReactNativeModal>
          <SnackbarComponent />
        </ReactNativeModal>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default Route;
