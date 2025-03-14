import styles from './Reviews.module.css';

const Reviews = () => {
   return (
      <section className={styles['reviews']}>
         <h2 className={styles['reviews__title']}>отзывы</h2>
         <div className={styles['reviews__body']}>
            <div className={styles['review']}>
               <img
                  src='/src/shared/images/avatar_1.png'
                  alt='avatar'
                  className={styles['review__avatar']}
               />
               <div className={styles['review__context']}>
                  <h3 className={styles['review__title']}>Екатерина Вальнова</h3>
                  <p className={styles['review__text']}>
                     "Доброжелательные подсказки на всех этапах. Помогли правильно заполнить поля и
                     без затруднений купить ж/д билет, а я ведь заказываю билет онлайн впервые!"
                  </p>
               </div>
            </div>
            <div className={styles['review']}>
               <img
                  src='/src/shared/images/avatar_2.png'
                  alt='avatar'
                  className={styles['review__avatar']}
               />
               <div className={styles['review__context']}>
                  <h3 className={styles['review__title']}>Евгений Стрыкало</h3>
                  <p className={styles['review__text']}>
                     "СМС-сопровождение до посадки. Сразу после оплаты ж/д билетов и за 3 часа до
                     отправления прислали СМС-напоминание о поездке!"
                  </p>
               </div>
            </div>
         </div>
         <img
            src='/src/shared/icons/circles_reviews.svg'
            alt='circles icon'
            className={styles['reviews__circles']}
         />
      </section>
   );
};

export default Reviews;
