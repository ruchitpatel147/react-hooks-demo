import React from 'react';
import './App.css';
import UseStateHooks from './components/UseStateHooks'
import UseStateObject from './components/UseStateObject'
import UseEffect from './components/UseEffect'
import UseEffectWithEvent from './components/UseEffectWithEvent'
import UseEffectDataFetch from './components/UseEffectDataFetch'
import UseContextComponentA from './components/UseContextComponentA';
import UseReducerHooks from './components/UseReducerHooks';
import UseReducerDataFetch from './components/UseReducerDataFetch';
import Container from './components/UseCallback/Container';
import UseMemo from './components/UseMemo';
import UseRef from './components/UseRef';
import CustomHooks from './components/CustomHooks';
import CustomHooks1 from './components/CustomHooks1';
import Counter1 from './components/Counter1';
import Counter2 from './components/Counter2';

export const hello = React.createContext('hello');


function App() {
  return (
    <div className="App">
      <Counter1/>
      <Counter2/>
    </div>
  );
}

export default App;
