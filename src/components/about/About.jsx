import React from 'react';
import styles from './about.module.css'; // Linkni modul sifatida uladik

const Process = () => {
  return (
    <section className={styles.processSection}>
      <h2 className={styles.processTitle}>Как это происходит?</h2>
      
      <div className={styles.processGrid}>
        <div className={styles.processItem}>
          <span className={styles.processNumber}>01</span>
          <div className={styles.processContent}>
            <h3>Оценка объема предстоящих работ</h3>
            <p>Стоимость переезда зависит от количества комнат, вещей и мебели.</p>
          </div>
        </div>

        <div className={styles.processItem}>
          <span className={styles.processNumber}>02</span>
          <div className={styles.processContent}>
            <h3>Упаковка вещей</h3>
            <p>Упаковываем вещи в коробки, подписываем. Габаритное и деликатное упаковываем отдельно.</p>
          </div>
        </div>

        <div className={styles.processItem}>
          <span className={styles.processNumber}>03</span>
          <div className={styles.processContent}>
            <h3>Погрузка и транспортировка вещей</h3>
            <p>В нашем автопарke имеются машины, подходящие для мебели любых габаритов.</p>
          </div>
        </div>

        <div className={styles.processItem}>
          <span className={styles.processNumber}>04</span>
          <div className={styles.processContent}>
            <h3>Распаковка и расстановка мебели</h3>
            <p>Опытные грузчики быстро расставят мебель и уберут мусор от распаковки.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;