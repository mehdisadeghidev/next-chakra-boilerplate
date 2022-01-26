import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  FunctionComponent,
} from 'react';
import Cookies from 'js-cookie';
import axios from '@lib/axios';
import type { IAuth, ILoginData, ISignupData } from '@interfaces/auth';

const AuthContext = createContext<IAuth>({
  user: null,
  isAuthenticated: false,
  isLoading: true,
} as IAuth);

export const AuthProvider: FunctionComponent = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getUserData() {
      const authenticated = Cookies.get('authenticated');

      if (authenticated) {
        try {
          const { data } = await axios.get('/v1/auth/user');
          setUser(data);
        } catch {
          //
        }
      }

      setIsLoading(false);
    }

    getUserData();
  }, []);

  const login = async (data: ILoginData) => {
    const {
      data: { access_token: accessToken },
    } = await axios.post('/v1/auth/login', data);

    if (accessToken) {
      const { data: u } = await axios.get('/v1/auth/user');

      Cookies.set('authenticated', '1', { expires: 30 });
      setUser(u);
    }
  };

  const signup = async (data: ISignupData) => {
    const {
      data: { access_token: accessToken },
    } = await axios.post('/v1/auth/signup', data);

    if (accessToken) {
      const { data: u } = await axios.get('/v1/auth/user');

      Cookies.set('authenticated', '1', { expires: 30 });
      setUser(u);
    }
  };

  const logout = async () => {
    await axios.post('/v1/auth/logout');

    Cookies.remove('authenticated');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{
      isAuthenticated: !!user,
      isLoading,
      user,
      login,
      logout,
      signup,
    }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
