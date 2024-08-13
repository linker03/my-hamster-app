import clsx from 'clsx';
import styles from './Button.module.css';

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  className?: string;
}

export const Button = ({ children, className, ...rest }: ButtonProps) => {
  return (
    <button className={clsx(styles.root, className)} {...rest}>
      {children}
    </button>
  );
};
