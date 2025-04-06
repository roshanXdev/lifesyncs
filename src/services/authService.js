import axios from 'axios';

const API_URL = '/api/v1/auth';

// Login user
const login = async (email, password) => {
  const response = await axios.post(`${API_URL}/login`, { email, password });
  
  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }

  return response.data;
};

// Sign up user
const signup = async (name, email, password) => {
  const response = await axios.post(`${API_URL}/signup`, { name, email, password });
  
  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }

  return response.data;
};

// Social login
const socialLogin = async (provider) => {
  // In a real implementation, this would redirect to the provider's OAuth page
  // For demo purposes, we'll simulate a successful login
  const mockUser = {
    id: 'social_123',
    name: 'Social User',
    email: `user@${provider}.com`,
    token: 'mock_social_token'
  };
  
  localStorage.setItem('user', JSON.stringify(mockUser));
  return mockUser;
};

// Logout user
const logout = () => {
  localStorage.removeItem('user');
};

// Get current user
const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem('user'));
};

// Get user profile
const getProfile = async () => {
  const user = getCurrentUser();
  const config = {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  };

  const response = await axios.get(`${API_URL}/profile`, config);
  return response.data;
};

const authService = {
  login,
  signup,
  socialLogin,
  logout,
  getCurrentUser,
  getProfile,
};

export default authService;