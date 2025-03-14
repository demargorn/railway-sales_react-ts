import styles from './Footer.module.css';

const Footer = () => {
   /** поднимаемся наверх */
   const handleMoveToTop = () => window.scrollTo(0, 0);

   return (
      <footer className={styles['footer__container']}>
         <section className={styles['footer__top']}>
            <aside className={styles['left-panel']}>
               <h3 className={styles['left-panel__title']}>Свяжитесь с нами</h3>
               <div className={styles['left-panel__phone']}>
                  <img
                     src='/src/shared/icons/phone-icon.svg'
                     alt='phone icon'
                     className={styles['phone__img']}
                  />
                  <a href='tel:+78000000000' className={styles['left-panel__text']}>
                     8(800) 000 00 00
                  </a>
               </div>
               <div className={styles['left-panel__email']}>
                  <img
                     src='/src/shared/icons/mail-icon.svg'
                     alt='email icon'
                     className={styles['email__img']}
                  />
                  <a href='mailto:inbox@mail.ru' className={styles['left-panel__text']}>
                     inbox@mail.ru
                  </a>
               </div>
               <div className={styles['left-panel__skype']}>
                  <img
                     src='/src/shared/icons/skype-icon.svg'
                     alt='skype icon'
                     className={styles['skype__img']}
                  />
                  <span className={styles['left-panel__text']}>tu.train.tickets</span>
               </div>
               <div className='left-panel__address'>
                  <img
                     src='/src/shared/icons/location-icon.svg'
                     alt='address icon'
                     className={styles['address__img']}
                  />
                  <span className={styles['left-panel__text']}>г. Москва ул. Московская 27</span>
               </div>
            </aside>
            <article className={styles['subscribe-panel']}>
               <div className={styles['subscribe-panel__email']}>
                  <h3 className={styles['subscribe-panel__title']}>Подписка</h3>
                  <form className={styles['subscribe-panel__form']}>
                     <label
                        htmlFor='subscribe-panel__input'
                        className={styles['subscribe-panel__input-label']}
                     >
                        Будьте в курсе событий
                     </label>
                     <div className={styles['subscribe-panel__input-container']}>
                        <input
                           id='subscribe-panel__input'
                           type='email'
                           name='subscribe-panel__input'
                           placeholder='e-mail'
                           className={styles['subscribe-panel__input']}
                        />
                        <button className={styles['subscribe-panel__button']}>отправить</button>
                     </div>
                  </form>
               </div>
               <div className={styles['subscribe-panel__social']}>
                  <h3 className={styles['subscribe-panel__title']}>Подписывайтесь на нас</h3>
                  <div className={styles['subscribe-panel__socials']}>
                     <a href='#' className={styles['subscribe-panel__icon']}>
                        <img src='/src/shared/icons/youtube-icon.svg' alt='youtube icon' />
                     </a>
                     <a href='#' className={styles['subscribe-panel__icon']}>
                        <img src='/src/shared/icons/linkedin-icon.svg' alt='linkedin icon' />
                     </a>
                     <a href='#' className={styles['subscribe-panel__icon']}>
                        <img src='/src/shared/icons/google-icon.svg' alt='google icon' />
                     </a>
                     <a href='#' className={styles['subscribe-panel__icon']}>
                        <img src='/src/shared/icons/fb-icon.svg' alt='facebook icon' />
                     </a>
                     <a href='#' className={styles['subscribe-panel__icon']}>
                        <img src='/src/shared/icons/twitter-icon.svg' alt='twitter icon' />
                     </a>
                  </div>
               </div>
            </article>
         </section>
         <section className={styles['footer__bottom']}>
            <h1 className={styles['footer__logo']}>Railway Sales</h1>
            <img
               src='/src/shared/icons/to-top-circle.svg'
               alt='to top button'
               onClick={handleMoveToTop}
               className={styles['footer__btn-circle']}
            />
            <span className={styles['footer__text']}>2025 WEB</span>
         </section>
      </footer>
   );
};

export default Footer;
