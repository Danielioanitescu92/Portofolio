import './Header.css';

import logo from '../assets/brightness_6_black_24dp.svg';
import logolight from '../assets/brightness_6_yellow_24dp.png';

const Header = () => {

    const changeTheme = () => {
        if (!localStorage.getItem(`lightTheme`)) {
            localStorage.setItem(`lightTheme`, 'true')
        } else {
            localStorage.removeItem('lightTheme');
        }
        window.location.reload(false);
    }

    return (
        <header className={ localStorage.getItem(`lightTheme`) ? "lightHeader" : "header" } >
            <div className={ localStorage.getItem(`lightTheme`) ? "lightHeader-logo" : "header-logo" } onClick={changeTheme}>
                <img src={ localStorage.getItem(`lightTheme`) ? logolight : logo} className="the-logo" alt="change" />
            </div>
            <a href="#one" className={ localStorage.getItem(`lightTheme`) ? "lightHeader-a" : "header-a" }>
                <b>WORK</b>
            </a>
        </header>
    );
}

export default Header;
