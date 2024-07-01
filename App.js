import { useFonts } from 'expo-font';
import { View, Text } from 'react-native';

export default function App() {
  const [dapatFont] = useFonts({
    'MetroBlack': require('./assets/font/Metropolis-Black.otf'),
    'MetroBold': require('./assets/font/Metropolis-Bold.otf'),
    'MetroLight': require('./assets/font/Metropolis-Light.otf'),
    'MetroMedium': require('./assets/font/Metropolis-Medium.otf'),
    'MetroSemiBold': require('./assets/font/Metropolis-SemiBold.otf'),
  });

  if (!dapatFont){
    return <Text>Sedang Memuat...</Text>
  }
  return (
    <View style = {{
      flex : 1, 
      justifyContent : 'center', 
      alignItems : 'center'
    }}>
      <Text style = {{ fontnFamily : 'MetroBlack', fontSize : 25}}>Font Metropolis Black</Text>
      <Text style = {{ fontFamily : 'MetroBold', fontSize : 25}}>Font Metropolis Bold</Text>
      <Text style = {{ fontFamily : 'MetroLight', fontSize : 25}}>Font Metropolis Light</Text>
      <Text style = {{ fontFamily : 'MetroMedium', fontSize : 25}}>Metropolis Medium</Text>
      <Text style = {{ fontFamily : 'MetroSemiBold', fontSize : 25}}>Metropolis Semi Bold</Text>
    </View>
  )}
