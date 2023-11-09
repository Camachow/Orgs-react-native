import { SafeAreaView, StatusBar, View } from 'react-native';
import { 
  useFonts, 
  Montserrat_400Regular, 
  Montserrat_700Bold 
} from '@expo-google-fonts/montserrat';
import * as SplashScreen from 'expo-splash-screen';

import Cesta from './src/screens/Cesta'
import mockCesta from './src/mocks/cesta'
import { useCallback } from 'react';

SplashScreen.preventAutoHideAsync();

export default function App() {

  let [fontsLoaded, fontError] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold,
  });

  const onLayoutRootView = useCallback(async () => {
    if(fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError){
    return null;
  }

  return (
    <SafeAreaView onLayout={onLayoutRootView}>
      <StatusBar/>
      <Cesta {...mockCesta} />
    </SafeAreaView>
  );
}