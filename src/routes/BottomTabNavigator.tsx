import { AntDesign } from "@expo/vector-icons";
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import NavigationTab from "@/components/navigation/Tab";
import METRICS from "@/constants/Metrics";
import COLORS from "@/constants/Colors";
import HomeScreen from "@/screens/main/Home";
import CategoriesScreen from "@/screens/main/Categories";
import { NavigationTabProps } from "@/components/navigation/Tab/types";
import { TabParamList } from "./types";
import MainScreenOptions from "./MainScreenOptions";

const TABWIDTH = METRICS.screenWidth / 5;

function HomeTabBarElement({ focused }: Partial<NavigationTabProps>) {
  return (
    <NavigationTab
      title="HOME"
      iconComponent={<AntDesign name="home" size={24} color={COLORS.grey} />}
      focused={Boolean(focused)}
      tabWidth={TABWIDTH}
    />
  );
}

function CategoryTabBarElement({ focused }: Partial<NavigationTabProps>) {
  return (
    <NavigationTab
      title="CATEGORIES"
      iconComponent={<AntDesign name="book" size={24} color={COLORS.grey} />}
      focused={Boolean(focused)}
      tabWidth={TABWIDTH}
    />
  );
}

const Tabs = createBottomTabNavigator<TabParamList>();

export default function BottomTabNavigator() {
  return (
    <Tabs.Navigator
      screenOptions={MainScreenOptions as BottomTabNavigationOptions}
    >
      <Tabs.Screen
        name="HomeScreen"
        initialParams={{ title: "Home" }}
        options={{
          tabBarIcon: HomeTabBarElement,
        }}
        component={HomeScreen}
      />

      <Tabs.Screen
        name="CategoriesScreen"
        initialParams={{ title: "Categories" }}
        options={{
          tabBarIcon: CategoryTabBarElement,
        }}
        component={CategoriesScreen}
      />
    </Tabs.Navigator>
  );
}
