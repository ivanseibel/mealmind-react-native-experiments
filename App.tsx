import { ThemeProvider } from 'styled-components'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Loading } from '@components/Loading';
import defaultTheme from './src/theme'
import { useFonts } from 'expo-font'

export default function App() {
  const [fontsLoaded] = useFonts({
    'NunitoSans-Regular': require('./assets/fonts/NunitoSans_7pt-Regular.ttf'),
    'NunitoSans-Bold': require('./assets/fonts/NunitoSans_7pt-Bold.ttf'),
  })

  return (
    <ThemeProvider theme={ defaultTheme }>
      { !fontsLoaded ? <Loading /> : (
        <View style={styles.container}>
          <Text style={styles.text}>Open up App.tsx to start working on your app!</Text>
          <StatusBar style="auto" />
        </View>
      )}
    </ThemeProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'NunitoSans-Bold',
    fontSize: 16,
    color: '#000',
  }
});
