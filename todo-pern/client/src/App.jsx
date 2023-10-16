import { useEffect, useState } from 'react';

import InputTodo from './components/InputTodo';
import ListTodos from './components/ListTodos';
import Modal from './components/Modal';
import Sidebar from './components/sidebar/Sidebar';

function App() {
  const storedAppState = Boolean(localStorage.getItem('started'));
  const [hasStartedApp, switchAppStart] = useState(
    storedAppState ? true : false
  );

  useEffect(() => {
    localStorage.setItem('started', String(hasStartedApp));
  }, [hasStartedApp]);

  function renderAppStart() {
    if (!hasStartedApp) {
      return <Modal onAppStart={switchAppStart} />;
    } else {
      return (
        <>
          <Sidebar clickedAbout={switchAppStart} />
          <div className="container app-container">
            <InputTodo />
            <ListTodos />
          </div>
        </>
      );
    }
  }

  return <>{renderAppStart()}</>;
}

export default App;
