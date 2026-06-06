// ======================
// User Model
// ======================

export interface User {
name: string;
  email: string;
  password?: string;
  phone?: string;
  address?: string;
  bio?: string;
}

// ======================
// Form Data Types
// ======================

export interface SignupData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface ProfileData {
  name: string;
  email: string;
  phone?: string;
  address?: string;
  bio?: string;
}

// ======================
// API Response Types
// ======================

export interface ApiResult {
  success: boolean;
  message: string;
  user?: User;
}

export interface ChangePasswordData {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
}
// ======================
// Context Types
// ======================

export interface AuthContextType {
  user: User | null;
  error: string;
  success: string;

  signup: (data: SignupData) => boolean;
  login: (data: LoginData) => boolean;
  profile: (data: ProfileData) => boolean;
  logout: () => void;
  clearMessages: () => void;

  changePassword: (
  data: ChangePasswordData
) => boolean;
}