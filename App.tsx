import { ThemeProvider } from 'styled-components'
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { Loading } from '@components/Loading';
import defaultTheme from './src/theme'
import { useFonts } from 'expo-font'
import { Routes } from '@routes/index';

export default function App() {
  const [fontsLoaded] = useFonts({
    'NunitoSans-Regular': require('./assets/fonts/NunitoSans_7pt-Regular.ttf'),
    'NunitoSans-Bold': require('./assets/fonts/NunitoSans_7pt-Bold.ttf'),
  })

  return (
    <ThemeProvider theme={ defaultTheme }>
      <StatusBar 
        barStyle='dark-content'
        backgroundColor='transparent'
        translucent
      />
      { !fontsLoaded ? <Loading /> : <Routes />}
    </ThemeProvider>
  )
}
