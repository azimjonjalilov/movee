import logo from "../../assets/MOVEE.png";
import styles from "./header.module.css";
const Header = () => {
    return (
        <header className={styles.header}>
            <div className={`${styles.container} ${styles.DSFlex}`}>
                <div className="logo">
                    <a href="#">
                        <img src={logo} alt="log icon" width={115} />
                    </a>
                </div>
                <ul className={styles.listItemWrapper}>
                    <li>
                        <a href="#">Цены</a>
                    </li>
                    <li>
                        <a href="#">Автопарк</a>
                    </li>
                    <li>
                        <a href="#">Отзывы</a>
                    </li>
                    <li>
                        <a href="#">Контакты</a>
                    </li>
                </ul>
                <p className={styles.phone}>8(800)-080-12-13</p>
            </div>
        </header>
    );
};

export default Header;
