import { useState, useEffect } from 'react';
import authService from '../services/authService';
import { FaGoogle, FaGithub, FaUserCircle } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [user, setUser] = useState(null);

  useEffect(() => {
    const currentUser = authService.getCurrentUser();
    if (currentUser) {
      setUser(currentUser);
    }
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const userData = await authService.signup(name, email, password);
      setUser(userData);
      setShowSignupModal(false);
      resetForm();
    } catch (error) {
      setError(error.response?.data?.message || 'Signup failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialLogin = async (provider) => {
    try {
      await authService.socialLogin(provider);
    } catch (error) {
      setError(`${provider} login failed. Please try again.`);
    }
  };

  const resetForm = () => {
    setEmail('');
    setPassword('');
    setName('');
    setError('');
  };

  const handleLogout = () => {
    authService.logout();
    setUser(null);
  };

  const connectWallet = () => {
    // This would be replaced with actual Web3 wallet connection logic
    console.log('Connecting wallet...');
    setIsConnected(true);
  };

  return (
    <nav className="bg-white shadow-md py-4 fixed w-full z-10">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center">
          <svg className="h-8 w-8 text-blue-600 mr-2 rotate-center" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
          </svg>
          <span className="text-2xl font-bold text-blue-600">LifeSync</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-gray-700 hover:text-blue-600 transition duration-300">Features</a>
          <a href="#ai-recommendations" className="text-gray-700 hover:text-blue-600 transition duration-300">AI Insights</a>
          <a href="#tokenized-rewards" className="text-gray-700 hover:text-blue-600 transition duration-300">Rewards</a>
          <a href="#marketplace" className="text-gray-700 hover:text-blue-600 transition duration-300">Marketplace</a>
          <a href="#community" className="text-gray-700 hover:text-blue-600 transition duration-300">Community</a>
          
          {user ? (
            <div className="flex items-center space-x-4">
              <span className="text-gray-700">{user.email}</span>
              <button 
                onClick={handleLogout}
                className="text-gray-700 hover:text-blue-600 transition duration-300"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setShowSignupModal(true)}
                className="text-gray-700 hover:text-blue-600 transition duration-300 p-1 rounded-full"
              >
                <FaUserCircle size={24} />
              </button>
            </div>
          )}

          {isConnected ? (
            <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
              Wallet Connected
            </span>
          ) : (
            <button 
              onClick={connectWallet}
              className="btn-primary"
            >
              Connect Wallet
            </button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={toggleMenu}
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Signup Modal */}
      {showSignupModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 w-full max-w-md relative">
            <button
              onClick={() => {
                setShowSignupModal(false);
                resetForm();
              }}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <MdClose size={24} />
            </button>
            <h2 className="text-2xl font-bold mb-6 text-center">Create Account</h2>
            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
            <form onSubmit={handleSignup} className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 disabled:opacity-50"
                disabled={isLoading}
              >
                {isLoading ? 'Creating Account...' : 'Sign Up'}
              </button>
            </form>
            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Or continue with</span>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-3">
                <button
                  onClick={() => handleSocialLogin('google')}
                  className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition duration-300"
                >
                  <FaGoogle className="text-red-600 mr-2" />
                  Google
                </button>
                <button
                  onClick={() => handleSocialLogin('github')}
                  className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition duration-300"
                >
                  <FaGithub className="mr-2" />
                  GitHub
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="container mx-auto px-6 py-4">
            <div className="flex flex-col space-y-4">
              <a href="#features" className="text-gray-700 hover:text-blue-600 transition duration-300">Features</a>
              <a href="#ai-recommendations" className="text-gray-700 hover:text-blue-600 transition duration-300">AI Insights</a>
              <a href="#tokenized-rewards" className="text-gray-700 hover:text-blue-600 transition duration-300">Rewards</a>
              <a href="#marketplace" className="text-gray-700 hover:text-blue-600 transition duration-300">Marketplace</a>
              <a href="#community" className="text-gray-700 hover:text-blue-600 transition duration-300">Community</a>
              
              {user ? (
                <div className="flex flex-col space-y-4">
                  <span className="text-gray-700">{user.email}</span>
                  <button 
                    onClick={handleLogout}
                    className="text-gray-700 hover:text-blue-600 transition duration-300"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <div className="flex flex-col space-y-4">
                  <button 
                    onClick={() => setShowSignupModal(true)}
                    className="p-3 rounded-full hover:bg-gray-100 transition duration-300 flex items-center justify-center"
                  >
                    <FaUserCircle size={32} className="text-blue-600 hover:text-blue-700 transition duration-300" />
                  </button>
                </div>
              )}

              {isConnected ? (
                <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium text-center">
                  Wallet Connected
                </span>
              ) : (
                <button 
                  onClick={connectWallet}
                  className="w-full btn-primary"
                >
                  Connect Wallet
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;