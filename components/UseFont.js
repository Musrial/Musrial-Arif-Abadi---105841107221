import { UseFont } from 'expo-font';
import { Text, View } from 'react-native';
export default function App() {
    const App = () => {
        const [dapatFont] = useFonts({
          'MetroBlack': require('./assets/fonts/Metropolis-Black.otf'),
          'MetroBold': require('./assets/fonts/Metropolis-Bold.otf'),
          'MetroLight': require('./assets/fonts/Metropolis-Light.otf'),
          'MetroMedium': require('./assets/fonts/Metropolis-Medium.otf'),
          'MetroSemibold': require('./assets/fonts/Metropolis-SemiBold.otf'),
        });
        if (!dapatFont) {
          return <Text>Font Tidak Ditemukan..</Text>
        }
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style = {{ fontFamily: 'MetroBlack', fontSize: 40 }}>Ini Font Metropolis Black</Text>
      <Text style = {{ fontFamily: 'MetroBold', fontSize: 40 }}>Ini Font Metropolis Bold</Text>
      <Text style = {{ fontFamily: 'MetroLight', fontSize: 40 }}>Ini Font Metropolis Light</Text>
      <Text style = {{ fontFamily: 'MetroMedium', fontSize: 40 }}>Ini Font Metropolis Medium</Text>
      <Text style = {{ fontFamily: 'MetroSemibold', fontSize: 40 }}>Ini Font Metropolis SemiBold</Text>
      <Text>Font Saya</Text>
    </View>
    };
}