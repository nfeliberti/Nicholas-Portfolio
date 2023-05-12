import {useState} from 'react'

import {HiMenuAlt4} from 'react-icons/hi'
import {AiOutlineClose} from 'react-icons/ai'
const NavBarItem = ({title, classprops}) =>{
    return(
        <li className ={`mx-4 cursor-pointer ${classprops}`}>
            {title}
        </li>
    );
}

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <>
       
        <nav className="w-full flex md: justify-center justify-between items-center p-4">
            <h1 className="text-white text-3xl py-1 px-1">Nicholas Portfolio</h1>
            <div className="md:flex[0.5] flex-initial justify-center items-center">

            </div>
            <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
                {["Projects", "Contact"].map((item, index) => (
                    <NavBarItem key={item + index} title={item} />
                ))}
            </ul>
           
        {!toggleMenu && (
          <HiMenuAlt4 fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <ul
            className="z-10 fixed -top-0 -right-2 p-2 w-1/2 h-1/3 shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md  text-white animate-slide-in"
          >
            <li className="text-xl w-full my-2"><AiOutlineClose onClick={() => setToggleMenu(false)} /></li>
            {["Project", "Contact"].map(
              (item, index) => <NavBarItem key={item + index} title={item} classprops="my-2 text-lg ml-3" />,
            )}
          </ul>
        )}
      

        </nav></>
  )
}

export default Navbar;