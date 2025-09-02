import './App.css';
import { AppProvider } from './contexts/AppContext';

function App() {
  return (
    <AppProvider>
      <div className='side-menu'></div>
      <div className='main-content'></div>
    </AppProvider>
  );
}

export default App;
