import './Reviews.css';

const Reviews = () => {
   return (
      <section className='reviews'>
         <h2 className='reviews__title'>отзывы</h2>
         <div className='reviews__body'>
            <div className='review'>
               <img src='assets/images/avatar_1.png' alt='avatar' className='review__avatar' />
               <div className='review__context'>
                  <h3 className='review__title'>Екатерина Вальнова</h3>
                  <p className='review__text'>
                     "Доброжелательные подсказки на всех этапах. Помогли правильно заполнить поля и
                     без затруднений купить ж/д билет, а я ведь заказываю билет онлайн впервые!"
                  </p>
               </div>
            </div>
            <div className='review'>
               <img src='assets/images/avatar_2.png' alt='avatar' className='review__avatar' />
               <div className='review__context'>
                  <h3 className='review__title'>Евгений Стрыкало</h3>
                  <p className='review__text'>
                     "СМС-сопровождение до посадки. Сразу после оплаты ж/д билетов и за 3 часа до
                     отправления прислали СМС-напоминание о поездке!"
                  </p>
               </div>
            </div>
         </div>
         <img
            src='assets/icons/circles_reviews.svg'
            alt='circles icon'
            className='reviews__circles'
         />
      </section>
   );
};

export default Reviews;
