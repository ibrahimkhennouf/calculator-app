import React from 'react';
import { useColorScheme } from 'react-native';
import CalculatorKeyboard from './CalculatorKeyboard';

const Calculator = () => {
  const theme = useColorScheme();

  return <CalculatorKeyboard theme={theme} />;
};

export default Calculator;
