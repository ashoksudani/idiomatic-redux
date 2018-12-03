/*

// No longer using this, using <navlink> <link> derived from react-router-dom

import React from 'react';


const Link = ({ active, onClick, children }) => {
  if (active) {
    return <span>{children}</span>;
  }

  return (
    <a
      onClick={e => {
        e.preventDefault();
        onClick();
      }}
      href="#"
    >
      {children}
    </a>
  );
};

export default Link;

*/
