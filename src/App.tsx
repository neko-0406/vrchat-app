import './styles/App.css';
import { AppProvider, useAppContext } from './contexts/AppContext';
import LoginMenu from './pages/LoginMenu';
import { TwoFactorAuth } from './pages/TwoFactorAuth';
import MainContent from './pages/MainContent';

function AppContent() {
  const { isLoggedIn, requires2FA } = useAppContext();

  if (isLoggedIn) {
    return <MainContent />;
  }

  if (requires2FA) {
    return <TwoFactorAuth />;
  }

  return <LoginMenu />;
}

function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}

export default App;
