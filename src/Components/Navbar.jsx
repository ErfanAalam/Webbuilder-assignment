import React from "react";
import SearchIcon from '@mui/icons-material/Search';

const Navbar = () => {
  return (
    <div className="bg-[#212731] flex justify-around md:px-96 px-2 md:w-[100vw] w-[140vw] text-white p-4 gap-1" >
      <div className="search bg-white rounded md:w-56 w-32 h-8 p-2 flex items-center">
        <SearchIcon className="text-black" />
        <input type="text" name="" id="" className="outline-none text-black w-24" />
      </div>
      <a href="#" className="link">Catagories</a>
      <a href="#" className="link">Website Builders</a>
      <a href="#" className="link">Today's Deal</a>
    </div>
  );
};

export default Navbar;
