import Logo from '../../assets/Header/svg/logo.svg';
import Image from 'next/image';
import Link from 'next/link';

function Header() {
    return (
        <header className="header">
            <div className="header__contaner">
                <div className="header__content">
                    <div className="header__navigation">
                        <Link href='/'>Veterinarians</Link>
                        <Link href='/'>How it works</Link>
                        <Link href='/'>About us</Link>
                        <Link href='/'>Blog</Link>
                        <Link href='/'>Shop</Link>
                    </div>
                    <div className="header__logo">
                        <Image src={Logo} alt='logo' />
                    </div>
                    <div className="header__login">
                        <button className="header__button">Try Mixlab</button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;
