import React from 'react';
import Rectangle from './Rectangle';
import Circle from './Circle';
import { PositionProvider } from './PositionContext';

const App = () => {
  return (
    <PositionProvider>
      <div style={{ position: 'relative', width: 400, height: 400 }}>
        <Rectangle />
        <Circle />
      </div>
    </PositionProvider>
  );
};

export default App;