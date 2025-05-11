"use client";
import { useRef, useState } from 'react';
import { User, Lock, UserCog, ChevronDown, Eye, EyeOff } from 'lucide-react';
import "../styles/login.css"
export default function LoginPage() {
  const formRef = useRef(null);
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    
    // Prevent multiple submissions
    if (isSubmitting) return;
    
    setIsSubmitting(true);
    
    const formData = new FormData(formRef.current);
    
    // Create data object to send to your Express backend
    const loginData = {
      username: formData.get('username'),
      password: formData.get('password'),
      role: formData.get('role')
    };
    
    try {
      // // Example fetch request to your Express backend
      // const response = await fetch('/api/login', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json'
      //   },
      //   body: JSON.stringify(loginData)
      // });
      
      // const data = await response.json();
      // console.log('Success:', data);
      
      // // Handle successful login (redirect, store token, etc.)
      // // For example: if (data.success) { router.push('/dashboard'); }
      console.log('Login Data:', loginData);
      // Reset the form after submission
      formRef.current.reset();
      
    } catch (error) {
      console.error('Error:', error);
      // Handle error - show error message, etc.
    } finally {
      // Always re-enable the button whether success or failure
      setIsSubmitting(false);
    }
  };

  return (
    <div className="body min-h-screen flex items-center justify-center bg-login">
      <div className="w-full min-h-screen flex items-center justify-center p-4">
        <div className="glass-card p-8 rounded-xl shadow-2xl w-full max-w-md relative overflow-hidden">
          <div className="shine"></div>
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold mb-2 text-gray-800">CampusCompass</h1>
            <p className="text-gray-600">Sign in to your account</p>
          </div>
          <form ref={formRef} onSubmit={handleLogin} className="space-y-5">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <User className="text-black-400" size={18} />
              </div>
              <input 
                type="text" 
                name="username"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all" 
                placeholder="Username" 
                required 
              />
            </div>
            
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Lock className="text-black-400" size={18} />
              </div>
              <input 
                type={showPassword ? "text" : "password"}
                name="password"
                className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all" 
                placeholder="Password" 
                required 
              />
              <div 
                className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? (
                  <EyeOff className="text-black-400" size={18} />
                ) : (
                  <Eye className="text-black-400" size={18} />
                )}
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <UserCog className="text-black-400" size={18} />
              </div>
              <select 
                name="role"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all appearance-none"
                required
                defaultValue=""
              >
                <option value="" disabled>Select your role</option>
                <option value="student">Student</option>
                <option value="teacher">Teacher</option>
                <option value="principal">Principal</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <ChevronDown className="text-black-400" size={18} />
              </div>
            </div>
            
            <button 
              type="submit" 
              disabled={isSubmitting}
              className={`w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg transition-all shadow-lg font-medium ${
                isSubmitting 
                  ? 'opacity-70 cursor-not-allowed' 
                  : 'hover:from-blue-700 hover:to-indigo-700'
              }`}
            >
              {isSubmitting ? 'Signing In...' : 'Sign In'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}