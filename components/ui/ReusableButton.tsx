import type { ButtonHTMLAttributes, ReactNode } from 'react';

const variantClasses = {
  primary:
    'bg-linear-to-r from-orange-500 to-red-600 text-white shadow-[0_6px_24px_rgba(234,88,12,0.4)] hover:shadow-[0_8px_32px_rgba(234,88,12,0.6)] hover:brightness-110',
  secondary:
    'border border-white/70 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20',
  dark:
    'border border-black/80 bg-transparent text-black hover:bg-black/5',
};

interface ReusableButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'dark';
  children: ReactNode;
}

export default function ReusableButton({
  variant = 'primary',
  children,
  className,
  type = 'button',
  ...rest
}: ReusableButtonProps) {
  const base =
    'cursor-pointer rounded-lg px-8 py-3.5 text-[14px] font-semibold transition-all duration-300';
  const classes = [base, variantClasses[variant], className].filter(Boolean).join(' ');

  return (
    <button type={type} className={classes} {...rest}>
      {children}
    </button>
  );
}
