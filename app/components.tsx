import React from 'react';

export const PetroleoBg = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <div className={`bg-blue-900 ${className}`} style={{ backgroundColor: 'var(--petroleo)' }}>
    {children}
  </div>
);

export const NudeBg = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <div className={className} style={{ backgroundColor: 'var(--nude-warm)' }}>
    {children}
  </div>
);

export const Button = ({
  children,
  onClick,
  variant = 'primary',
  className = ''
}: {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
}) => {
  const baseClasses = 'px-8 py-3 rounded-full font-medium transition hover:scale-105 hover:shadow-lg';

  const variantClasses = {
    primary: 'bg-blue-900 text-white',
    secondary: 'text-white',
    outline: 'border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white'
  };

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      style={variant === 'primary' || variant === 'secondary' ? {
        backgroundColor: variant === 'primary' ? 'var(--petroleo)' : 'var(--petroleo)'
      } : undefined}
    >
      {children}
    </button>
  );
};

export const SectionTitle = ({
  children,
  className = ''
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <h3 className={`text-4xl font-bold text-stone-900 ${className}`}>
    {children}
  </h3>
);
