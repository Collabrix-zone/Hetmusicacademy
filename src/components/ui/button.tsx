import * as React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant = 'default', size = 'default', ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center whitespace-nowrap rounded-2xl font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50';

    const variants = {
      default: 'bg-primary text-primary-foreground shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30 hover:scale-[1.02] active:scale-100',
      destructive: 'bg-destructive text-destructive-foreground shadow-md hover:bg-destructive/90',
      outline: 'border-2 border-foreground/20 bg-transparent hover:bg-accent hover:border-foreground/30',
      secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80 border-2 border-transparent',
      ghost: 'hover:bg-accent border-2 border-transparent',
      link: 'text-primary underline-offset-4 hover:underline',
    };

    const sizes = {
      default: 'h-12 px-6',
      sm: 'h-9 rounded-xl px-6 text-sm',
      lg: 'h-[60px] rounded-3xl px-9 text-lg',
      icon: 'h-12 w-12',
    };

    return (
      <button
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';

export { Button };