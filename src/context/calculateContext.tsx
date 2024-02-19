import { createContext, useState } from 'react';

interface CalculatorContextProps {
  result: string;
  setResult: React.Dispatch<React.SetStateAction<string>>;
  operation: string;
  setOperation: React.Dispatch<React.SetStateAction<string>>;
}

export const CalculatorContext = createContext<
  CalculatorContextProps | undefined
>(undefined);

const CalculateProvider = ({ children }) => {
  const [result, setResult] = useState('');
  const [operation, setOperation] = useState('');
  return (
    <CalculatorContext.Provider
      value={{ result, setResult, operation, setOperation }}
    >
      {children}
    </CalculatorContext.Provider>
  );
};

export default CalculateProvider;
