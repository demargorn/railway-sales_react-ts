import { Link, useNavigate } from 'react-router';
import './Header.css';

const Header = () => {
   const navigate = useNavigate();

   return (
      <main className='main'>
         <h1 className='main__logo'>Railway Sales</h1>
         <nav className='main__navbar'>
            <div className='main__navbar-content'>
               <Link to='/' className='main__navbar-link'>
                  О нас
               </Link>
               <Link to='/' className='main__navbar-link'>
                  Как это работает
               </Link>
               <Link to='/' className='main__navbar-link'>
                  Отзывы
               </Link>
               <Link to='/' onClick={() => window.scrollTo(0, 9999)} className='main__navbar-link'>
                  Контакты
               </Link>
            </div>
         </nav>
         <h2 className='main__title'>
            Вся жизнь - <span className='main__title-slogan'>путешествие!</span>
         </h2>

         <form className='search-form'>
            <div className='search-form__direction'>
               <label htmlFor='direction' className='search-form__direction-label'>
                  Направление
               </label>
               <div className='search-form__direction-container'>
                  <input
                     id='direction__from'
                     type='text'
                     placeholder='откуда'
                     className='search-form__direction-input'
                  />
                  <img
                     src='assets/icons/refresh-icon.svg'
                     alt='refresh icon'
                     onClick={() => console.log('click')}
                     className='search-form__input-refresh'
                  />
                  <input
                     id='direction__to'
                     type='text'
                     placeholder='куда'
                     className='search-form__direction-input'
                  />
               </div>
            </div>
            <div className='search-form__date'>
               <label htmlFor='date' className='search-form__date-label'>
                  Дата
               </label>
               <div className='search-form__date-container'>
                  <input
                     id='date'
                     type='date'
                     placeholder='дд/мм/гг'
                     className='search-form__date-input'
                  />
                  <img
                     src='/src/shared/icons/refresh-icon.svg'
                     alt='refresh icon'
                     className='search-form__date-refresh'
                  />
                  <input type='date' placeholder='дд/мм/гг' className='search-form__date-input' />
               </div>
            </div>
            <button className='search-form__button' onClick={() => navigate('/trains')}>
               найти билеты
            </button>
         </form>
      </main>
   );
};

export default Header;
