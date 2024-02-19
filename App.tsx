import Calculator from '@/components/calculator'
import Display from '@/components/display'
import CalculateProvider from '@/context/calculateContext'
import { getBackgroundColor } from '@/styles/styleFunctions'
import { Dimensions, Platform, SafeAreaView, StyleSheet, Text, useColorScheme } from 'react-native'

export default function App() {
  const theme = useColorScheme()

  return (
    <CalculateProvider>
      {Platform.OS === 'web' && Dimensions.get('screen').width > 476 ? (
        <Text>please open it in a mobile device</Text>
      ) : (
        <SafeAreaView style={[styles.container, getBackgroundColor(theme)]}>
          <Display />
          <Calculator />
        </SafeAreaView>
      )}
    </CalculateProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: Platform.OS === 'web' ? 'stretch' : 'center',
    gap: 20,
  },
})
