import React from 'react';
const Header = (props) => {
  const {mode}=props
  return (
    <header className={`header${mode}`}></header>
    )
}

export default Header;