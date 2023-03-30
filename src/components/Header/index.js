import { LogoName } from "../SVG";
import { BsSearch } from "react-icons/bs";
import { Switch } from "../Switch";
import styles from "./styles.module.scss";

export const Header = () => {
  return (
    <header className={styles.containerHeader}>
      <div className={styles.warrapHeader}>
        <LogoName />
        <nav>
          <ul>
            <li>Home</li>
            <li>Blog</li>
            <li>Single Post</li>
            <li>Pages</li>
            <li>Contact</li>
          </ul>
        </nav>
        <div className={styles.warrapRight}>
          <div className={styles.warrapInput}>
            <input type="text" placeholder="Search" />
            <BsSearch />
          </div>
          <Switch />
        </div>
      </div>
    </header>
  );
};
