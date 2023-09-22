import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import ReactNativeModal from "react-native-modal";
import SnackbarComponent from "@/components/general/SnackbarComponent";
import useCheckNewUpdates from "@/hooks/useCheckNewUpdate";
import COLORS from "@/constants/Colors";
import MainStack from "./stacks/MainStack";
import useCheckingForcedStoreUpdate from "@/hooks/useCheckingForcedStoreUpdate";
import useCheckAuthTokenExistance from "@/hooks/useCheckAuthTokenExistance";

function Route() {
  useCheckNewUpdates();
  useCheckingForcedStoreUpdate();
  useCheckAuthTokenExistance();

  const navTheme = DefaultTheme;
  navTheme.colors.background = COLORS.light;

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
