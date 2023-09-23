import { I18nManager, StyleSheet } from "react-native";
import COLORS from "@/constants/Colors";
import GLOBAL_STYLES from "@/constants/GlobalStyles";

const styles = StyleSheet.create({
  text: {
    color: COLORS.grey,
    fontSize: 14,
    writingDirection: I18nManager.isRTL ? "rtl" : "ltr",
    ...GLOBAL_STYLES.font500,
  },
});

export default styles;
