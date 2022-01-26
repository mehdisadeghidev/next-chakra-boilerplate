export interface ICurrentUser {
  name: string,
  email: string,
}

export interface IAuth {
  isLoading: boolean;
  isAuthenticated: boolean;
  user: ICurrentUser | null;
  login: (data: ILoginData) => Promise<void>;
  signup: (data: ISignupData) => Promise<void>;
  logout: () => Promise<void>;
}

export interface ILoginData {
  email: string,
  password: string
}

export interface ISignupData {
  name: string,
  email: string,
  password: string
}
