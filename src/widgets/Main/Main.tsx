import { Link } from 'react-router';
import styles from './Main.module.css';

const Main = () => {
   return (
      <main className={styles['main']}>
         <h1 className={styles['logo']}>Railway Sales</h1>
         <nav className={styles['navbar']}>
            <div className={styles['navbar__content']}>
               <Link to='/about' className={styles['navbar__link']}>
                  О нас
               </Link>
               <Link to='/how' className={styles['navbar__link']}>
                  Как это работает
               </Link>
               <Link to='/reviews' className={styles['navbar__link']}>
                  Отзывы
               </Link>
               <Link to='/contacts' className={styles['navbar__link']}>
                  Контакты
               </Link>
            </div>
         </nav>
         <h1 className={styles['main-title']}>
            Вся жизнь - <span className={styles['main-title__slogan']}>путешествие!</span>
         </h1>
      </main>
   );
};

export default Main;
