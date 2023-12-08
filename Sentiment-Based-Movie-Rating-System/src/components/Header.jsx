import { useState } from "react";

function Header() {

    const [menu ,setMenu] = useState(false);

    function toggleMenu(){
        setMenu(prev => !prev);
    }

    let vis = 'hidden';

    if(menu)
    {
        vis = '';
    }

  return (
    <nav>
      <div className="bg-white md:container mx-auto items-center flex p-5 justify-between gap-5 text-gray-600">
        <div>hello</div>
        <div className=" hidden   min-h-fit  md:flex items-center">
          <ul className="flex  md:gap-[4vw] items-center flex-col md:flex-row">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Home</a>
            </li>
          </ul>
        </div>
        {/* hambergur icon */}
        <div className="md:hidden">
            <button onClick={toggleMenu}><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-list w-6 h-6" viewBox="0 0 16 16">
  <path  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
</svg></button>
        </div>
        <div className="flex gap-2">
        <button className=" py-2 px-5  rounded-lg text-gray-500 hover:bg-slate-100">
            Sign in
          </button>
          <button className="hover:bg-orange-500 py-2 px-5 text-white rounded-lg bg-orange-600 shadow-2xl drop-shadow-xl">
            Sign Up
          </button>
        </div>
      </div>

    <div className={`${vis} transition duration-700`}>
    <div className="container flex flex-col items-center mx-auto md:hidden bg-white">
        <a className="block py-2 px-5 w-full text-start hover:bg-slate-100" href="">Feature</a>
        <a className="block py-2 px-5 w-full text-start hover:bg-slate-100" href="">Feature</a>
      </div>
    </div>
      
    </nav>
  );
}

export default Header;
