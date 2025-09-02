import { useState } from 'react';
import './App.css';
import { AppProvider } from './contexts/AppContext';

interface AppState {
  appState: 'login' | 'auth' | 'main';
}

function App() {
  const appState = useState<AppState['appState']>('login');

  return (
    <AppProvider>
      {appState[0] === 'login' ? (
        <div className='login-screen'>Login Screen</div>
      ) : appState[0] === 'auth' ? (
        <div className='auth-screen'>Auth Screen</div>
      ) : appState[0] === 'main' ? (
        <div className='main-screen'>Main Screen</div>
      ) : null}
    </AppProvider>
  );
}

export default App;
