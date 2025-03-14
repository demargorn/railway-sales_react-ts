import styles from './HowItsWorking.module.css';

const HowItsWorking = () => {
   return (
      <section className={styles['how-its-working']}>
         <div className={styles['how-its-working__header']}>
            <h2 className={styles['how-its-working__title']}>Как это работает</h2>
            <button className={styles['how-its-working__button']}>Узнать больше</button>
         </div>
         <div className={styles['how-its-working__body']}>
            <div className={styles['how-its-working__order']}>
               <img
                  src='/src/shared/icons/pc_how.svg'
                  alt='pc icon'
                  className={styles['how-its-working__image']}
               />
               <span className={styles['how-its-working__text']}>Удобный заказ на сайте</span>
            </div>
            <div className={styles['how-its-working__online']}>
               <img
                  src='/src/shared/icons/building_how.svg'
                  alt='pc icon'
                  className={styles['how-its-working__image']}
               />
               <span className={styles['how-its-working__text']}>
                  Нет необходимости ехать в офис
               </span>
            </div>
            <div className={styles['how-its-working__choice']}>
               <img
                  src='/src/shared/icons/planet_how.svg'
                  alt='pc icon'
                  className={styles['how-its-working__image']}
               />
               <span className={styles['how-its-working__text']}>Огромный выбор направлений</span>
            </div>
         </div>
      </section>
   );
};

export default HowItsWorking;
