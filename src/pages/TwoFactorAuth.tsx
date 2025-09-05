import React, { useState } from 'react';
import { useAppContext } from '../contexts/AppContext';
import { verifyTwoFactorAuth } from '../api/vrchat';

export function TwoFactorAuth() {
  const [code, setCode] = useState('');
  const { setIsLoading, setError, setIsLoggedIn, setRequires2FA, isLoading, error } = useAppContext();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const result = await verifyTwoFactorAuth(code);
      if (result.verified) {
        setIsLoggedIn(true);
        setRequires2FA(false);
        console.log('2FA successful');
      } else {
        throw new Error('Invalid 2FA code');
      }
    } catch (err: any) {
      setError(err.message || 'An unknown error occurred.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='login-screen'>
      <div className='login-container'>
        <h2>2要素認証</h2>
        <p>認証アプリのコードを入力してください。</p>
        <form onSubmit={handleSubmit}>
          {error && <div className='error-message'>{error}</div>}
          <div className='input-group'>
            <input
              type='text'
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder='123456'
              required
              disabled={isLoading}
            />
          </div>
          <button type='submit' className='login-button' disabled={isLoading}>
            {isLoading ? '確認中...' : '確認'}
          </button>
        </form>
      </div>
    </div>
  );
}
