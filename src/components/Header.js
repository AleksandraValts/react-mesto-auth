import headerLogo from '../images/Logo.svg';

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={headerLogo} alt="Место" />
    </header>
  );
}

export default Header;