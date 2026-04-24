// counterContext.tsx
import { createContext, useReducer, useContext, ReactNode } from 'react';

const CounterContext = createContext < any > (null);

const initialState = { count: 0 };

function reducer(state: typeof initialState, action: { type: string }) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

export const CounterProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
};

export const useCounter = () => useContext(CounterContext);

// А вот как использовать:

// App.tsx
import { CounterProvider, useCounter } from './counterContext';

function Counter() {
  const { state, dispatch } = useCounter();

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </div>
  );
}

export default function App() {
  return (
    <CounterProvider>
      <Counter />
    </CounterProvider>
  );
}