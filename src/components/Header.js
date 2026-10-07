import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react';
export default function Header(){
    const [toggleMenu,setToggleMenu] = useState(false);
    return <header className="flex justify-between items px-6
     py-2 bg-primary">
        <a className="font-bold text-black"href="#">Malarvizhi</a>
       <nav className="hidden md:block ml-auto mr-8">
        <ul className="flex text-white">
        <li><a href="/">Home</a></li>
        <li><a href="#about">About</a></li>
         <li><a href="#projects">Projects</a></li>
         <li><a href="#resume">Resume</a></li>
         <li><a href="#contact">Contact</a></li>
       </ul>


       </nav>

        {toggleMenu && <nav className="block md:hidden ml-auto mr-8 ">
        <ul onClick={()=> setToggleMenu(!toggleMenu)} className="flex flex-col text-white mobile-nav">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
       </ul>


       </nav>}
      <button onClick={()=>setToggleMenu(!toggleMenu)}><Bars3Icon className='text-white h-5'/></button> 
 </header>
}