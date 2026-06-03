import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { ThemeProvider, DarkTheme } from "@react-navigation/native";

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
   
      <ThemeProvider value={DarkTheme}>
        <Drawer screenOptions={{ headerShown: false }}>
          <Drawer.Screen
            name="index"
            options={{
              title: "Home",
            }}
          />
          <Drawer.Screen
            name="details"
            options={{
              title: "Details",
            }}
          />
          <Drawer.Screen
            name="gallery"
            options={{
              title: "Gallery",
            }}
          />
        </Drawer>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}