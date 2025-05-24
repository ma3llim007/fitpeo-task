import { CircleUser, Plus } from "lucide-react";
import styles from "./Header.module.css";
import logo from "/logo.svg";

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.logoDiv}>
                <img src={logo} alt="Health Care Logo" />
            </div>
            <div>
                <input type="search" />
            </div>
            <div>
                <button>
                    <CircleUser />
                </button>
                <button>
                    <Plus />
                </button>
            </div>
        </div>
    );
};

export default Header;
