import { useState } from 'react';
import './styles/App.css';
import { AppProvider } from './contexts/AppContext';
import LoginMenu from './pages/LoginMenu';

interface AppState {
  appState: 'login' | 'auth' | 'main';
}

function App() {
  const appState = useState<AppState['appState']>('login');

  return (
    <AppProvider>
      {appState[0] === 'login' ? (
        <LoginMenu />
      ) : appState[0] === 'auth' ? (
        <div className='auth-screen'>Auth Screen</div>
      ) : appState[0] === 'main' ? (
        <div className='main-screen'>Main Screen</div>
      ) : null}
    </AppProvider>
  );
}

export default App;
