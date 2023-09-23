import { StyleSheet } from "react-native";
import COLORS from "@/constants/Colors";
import GLOBAL_STYLES from "@/constants/GlobalStyles";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    paddingVertical: 6,
  },
  text: {
    color: COLORS.grey,
    fontSize: 9,
    ...GLOBAL_STYLES.font700,
  },
});

export default styles;
