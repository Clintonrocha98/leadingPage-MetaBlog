import { Footer } from "../Footer";
import { Header } from "../Header";
import styles from "./styles.module.scss";

export const ContainerApp = ({ className, children }) => {
  return (
    <main className={`${className} ${styles.app}`}>
      <Header />
      {children}
      <Footer />
    </main>
  );
};
