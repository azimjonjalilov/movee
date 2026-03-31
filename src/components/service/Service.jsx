import styles from "./Service.module.css"
import { FaCheck } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";

function Service() {
  return (
    <div className={styles.service}>
        <p className={styles.title}>10 видов автомобилей от 800 кг до 10 тонн</p>
        <div className={styles.category}>
            <a href="/" className={`${styles.active} ${styles.cartegoryBtn}`}>Газели</a>
            <a href="/" className={`${styles.cartegoryBtn}`}>Каблуки</a>
            <a href="/" className={`${styles.cartegoryBtn}`}>Грузовики</a>
        </div>

        <div className={styles.slide}>
            <FaAngleLeft className={styles.slideBtn}/>
            <div className={styles.slideContainer}>
                <div className={styles.slideDesc}>
                    <p className={styles.slideDescTitle}>Газель 3 метра </p>
                    <ul>
                        <li><span><FaCheck className={styles.check}/></span>Ширина 2 м</li>
                        <li><span><FaCheck className={styles.check}/></span>Высота 2 м</li>
                        <li><span><FaCheck className={styles.check}/></span>Объем 16 м³</li>
                        <li><span><FaCheck className={styles.check}/></span>Грузоподъемность 1,5 т</li>
                    </ul>

                    <div class={styles.sliderDots}>
                         <span class={`${styles.dot} ${styles.active}`}></span>
                          <span class={`${styles.dot}`}></span>
                          <span class={`${styles.dot}`}></span>
                          <span class={`${styles.dot}`}></span>
                          <span class={`${styles.dot}`}></span>
                    </div>
                    
                    <a className={styles.serviceBtn}>Заказать</a>
                </div>

                <div className={styles.slideImg}>
                    <img src="./service1.png" alt="service1.png" />
                </div>
            </div>
            <FaAngleRight className={styles.slideBtn}/>
        </div>
    </div>
  )
}

export default Service
