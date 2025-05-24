import { Bell, CircleUser, Plus, Search } from "lucide-react";
import styles from "./Header.module.css";
import logo from "/logo.svg";

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.logoDiv}>
                <img src={logo} className={styles.logo} alt="Health Care Logo" />
            </div>
            <div className={styles.searchWithIcon}>
                <div className={styles.inputGroup}>
                    <Search className={styles.inputIcon} />
                    <input type="search" placeholder="Search" className={styles.inputField} />
                </div>
                <Bell className={styles.bellIcon} />
            </div>
            <div className={styles.buttonSection}>
                <button className={`${styles.btnIcon} ${styles.btnGreen}`}>
                    <CircleUser />
                </button>
                <button className={`${styles.btnIcon} ${styles.btnPurple}`}>
                    <Plus />
                </button>
            </div>
        </div>
    );
};

export default Header;
