// src/components/register/AccountDetailsStep.jsx
import { useId, useMemo, useState } from "react";
import { CheckIcon, EyeIcon, EyeOffIcon, XIcon } from "lucide-react";

export default function AccountDetailsStep({ formData, onChange, onSubmit, onBack, loading, error, fieldErrors = {} }) {
  const passwordId = useId();
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible((prevState) => !prevState);

  const checkStrength = (pass) => {
    const requirements = [
      { regex: /.{8,}/, text: "At least 8 characters" },
      { regex: /[0-9]/, text: "At least 1 number" },
      { regex: /[a-z]/, text: "At least 1 lowercase letter" },
      { regex: /[A-Z]/, text: "At least 1 uppercase letter" },
    ];

    return requirements.map((req) => ({
      met: req.regex.test(pass),
      text: req.text,
    }));
  };

  const strength = checkStrength(formData.password || "");

  const strengthScore = useMemo(() => {
    return strength.filter((req) => req.met).length;
  }, [strength]);

  const getStrengthColor = (score) => {
    if (score === 0) return "bg-gray-300";
    if (score <= 1) return "bg-red-500";
    if (score <= 2) return "bg-orange-500";
    if (score === 3) return "bg-amber-500";
    return "bg-emerald-500";
  };

  const getStrengthText = (score) => {
    if (score === 0) return "Enter a password";
    if (score <= 2) return "Weak password";
    if (score === 3) return "Medium password";
    return "Strong password";
  };

  // Helper function to get field error message
  const getFieldError = (fieldName) => {
    if (fieldErrors[fieldName] && fieldErrors[fieldName].message) {
      return fieldErrors[fieldName].message;
    }
    return "";
  };

  return (
    <div className="py-4">
      <h2 className="text-xl font-semibold mb-6 text-center">Create Your Account</h2>
      
      {error && (
        <div className="bg-red-50 text-red-700 p-3 rounded-md mb-4">
          {error}
        </div>
      )}
      
      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={onChange}
            className={`w-full px-3 py-2 border rounded-md ${getFieldError('username') ? 'border-red-500' : ''}`}
            required
          />
          {getFieldError('username') && (
            <p className="mt-1 text-sm text-red-600">{getFieldError('username')}</p>
          )}
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={onChange}
            className={`w-full px-3 py-2 border rounded-md ${getFieldError('email') ? 'border-red-500' : ''}`}
            required
          />
          {getFieldError('email') && (
            <p className="mt-1 text-sm text-red-600">{getFieldError('email')}</p>
          )}
        </div>
        
        <div>
          <label htmlFor={passwordId} className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <div className="relative">
            <input
              id={passwordId}
              type={isVisible ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={onChange}
              className={`w-full px-3 py-2 border rounded-md pr-9 ${getFieldError('password') ? 'border-red-500' : ''}`}
              required
              aria-describedby={`${passwordId}-description`}
            />
            <button
              className="absolute inset-y-0 right-0 flex items-center justify-center w-9 text-gray-500 hover:text-gray-700 transition-colors"
              type="button"
              onClick={toggleVisibility}
              aria-label={isVisible ? "Hide password" : "Show password"}
              aria-pressed={isVisible}
            >
              {isVisible ? (
                <EyeOffIcon size={16} aria-hidden="true" />
              ) : (
                <EyeIcon size={16} aria-hidden="true" />
              )}
            </button>
          </div>
          {getFieldError('password') && (
            <p className="mt-1 text-sm text-red-600">{getFieldError('password')}</p>
          )}

          {/* Password strength indicator */}
          <div
            className="mt-3 mb-1 h-1 w-full overflow-hidden rounded-full bg-gray-300"
            role="progressbar"
            aria-valuenow={strengthScore}
            aria-valuemin={0}
            aria-valuemax={4}
            aria-label="Password strength"
          >
            <div
              className={`h-full ${getStrengthColor(strengthScore)} transition-all duration-500 ease-out`}
              style={{ width: `${(strengthScore / 4) * 100}%` }}
            ></div>
          </div>

          {/* Password strength description */}
          <p id={`${passwordId}-description`} className="text-sm font-medium text-gray-700 mb-2">
            {getStrengthText(strengthScore)}. Must contain:
          </p>

          {/* Password requirements list */}
          <ul className="space-y-1.5 mb-4" aria-label="Password requirements">
            {strength.map((req, index) => (
              <li key={index} className="flex items-center gap-2">
                {req.met ? (
                  <CheckIcon size={16} className="text-emerald-500" aria-hidden="true" />
                ) : (
                  <XIcon size={16} className="text-gray-400" aria-hidden="true" />
                )}
                <span className={`text-xs ${req.met ? "text-emerald-600" : "text-gray-500"}`}>
                  {req.text}
                  <span className="sr-only">
                    {req.met ? " - Requirement met" : " - Requirement not met"}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
          <input
            type="password"
            name="passwordConfirm"
            value={formData.passwordConfirm}
            onChange={onChange}
            className={`w-full px-3 py-2 border rounded-md ${getFieldError('passwordConfirm') ? 'border-red-500' : ''}`}
            required
          />
          {getFieldError('passwordConfirm') && (
            <p className="mt-1 text-sm text-red-600">{getFieldError('passwordConfirm')}</p>
          )}
        </div>
        
        <div className="flex justify-between pt-4">
          <button 
            type="button" 
            onClick={onBack}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
            disabled={loading}
          >
            Back
          </button>
          <button 
            type="submit" 
            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 disabled:bg-blue-300"
            disabled={loading}
          >
            {loading ? 'Creating Account...' : 'Create Account'}
          </button>
        </div>
      </form>
    </div>
  );
}