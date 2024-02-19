import { calculatorRows } from '@/utils'
import { Ionicons } from '@expo/vector-icons'
import React, { useContext } from 'react'
import { Platform, StyleSheet, View } from 'react-native'
import CalculatorRow from './CalculatorRow'
import { CalculatorContext } from '@/context/calculateContext'

type Props = {
  theme?: string
}

const CalculatorKeyboard = ({ theme }: Props) => {
  const { operation, setOperation, setResult } = useContext(CalculatorContext)

  const rows = calculatorRows(
    theme,
    <Ionicons name="backspace-outline" size={25} color="grey" style={styles.center} />,
    setOperation,
    setResult,
    operation
  )

  return (
    <View style={styles.container}>
      <CalculatorRow rows={rows.row1} />
      <CalculatorRow rows={rows.row2} />
      <CalculatorRow rows={rows.row3} />
      <CalculatorRow rows={rows.row4} />
      <CalculatorRow rows={rows.row5} />
      <CalculatorRow rows={rows.row6} />
    </View>
  )
}

export default CalculatorKeyboard

const styles = StyleSheet.create({
  center: {
    textAlign: 'center',
  },
  container: {
    gap: 10,
    alignItems: Platform.OS === 'web' ? 'stretch' : 'center',
  },
})
