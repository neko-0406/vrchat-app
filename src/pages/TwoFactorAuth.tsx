import React, { useState } from 'react';

export function TwoFactorAuth() {
  const [code, setCode] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // ここで2FAコードを送信する処理を呼び出します
    console.log('2FA Code:', code);
  };

  return (
    <div>
      <h2>Two-Factor Authentication</h2>
      <p>Please enter the code from your authenticator app.</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="123456"
        />
        <button type="submit">Verify</button>
      </form>
    </div>
  );
}
