import styles from './About.module.css';

const About = () => {
   return (
      <section className={styles['about']}>
         <h2 className={styles['about__title']}>о нас</h2>
         <article className={styles['about__content']}>
            <div className={styles['about__text']}>
               Мы рады видеть вас! Мы работаем для Вас с 2003 года. 14 лет мы наблюдаем, как с
               каждым днем все больше людей заказывают ж/д билеты через интернет.
            </div>
            <div className={styles['about__text']}>
               Сегодня можно заказать железнодорожные билеты онлайн всего в 2 клика, но стоит ли это
               делать? Мы расскажем о преимуществах заказа через интернет.
            </div>
            <div className={styles['about__text_bold']}>
               Покупать жд билеты дешево можно за 90 суток до отправления поезда. Благодаря
               динамическому ценообразованию цена на билеты в это время самая низкая.
            </div>
         </article>
      </section>
   );
};

export default About;
