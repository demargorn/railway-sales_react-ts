import { Link } from 'react-router';
import styles from './Main.module.css';

const Main = () => {
  
   return (
      <main className={styles['main']}>
         <h1 className={styles['logo']}>Railway Sales</h1>
         <nav className={styles['navbar']}>
            <div className={styles['navbar__content']}>
               <Link
                  to='/'
                  onClick={() => window.scrollTo(0, 800)}
                  className={styles['navbar__link']}
               >
                  О нас
               </Link>
               <Link
                  to='/'
                  onClick={() => window.scrollTo(0, 1300)}
                  className={styles['navbar__link']}
               >
                  Как это работает
               </Link>
               <Link
                  to='/'
                  onClick={() => window.scrollTo(0, 1900)}
                  className={styles['navbar__link']}
               >
                  Отзывы
               </Link>
               <Link
                  to='/'
                  onClick={() => window.scrollTo(0, 9999)}
                  className={styles['navbar__link']}
               >
                  Контакты
               </Link>
            </div>
         </nav>
         <h1 className={styles['main-title']}>
            Вся жизнь - <span className={styles['main-title__slogan']}>путешествие!</span>
         </h1>

         {/* <form className={styles['search-form']}>
            <div className={styles['search-form__direction']}>
               <label htmlFor='direction' className={styles['search-form__direction-label']}>
                  Направление
               </label>
               <div className={styles['search-form__direction-container']}>
                  <input
                     id='direction'
                     type='text'
                     placeholder='откуда'
                     className={styles['search-form__direction-input']}
                  />
                  <input
                     type='text'
                     placeholder='куда'
                     className={styles['search-form__direction-input']}
                  />
               </div>
            </div>
            <div className={styles['search-form__date']}>
               <label htmlFor='date' className={styles['search-form__date-label']}>
                  Дата
               </label>
               <div className={styles['search-form__date-container']}>
                  <input
                     id='date'
                     type='date'
                     placeholder='дд/мм/гг'
                     className={styles['search-form__date-input']}
                  />
                  <input
                     type='date'
                     placeholder='дд/мм/гг'
                     className={styles['search-form__date-input']}
                  />
               </div>
            </div>
            <button className={styles['search-form__button']}>найти билеты</button>
         </form> */}
      </main>
   );
};

export default Main;
