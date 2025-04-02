import './HowItsWorking.css';

const HowItsWorking = () => {
   return (
      <section className='how-its-working'>
         <div className='how-its-working__header'>
            <h2 className='how-its-working__header-title'>Как это работает</h2>
            <button className='how-its-working__header-button'>Узнать больше</button>
         </div>
         <div className='how-its-working__body'>
            <div className='how-its-working__order'>
               <img
                  src='assets/icons/pc_how.svg'
                  alt='pc icon'
                  className='how-its-working__image'
               />
               <span className='how-its-working__text'>Удобный заказ на сайте</span>
            </div>
            <div className='how-its-working__online'>
               <img
                  src='assets/icons/building_how.svg'
                  alt='pc icon'
                  className='how-its-working__image'
               />
               <span className='how-its-working__text'>Нет необходимости ехать в офис</span>
            </div>
            <div className='how-its-working__choice'>
               <img
                  src='assets/icons/planet_how.svg'
                  alt='pc icon'
                  className='how-its-working__image'
               />
               <span className='how-its-working__text'>Огромный выбор направлений</span>
            </div>
         </div>
      </section>
   );
};

export default HowItsWorking;
