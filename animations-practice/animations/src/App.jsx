import { useState } from 'react';
import './App.css';

function App() {
  const [show, updateShow] = useState(false);

  return (
    <>
      <button
        onClick={() => {
          updateShow(!show);
        }}
      >
        Change start state
      </button>
      <div
        className="box red"
        style={
          show ? { width: '100px', height: '100px' } : { width: 0, height: 0 }
        }
      ></div>
    </>
  );
}

export default App;
