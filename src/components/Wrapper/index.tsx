import { ReactNode } from "react";
import styles from './styles.module.css';

type WithChildren<T = {}> =
  T & {children: ReactNode};

  const Wrapper = ({ children }: WithChildren) => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  );
}

export default Wrapper;
