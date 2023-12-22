import React from 'react';
import Logo from './logo';
import Search from './search';
import UseSetting from './useSetting';

const Navbar = () => {
  return (
    <nav className=" bg-[#27272a] text-white flex flex-row justify-between border-b-1 border-slate-100">
      <Logo></Logo>
      <Search></Search>
      <UseSetting></UseSetting>
    </nav>
  );
};

export default Navbar;
