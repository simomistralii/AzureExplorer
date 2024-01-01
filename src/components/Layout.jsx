import React, { useState, useEffect } from 'react';
import { useUser } from '../contexts/UserContext';
import Navbar from './navbar';
import Footer from './footer';
import LoginPage from '../pages/LoginPage';
import AuthService from '../services/AuthService';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  const [error, setError] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({});
  const { updateUser } = useUser();
  const authService = new AuthService();

  const login = async () => {
    try {
      const user = await authService.login();
      setIsAuthenticated(true);
      setUser(user);
      updateUser(user)
    } catch (err) {
      console.error('Login error:', err);
      setIsAuthenticated(false);
      setUser({});
      setError(err.message);
    }
  };

  const logout = () => {
    authService.logout();
    setIsAuthenticated(false);
    setUser({});
  };

  useEffect(() => {
    const storedTokens = authService.getStoredTokens();

    if (storedTokens) {
      // Check if tokens are still valid or refresh if needed
      // Set state to indicate the user is authenticated
      setIsAuthenticated(true);
      // Set the user object from stored tokens
      setUser(storedTokens.user);
    }
  }, []);

  return (
    <div>
      {isAuthenticated ? (
        <div className="relative min-h-full h-[100vh] overflow-y-hidden">
          <Navbar />
          <main className="pt-2 pb-8 px-4 overflow-y-auto h-[calc(100%-56px)]">
            <Outlet />
          </main>
          <Footer logout={logout} user={user.account} />
        </div>
      ) : (
        <LoginPage login={login} user={user.account} />
      )}
    </div>
  );
};

export default Layout;
