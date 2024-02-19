import React from 'react';
import DisplayText from './DisplayText';
import { useColorScheme } from 'react-native';

const Display = () => {
  const theme = useColorScheme();

  return <DisplayText theme={theme} />;
};

export default Display;
