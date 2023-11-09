import { SafeAreaView, StatusBar, View } from 'react-native';
import { 
  useFonts, 
  Montserrat_400Regular, 
  Montserrat_700Bold 
} from '@expo-google-fonts/montserrat';

import Cesta from './src/screens/Cesta'
import mockCesta from './src/mocks/cesta'

export default function App() {

  let [fontsLoaded] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold
  });

  if (!fontsLoaded) {
    return <View/>;
  }

  return (
    <SafeAreaView>
      <StatusBar/>
      <Cesta {...mockCesta} />
    </SafeAreaView>
  );
}