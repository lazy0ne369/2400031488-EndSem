import { useState } from 'react';
import { AuthContext } from './AuthContextBase';

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const stored = sessionStorage.getItem('user');
    return stored ? JSON.parse(stored) : null;
  });
  // loading state omitted (synchronous initialization)

  const login = (username, password) => {
    if (username === 'student' && password === '12345678') {
      const userData = {
        id: 1,
        username,
        name: 'Sohan',
        email: 'sohan@student.com'
      };
      setUser(userData);
      sessionStorage.setItem('user', JSON.stringify(userData));
      return { success: true };
    }
    return { success: false, message: 'Invalid credentials' };
  };

  const logout = () => {
    setUser(null);
    sessionStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};