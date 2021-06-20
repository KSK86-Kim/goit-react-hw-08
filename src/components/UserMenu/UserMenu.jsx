import React from 'react';
import styles from './UserMenu.module.css';
import { useDispatch } from 'react-redux';
import authOps from '../../redux/auth/auth-operations';

export default function UserMenu({ email }) {
  const dispatch = useDispatch();

  const onLogout = () => dispatch(authOps.logout());

  return (
    <>
      <div className={styles.userMenu}>
        <span className={styles.userEmail}>{email}</span>
        <button className={styles.logoutBtn} type="button" onClick={onLogout}>
          Log out
        </button>
      </div>
    </>
  );
}
