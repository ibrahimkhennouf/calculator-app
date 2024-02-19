import { StyleSheet, Text, View } from 'react-native';
import React, { useContext } from 'react';
import {
  getPrimaryTextColor,
  getSecondaryTextColor
} from '@/styles/styleFunctions';
import { CalculatorContext } from '@/context/calculateContext';

type Props = {
  theme: string;
};

const DisplayText = ({ theme }: Props) => {
  const { operation, result } = useContext(CalculatorContext);

  return (
    <View style={styles.container}>
      <Text style={[styles.operationText, getPrimaryTextColor(theme)]}>
        {operation}
      </Text>
      {result && (
        <Text style={[styles.resultText, getSecondaryTextColor(theme)]}>
          {'=' + result}
        </Text>
      )}
    </View>
  );
};

export default DisplayText;

const styles = StyleSheet.create({
  container: {
    alignSelf: 'flex-end',
    padding: 20
  },
  operationText: {
    fontSize: 24,
    textAlign: 'right'
  },
  resultText: {
    textAlign: 'right',
    fontSize: 48
  }
});
