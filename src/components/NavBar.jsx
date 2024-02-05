import React, { useState } from 'react'
import { FaBars } from "react-icons/fa6";

export default function NavBar() {
    let [selectedItem, setSelectedItem] = useState("home");
    let [showMenu , setShowMenu] = useState(false);
    let isOpen = showMenu ? "sm:absolute" : "sm:hidden";
    let active = "border-b-[3px] rounded-[2px]"
    return (
        <div className='py-3 px-[50px] h-[9vh] flex top-0 justify-between fixed w-full bg-color1 items-center z-50 sm:justify-between sm:px-[20px] '>
            <h1 className='text-xl text-white sm:text-[1rem] font-medium w-full'>Abdelkoddous MOUNIR</h1>
            <ul className={`w-full flex gap-7 capitalize text-[1rem] items-center justify-center rounded-b-2xl text-white sm:bg-color1 sm:h-[270px] sm:w-[200px]  sm:flex-col sm:top-14 sm:right-0 ${isOpen}`}>
                <li className={`${selectedItem === 'home' ? active : ""} cursor-pointer`} onClick={() => {
                    setSelectedItem('home');
                    setShowMenu(false);
                }}><a href='#Home'>Home</a></li>
                <li className={`${selectedItem === "Skills" ? active : ""} cursor-pointer`} onClick={() => {
                    setSelectedItem('Skills');
                    setShowMenu(false);
                }}><a href='#Skills'>Skills</a></li>
                <li className={`${selectedItem === "Certificats" ? active : ""} cursor-pointer`} onClick={() => {
                    setSelectedItem('Certificats');
                    setShowMenu(false);
                }}><a href='#Certificats'>Certificats</a></li>
                <li className={`${selectedItem === "Projects" ? active : ""} cursor-pointer`} onClick={() => {
                    setSelectedItem('Projects');
                    setShowMenu(false);
                }}><a href='#Projects'>Projects</a></li>
                <li className={`${selectedItem === 'contactUs' ? active : ""} cursor-pointer`} onClick={() => {
                    setSelectedItem('contactUs');
                    setShowMenu(false);
                }}><a href='#ContactUs'>contact us</a></li>
            </ul>
            <FaBars className='h-8 w-8 text-white rounded-lg cursor-pointer hidden sm:block' onClick={() => setShowMenu(!showMenu)}/> 
        </div>
    );
}
