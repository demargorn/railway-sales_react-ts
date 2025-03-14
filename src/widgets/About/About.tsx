import styles from './About.module.css';

const About = () => {
   return (
      <section className={styles['about']}>
         <h2 className={styles['about__title']}>о нас</h2>
         <article className={styles['about__content']}>
            <div className={styles['about__text']}>
               Мы рады видеть вас! Мы работаем для Вас с 2005 года. Вот уже 20 лет мы наблюдаем, как с
               каждым днем все больше людей заказывают ж/д билеты через интернет.
            </div>
            <div className={styles['about__text']}>
               Сегодня можно заказать железнодорожные билеты онлайн всего в два клика, но стоит ли это
               делать? Мы расскажем о преимуществах заказа через интернет.
            </div>
            <div className={styles['about__text_bold']}>
               Покупать ж/д билеты дешево можно за 90 суток до отправления поезда. Благодаря
               динамическому ценообразованию цена на билеты в это время самая низкая.
            </div>
         </article>
      </section>
   );
};

export default About;
