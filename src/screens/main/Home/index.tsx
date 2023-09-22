import ScreenWrapper from "@/components/general/ScreenWrapper";
import Text from "@/components/general/Text";
import styles from "./styles";

export default function HomeScreen() {
  return (
    <ScreenWrapper>
      <Text style={styles.title} i18nKey="HOME" />
    </ScreenWrapper>
  );
}
