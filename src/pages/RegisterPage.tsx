import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserPlus, Mail, Lock, Eye, EyeOff, AlertCircle, Check, RefreshCw } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

interface PasswordRequirement {
  regex: RegExp;
  text: string;
}

const passwordRequirements: PasswordRequirement[] = [
  { regex: /.{8,}/, text: 'At least 8 characters' },
  { regex: /[A-Z]/, text: 'One uppercase letter' },
  { regex: /[a-z]/, text: 'One lowercase letter' },
  { regex: /[0-9]/, text: 'One number' }
];

export function RegisterPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [focusedInput, setFocusedInput] = useState<string | null>(null);
  const navigate = useNavigate();
  const { signUp } = useAuth();

  // Reset error when form data changes
  useEffect(() => {
    if (error) setError('');
  }, [formData]);

  const validatePassword = (password: string): boolean => {
    return passwordRequirements.every(req => req.regex.test(password));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    try {
      // Validate email
      const email = formData.email.trim();
      if (!email) {
        setError('Email address is required');
        return;
      }
      if (!emailRegex.test(email)) {
        setError('Please enter a valid email address');
        return;
      }

      // Validate password
      if (!validatePassword(formData.password)) {
        setError('Password does not meet requirements');
        return;
      }

      // Validate password confirmation
      if (formData.password !== formData.confirmPassword) {
        setError('Passwords do not match');
        return;
      }

      setLoading(true);
      await signUp(formData.email, formData.password);
      navigate('/');
    } catch (error: any) {
      console.error('Registration error:', error);
      if (error.message?.includes('already registered')) {
        setError('An account with this email already exists');
      } else if (error.message?.includes('valid email')) {
        setError('Please enter a valid email address');
      } else {
        setError('Failed to create account. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  const getPasswordStrength = (password: string): number => {
    return passwordRequirements.filter(req => req.regex.test(password)).length;
  };

  const passwordStrength = getPasswordStrength(formData.password);
  const strengthPercentage = (passwordStrength / passwordRequirements.length) * 100;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">
          Create your account
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="font-medium text-[#fb7701] hover:text-[#e66901]">
            Sign in
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          {error && (
            <div className="mb-4 bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg flex items-center gap-2">
              <AlertCircle className="w-5 h-5" />
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <div className="mt-1 relative">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  onFocus={() => setFocusedInput('email')}
                  onBlur={() => setFocusedInput(null)}
                  className="appearance-none block w-full px-3 py-2 pl-10 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#fb7701] focus:border-[#fb7701]"
                />
                <Mail className={`absolute left-3 top-2.5 h-5 w-5 ${
                  focusedInput === 'email' ? 'text-[#fb7701]' : 'text-gray-400'
                }`} />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1 relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="new-password"
                  required
                  value={formData.password}
                  onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
                  onFocus={() => setFocusedInput('password')}
                  onBlur={() => setFocusedInput(null)}
                  className="appearance-none block w-full px-3 py-2 pl-10 pr-10 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#fb7701] focus:border-[#fb7701]"
                />
                <Lock className={`absolute left-3 top-2.5 h-5 w-5 ${
                  focusedInput === 'password' ? 'text-[#fb7701]' : 'text-gray-400'
                }`} />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-500"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>

              {/* Password strength indicator */}
              {formData.password && (
                <div className="mt-2">
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className={`h-full transition-all duration-300 ${
                        strengthPercentage <= 25 ? 'bg-red-500' :
                        strengthPercentage <= 50 ? 'bg-orange-500' :
                        strengthPercentage <= 75 ? 'bg-yellow-500' :
                        'bg-green-500'
                      }`}
                      style={{ width: `${strengthPercentage}%` }}
                    />
                  </div>
                  <div className="mt-2 space-y-2">
                    {passwordRequirements.map((req, index) => (
                      <div 
                        key={index}
                        className="flex items-center text-sm"
                      >
                        {req.regex.test(formData.password) ? (
                          <Check className="w-4 h-4 text-green-500 mr-2" />
                        ) : (
                          <div className="w-4 h-4 border border-gray-300 rounded-full mr-2" />
                        )}
                        <span className={req.regex.test(formData.password) ? 'text-green-700' : 'text-gray-500'}>
                          {req.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                Confirm password
              </label>
              <div className="mt-1 relative">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  autoComplete="new-password"
                  required
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData(prev => ({ ...prev, confirmPassword: e.target.value }))}
                  onFocus={() => setFocusedInput('confirmPassword')}
                  onBlur={() => setFocusedInput(null)}
                  className="appearance-none block w-full px-3 py-2 pl-10 pr-10 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#fb7701] focus:border-[#fb7701]"
                />
                <Lock className={`absolute left-3 top-2.5 h-5 w-5 ${
                  focusedInput === 'confirmPassword' ? 'text-[#fb7701]' : 'text-gray-400'
                }`} />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-500"
                >
                  {showConfirmPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
              {formData.password && formData.confirmPassword && (
                <div className="mt-2 flex items-center">
                  {formData.password === formData.confirmPassword ? (
                    <>
                      <Check className="w-4 h-4 text-green-500 mr-2" />
                      <span className="text-sm text-green-700">Passwords match</span>
                    </>
                  ) : (
                    <>
                      <AlertCircle className="w-4 h-4 text-red-500 mr-2" />
                      <span className="text-sm text-red-700">Passwords do not match</span>
                    </>
                  )}
                </div>
              )}
            </div>

            <div>
              <button
                type="submit"
                disabled={loading}
                className="w-full flex justify-center items-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-[#fb7701] hover:bg-[#e66901] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#fb7701] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
                    Creating account...
                  </>
                ) : (
                  <>
                    <UserPlus className="w-5 h-5 mr-2" />
                    Create account
                  </>
                )}
              </button>
            </div>
          </form>

          <div className="mt-6">
            <p className="text-xs text-center text-gray-600">
              By creating an account, you agree to our{' '}
              <Link to="/terms" className="font-medium text-[#fb7701] hover:text-[#e66901]">
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link to="/privacy" className="font-medium text-[#fb7701] hover:text-[#e66901]">
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}