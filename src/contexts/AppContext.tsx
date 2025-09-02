import { createContext, useContext, ReactNode, useState } from 'react';

// Contextで共有する値の型定義
interface AppContextType {
  // ここに共有したい状態の型を追加します
  // 例: theme: string;
  // 例: setTheme: (theme: string) => void;
  userName: string | undefined;
  setUserName?: (name: string) => void;
  passwd: string | undefined;
  setPasswd?: (passwd: string) => void;
}

// Contextの作成
const AppContext = createContext<AppContextType | undefined>(undefined);

// Context Providerコンポーネント
export const AppProvider = ({ children }: { children: ReactNode }) => {
  // ここに状態管理のロジックを記述します
  // const [theme, setTheme] = useState('light');
  const [userName, setUserName] = useState<string | undefined>(undefined);
  const [passwd, setPasswd] = useState<string | undefined>(undefined);

  const value = {
    // theme,
    // setTheme,
    userName,
    setUserName,
    passwd,
    setPasswd,
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
