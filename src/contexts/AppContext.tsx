import { createContext, useContext, ReactNode, useState } from 'react';
import { User } from 'vrchat';

// Contextで共有する値の型定義
interface AppContextType {
  username: string;
  setUsername: (name: string) => void;
  password: string;
  setPassword: (password: string) => void;
  isLoggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
  error: string | null;
  setError: (error: string | null) => void;
  currentUser: User | null;
  setCurrentUser: (user: User | null) => void;
}

// Contextの作成
const AppContext = createContext<AppContextType | undefined>(undefined);

// Context Providerコンポーネント
export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  const value = {
    username,
    setUsername,
    password,
    setPassword,
    isLoggedIn,
    setIsLoggedIn,
    isLoading,
    setIsLoading,
    error,
    setError,
    currentUser,
    setCurrentUser,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

// Contextを使用するためのカスタムフック
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
