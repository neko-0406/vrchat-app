import { useState } from 'react';

export default function LoginMenu() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // TODO: ログイン処理を実装
    console.log('Login attempt with:', { username, password });
  };

  return (
    <div className='login-screen'>
      <div className='login-container'>
        <h2>VRChatにログイン</h2>
        <form onSubmit={handleSubmit}>
          <div className='input-group'>
            <label htmlFor='username'>ユーザー名</label>
            <input type='text' id='username' value={username} onChange={(e) => setUsername(e.target.value)} required />
          </div>
          <div className='input-group'>
            <label htmlFor='password'>パスワード</label>
            <input
              type='password'
              id='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type='submit' className='login-button'>
            ログイン
          </button>
        </form>
      </div>
    </div>
  );
}
