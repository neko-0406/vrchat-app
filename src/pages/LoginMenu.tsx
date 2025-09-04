import { login } from '../api/vrchat';
import { useAppContext } from '../contexts/AppContext';

export default function LoginMenu() {
  const {
    username,
    setUsername,
    password,
    setPassword,
    isLoading,
    setIsLoading,
    error,
    setError,
    setIsLoggedIn,
  } = useAppContext();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const currentUser = await login(username, password);
      setIsLoggedIn(true);
      console.log('Login successful:', currentUser);
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
        <h2>VRChatにログイン</h2>
        <form onSubmit={handleSubmit}>
          {error && <div className='error-message'>{error}</div>}
          <div className='input-group'>
            <label htmlFor='username'>ユーザー名</label>
            <input
              type='text'
              id='username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              disabled={isLoading}
            />
          </div>
          <div className='input-group'>
            <label htmlFor='password'>パスワード</label>
            <input
              type='password'
              id='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={isLoading}
            />
          </div>
          <button type='submit' className='login-button' disabled={isLoading}>
            {isLoading ? 'ログイン中...' : 'ログイン'}
          </button>
        </form>
      </div>
    </div>
  );
}
