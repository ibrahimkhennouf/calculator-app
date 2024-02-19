import React from 'react'
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native'

type Props = {
  style?: {
    flex: number
    color: string
    backgroundColor: string
    marginLeft: number
  }
  children: React.ReactNode
  onPress?: () => void
}

const Button = ({ children, style, onPress }: Props) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View
        style={[
          styles.container,
          {
            backgroundColor: style?.backgroundColor,
            marginLeft: style?.marginLeft,
            flex: style?.flex,
          },
        ]}
      >
        {children}
      </View>
    </TouchableWithoutFeedback>
  )
}

export default Button

const styles = StyleSheet.create({
  container: {
    maxWidth: '38%',
    width: '18%',
    height: 50,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: 'transparent',
    marginBottom: 10,
    justifyContent: 'center',
  },
})
