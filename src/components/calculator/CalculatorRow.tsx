import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import Button from '@/shared/Button'
import { CalculatorContext } from '@/context/calculateContext'

type rowProps = {
  rows: any[]
}

const CalculatorRow = ({ rows }: rowProps) => {
  const { setOperation } = useContext(CalculatorContext)

  return (
    <View style={styles.row}>
      {rows.map((row, i) => (
        <Button
          key={i}
          style={row.styles}
          onPress={
            row?.pressable ? () => row?.onPress() : () => setOperation((prev) => prev + row.value)
          }
        >
          {row.icon ? (
            row.icon
          ) : (
            <Text
              style={{
                color: row.styles?.color,
                fontWeight: 'bold',
                textAlign: 'center',
              }}
            >
              {row.value}
            </Text>
          )}
        </Button>
      ))}
    </View>
  )
}

export default CalculatorRow

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'center',
  },
})
