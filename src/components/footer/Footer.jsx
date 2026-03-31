import logo from "../../assets/MOVEE.png";
import styles from "./footer.module.css";
import youtube from "../../assets/YouTube.svg";
import VK from "../../assets/vk.svg";
import FB from "../../assets/fb.svg";
import insta from "../../assets/insta.svg";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                {/* logo va p lar */}

                <div className={styles.DSFlex}>
                    <a href="#">
                        <img src={logo} alt="log icon" width={115} />
                    </a>
                    <p>
                        Политика <br /> конфиденциальнности
                    </p>
                    <p>
                        Соглашение на обработку <br /> персональных данных
                    </p>
                </div>

                {/* list elementlar */}
                <ul className={`${styles.DSFlex} ${styles.listItemWrapper}`}>
                    <li>
                        <a href="#">Главная</a>
                    </li>
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

                {/* iconlar */}
                <div>
                    <ul className={styles.DSFlexRow}>
                        <li>
                            <a target="_blank" href="https://www.youtube.com/">
                                <img src={youtube} alt="icon" />
                            </a>
                        </li>
                        <li>
                            <a target="_blank" href="https://vk.com/">
                                <img src={VK} alt="icon" />
                            </a>
                        </li>
                        <li>
                            <a target="_blank" href="https://www.facebook.com/">
                                <img src={FB} alt="icon" />
                            </a>
                        </li>
                        <li>
                            <a target="_blank" href="https://www.instagram.com/">
                                <img src={insta} alt="icon" />
                            </a>
                        </li>
                    </ul>

                    <a className={styles.email} href="mailto:hello@movee.ru">
                        hello@movee.ru
                    </a>
                </div>

                {/* phone number */}
                <div>
                    <p>Обратный звонок</p>
                    <a href="tel:+8 (800)-080-12-13">8 (800)-080-12-13</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
