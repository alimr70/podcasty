import styles from "./styles";
import ScreenWrapper from "@/components/general/ScreenWrapper";
import Text from "@/components/general/Text";

export default function CategoriesScreen() {
  return (
    <ScreenWrapper>
      <Text style={styles.title} i18nKey="CATEGORIES" />
    </ScreenWrapper>
  );
}
