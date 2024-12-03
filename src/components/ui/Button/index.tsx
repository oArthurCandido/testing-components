import React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ title, children, ...props }, ref) => {
    return (
      <button ref={ref} {...props} title={title}>
        {children}      
      </button>
    );
  }
);

export default Button;
