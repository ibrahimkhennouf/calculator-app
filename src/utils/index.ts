import { opStyles, suppStyles, symbolStyles } from '@/styles/styleFunctions';
import { evaluate } from 'mathjs';

export const calculatorRows = (
  theme: string,
  icon: any,
  setOperation: any,
  setResult: any,
  operation: string
) => ({
  row1: [
    { value: 'e', type: 'symbol', styles: symbolStyles(theme) },
    { value: '^', type: 'symbol', styles: symbolStyles(theme) },
    { value: 'sin', type: 'symbol', styles: symbolStyles(theme) },
    { value: 'deg', type: 'symbol', styles: symbolStyles(theme) }
  ],
  row2: [
    {
      value: 'Ac',
      type: 'sup',
      styles: suppStyles(theme),
      onPress: () => {
        setOperation(''), setResult('');
      },
      pressable: true
    },
    {
      type: 'sup',
      styles: suppStyles(theme),
      icon: icon,
      onPress: () => {
        setOperation((prev: string) => prev?.slice(0, -1)), setResult('');
      },
      pressable: true
    },
    { value: '/', type: 'operation', styles: opStyles(theme) },
    { value: '*', type: 'operatiom', styles: opStyles(theme) }
  ],
  row3: [
    { value: '7', styles: suppStyles(theme) },
    { value: '8', styles: suppStyles(theme) },
    { value: '9', styles: suppStyles(theme) },
    { value: '-', type: 'operation', styles: opStyles(theme) }
  ],
  row4: [
    { value: '4', styles: suppStyles(theme) },
    { value: '5', styles: suppStyles(theme) },
    { value: '6', styles: suppStyles(theme) },
    { value: '+', type: 'operation', styles: opStyles(theme) }
  ],
  row5: [
    { value: '1', styles: suppStyles(theme) },
    { value: '2', styles: suppStyles(theme) },
    { value: '3', styles: suppStyles(theme) },
    {
      value: '=',
      type: 'operation',
      styles: opStyles(theme),
      onPress: () => {
        try {
          setResult(evaluate(operation));
        } catch (error) {
          setResult('ERROR');
        }
      },
      pressable: true
    }
  ],
  row6: [
    { value: '0', styles: suppStyles(theme) },
    { value: '.', styles: suppStyles(theme) },
    { value: '(', styles: suppStyles(theme) },
    { value: ')', styles: suppStyles(theme) }
  ]
});
