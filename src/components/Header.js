import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  let navLinks = [
    {
      id: 1,
      name: 'BOOKS',
      ref: '/',
    },
    {
      id: 2,
      name: 'CATEGORIES',
      ref: '/categories',
    },
  ];
  navLinks = navLinks.map((link) => (
    <NavLink
      className={link.name.toLowerCase()}
      to={link.ref}
      key={link.id}
    >
      { link.name.toUpperCase() }
    </NavLink>
  ));
  return (
    <header className="header">
      <Link
        className="logo"
        to="/"
      >
        <h2>
          Bookstore CMS
        </h2>
      </Link>
      <nav className="nav">
        { navLinks }
      </nav>
      <span className="profile">
        <FontAwesomeIcon
          className="profile-icon"
          icon={faUser}
        />
      </span>
    </header>
  );
};

export default Header;
