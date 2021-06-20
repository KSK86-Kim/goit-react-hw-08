import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { isAuthentificated } from '../../redux/auth/auth-selectors';
import s from './Navigation.module.css';

export default function Navigation() {
  const isLoding = useSelector(isAuthentificated);

  return (
    <nav className={s.nav}>
      <NavLink to="/" exact className={s.link} activeClassName="activeNavLink">
        Home
      </NavLink>

      {isLoding && (
        <NavLink
          to="/contacts"
          exact
          className={s.link}
          activeClassName="activeNavLink"
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
}
