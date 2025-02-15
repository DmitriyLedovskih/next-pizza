import { IContainer } from "./Container.interface";
import styles from "./Container.module.css";

const Container = ({ children }: IContainer) => {
  return <div className={styles.container}>{children}</div>;
};

export default Container;
