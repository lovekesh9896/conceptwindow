import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import Window from './container/Window/Window';

function App() {
  return (
    <BrowserRouter>
        <div className="App">
            <Window />
        </div>
    </BrowserRouter>
  );
}

export default App;
