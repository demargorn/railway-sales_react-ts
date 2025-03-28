import styles from './SelectTrain.module.css';

const SelectTrain = () => {
   return (
      <section className={styles['main-container']}>
         <ul className={styles['navbar']}>
            <li className={styles['navbar__link']}>
               <span className={styles['navbar__link_number']}>1</span>
               <a href='#'>Билеты</a>
            </li>
            <li className={styles['navbar__link']}>
               <span className={styles['navbar__link_number']}>2</span>
               <a href='#'>Пассажиры</a>
            </li>
            <li className={styles['navbar__link']}>
               <span className={styles['navbar__link_number']}>3</span>
               <a href='#'>Оплата</a>
            </li>
            <li className={styles['navbar__link']}>
               <span className={styles['navbar__link_number']}>4</span>
               <a href='#'>Проверка</a>
            </li>
         </ul>
         <aside className={styles['widget']}>
            <form className={styles['widget__form']}>
               <div className={styles['input__container']}>
                  <label htmlFor='trip' className={styles['input__label']}>
                     Дата поездки
                  </label>
                  <input type='date' id='trip' className={styles['input']} />
               </div>
               <div className={styles['input__container']}>
                  <label htmlFor='arrival' className={styles['input__label']}>
                     Дата возвращения
                  </label>
                  <input type='date' id='arrival' className={styles['input']} />
               </div>
            </form>
            <form className={styles['widget__options']}>
               <div className={styles['widget__option']}>
                  <img
                     src='/src/shared/icons/coupe-icon.svg'
                     alt='coupe icon'
                     className={styles['widget__option-icon']}
                  />
                  <span className={styles['widget__option-text']}>Купе</span>
                  <div className={styles['toggle__container']}>
                     <input
                        type='checkbox'
                        id='toggle'
                        className={styles['toggle__input']}
                        hidden
                     />
                     <label htmlFor='toggle' className={styles['toggle__label']}></label>
                  </div>
               </div>
               <div className={styles['widget__option']}>
                  <img
                     src='/src/shared/icons/platskart-icon.svg'
                     alt='coupe icon'
                     className={styles['widget__option-icon']}
                  />
                  <span className={styles['widget__option-text']}>Плацкарт</span>
                  <div className={styles['toggle__container']}>
                     <input
                        type='checkbox'
                        id='toggle'
                        className={styles['toggle__input']}
                        hidden
                     />
                     <label htmlFor='toggle' className={styles['toggle__label']}></label>
                  </div>
               </div>
               <div className={styles['widget__option']}>
                  <img
                     src='/src/shared/icons/siting-icon.svg'
                     alt='coupe icon'
                     className={styles['widget__option-icon']}
                  />
                  <span className={styles['widget__option-text']}>Сидячий</span>
                  <div className={styles['toggle__container']}>
                     <input
                        type='checkbox'
                        id='toggle'
                        className={styles['toggle__input']}
                        hidden
                     />
                     <label htmlFor='toggle' className={styles['toggle__label']}></label>
                  </div>
               </div>
               <div className={styles['widget__option']}>
                  <img
                     src='/src/shared/icons/luxary-icon.svg'
                     alt='coupe icon'
                     className={styles['widget__option-icon']}
                  />
                  <span className={styles['widget__option-text']}>Люкс</span>
                  <div className={styles['toggle__container']}>
                     <input
                        type='checkbox'
                        id='toggle'
                        className={styles['toggle__input']}
                        hidden
                     />
                     <label htmlFor='toggle' className={styles['toggle__label']}></label>
                  </div>
               </div>
               <div className={styles['widget__option']}>
                  <img
                     src='/src/shared/icons/wifi-icon.svg'
                     alt='coupe icon'
                     className={styles['widget__option-icon']}
                  />
                  <span className={styles['widget__option-text']}>WI-FI</span>
                  <div className={styles['toggle__container']}>
                     <input
                        type='checkbox'
                        id='toggle'
                        className={styles['toggle__input']}
                        hidden
                     />
                     <label htmlFor='toggle' className={styles['toggle__label']}></label>
                  </div>
               </div>
               <div className={styles['widget__option']}>
                  <img
                     src='/src/shared/icons/rocket-icon.svg'
                     alt='coupe icon'
                     className={styles['widget__option-icon']}
                  />
                  <span className={styles['widget__option-text']}>Экспресс</span>
                  <div className={styles['toggle__container']}>
                     <input
                        type='checkbox'
                        id='toggle'
                        className={styles['toggle__input']}
                        hidden
                     />
                     <label htmlFor='toggle' className={styles['toggle__label']}></label>
                  </div>
               </div>
            </form>
            <form className={styles['widget__price']}>
               <div className={styles['widget__price-content']}>
                  <span className={styles['widget__price-title']}>Стоимость</span>
                  <div className={styles['widget__slider']}>
                     <span>от</span>
                     <span>до</span>
                  </div>
                  <div className={styles['widget__rangeslider']}>
                     <input
                        type='range'
                        name='range'
                        min='1920'
                        max='7000'
                        defaultValue='1920'
                        className={styles['input-ranges']}
                     />
                     <input
                        type='range'
                        name='range'
                        min='1920'
                        max='7000'
                        defaultValue='4500'
                        className={styles['input-ranges']}
                     />
                  </div>
                  <div className={styles['value-labels']}>
                     <label className={styles['min-value']}>1920</label>
                     <label className={styles['max-value']}>7 000</label>
                  </div>
               </div>
            </form>
         </aside>
      </section>
   );
};

export default SelectTrain;
