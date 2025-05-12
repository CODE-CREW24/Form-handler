"use client"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Reusable Button component with various style variants
export default function Button({ 
  children, 
  variant = 'primary', // primary, secondary, outline, danger 
  size = 'md', // sm, md, lg
  className = '',
  icon = null,
  iconPosition = 'left',
  onClick,
  disabled = false,
  type = 'button'
}) {
  const baseStyles = "rounded-lg transition-colors flex items-center justify-center";
  
  const variantStyles = {
    primary: "bg-purple-600 text-white hover:bg-purple-700",
    secondary: "bg-slate-100 text-slate-600 hover:bg-slate-200",
    outline: "border border-slate-200 text-slate-600 hover:bg-slate-50",
    danger: "bg-rose-600 text-white hover:bg-rose-700"
  };
  
  const sizeStyles = {
    sm: "px-3 py-1.5 text-xs",
    md: "px-4 py-2 text-sm",
    lg: "px-5 py-2.5 text-base"
  };
  
  const disabledStyles = disabled ? "opacity-50 cursor-not-allowed" : "";
  
  const styles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${disabledStyles} ${className}`;
  
  return (
    <button
      type={type}
      className={styles}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && iconPosition === 'left' && (
        <FontAwesomeIcon icon={icon} className={children ? "mr-2" : ""} />
      )}
      {children}
      {icon && iconPosition === 'right' && (
        <FontAwesomeIcon icon={icon} className={children ? "ml-2" : ""} />
      )}
    </button>
  );
}