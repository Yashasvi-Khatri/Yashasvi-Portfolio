import React from 'react';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'tertiary';
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  animationDelay?: string;
}

const Button = ({
  variant = 'primary',
  children,
  href,
  onClick,
  className = '',
  animationDelay = '0s',
}: ButtonProps) => {
  const baseClasses = 'text-sm font-medium font-montreal rounded-full px-7 py-3 hover:opacity-90 transition-opacity';

  const variantClasses = {
    primary:
      'bg-[#051A24] text-white',
    secondary:
      'bg-white text-[#051A24]',
    tertiary:
      'bg-white text-[#051A24] border border-[#051A24]/10',
  };

  const shadowClasses = {
    primary:
      'shadow-[0_1px_2px_rgba(5,26,36,0.1),0_4px_4px_rgba(5,26,36,0.09),0_9px_6px_rgba(5,26,36,0.05),0_17px_7px_rgba(5,26,36,0.01),0_26px_7px_rgba(5,26,36,0),inset_0_2px_8px_rgba(255,255,255,0.5)]',
    secondary:
      'shadow-[0_0_0_0.5px_rgba(0,0,0,0.05),0_4px_30px_rgba(0,0,0,0.08)]',
    tertiary:
      'shadow-[0_0_0_0.5px_rgba(0,0,0,0.05),0_4px_30px_rgba(0,0,0,0.08)]',
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${shadowClasses[variant]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        style={{ animationDelay }}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={classes}
      style={{ animationDelay }}
    >
      {children}
    </button>
  );
};

export default Button;
