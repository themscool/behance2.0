import React from 'react'
import { IoSearchSharp } from 'react-icons/io5';
import { IoClose } from 'react-icons/io5';
import { MdArrowDropDown } from 'react-icons/md';
import { CgMenuLeft } from 'react-icons/cg';
import { behance_logo } from '../Data';
import { adobe_cloude } from '../Data';
import { adobeLogo } from '../Data';
import { searchType } from '../Data';
import { tagName } from '../Data';


const openMenu = () => {
  const main_header = document.getElementById('header');
  main_header.classList.toggle('menuopen');
}
const closeMenu = () => {
 openMenu();
}


const Header = () => {
    return (
        <>
            <header className='header' id='header'>
                <div id='menu' className='menu duration-300 bg-white lg:hidden shadow-lg w-[70%] h-[100%] fixed left-0 top-0 z-20 p-5'>
                    <div className='text-3xl absolute right-3 cursor-pointer text-[#333]' onClick={() => closeMenu()} >
                        <IoClose />
                    </div>
                    <ul className=''>
                        <li className='m-3 font-medium text-md'><a href="http://" target="_blank" rel="noopener noreferrer">Fou you</a></li>
                        <li className='m-3 font-medium text-md'><a href="http://" target="_blank" rel="noopener noreferrer">Discover</a></li>
                        <li className='m-3 font-medium text-md'><a href="http://" target="_blank" rel="noopener noreferrer">Livestreams</a></li>
                        <li className='m-3 font-medium text-md'><a href="http://" target="_blank" rel="noopener noreferrer">Hire</a></li>
                        <li className='m-3 font-medium text-md'><a href="http://" target="_blank" rel="noopener noreferrer">Jobs</a></li>
                    </ul>
                </div>

                <div className='border-b fixed w-full top-0 bg-white z-10'>
                    <div className="container-fluid">
                        <div className="top-header py-4 lgpy-3 px-5 border-b border ">
                            <div className="navbar flex items-center justify-between">
                                <div className="brand-logo flex items-center">
                                    <div className="phone-menu pr-3 text-2xl cursor-pointer block lg:hidden" onClick={() => openMenu()}>
                                        <CgMenuLeft />
                                    </div>
                                    <img src={behance_logo} alt={behance_logo} className="w-auto h-4" />
                                    <div className="page-links  lg:ml-8 hidden lg:block">
                                        <ul className='flex items-center'>
                                            <li className='mx-3 font-medium text-md active'><a href="http://" target="_blank" rel="noopener noreferrer">Fou you</a></li>
                                            <li className='mx-3 font-medium text-md active'><a href="http://" target="_blank" rel="noopener noreferrer">Discover</a></li>
                                            <li className='mx-3 font-medium text-md active'><a href="http://" target="_blank" rel="noopener noreferrer">Livestreams</a></li>
                                            <li className='mx-3 font-medium text-md active'><a href="http://" target="_blank" rel="noopener noreferrer">Hire</a></li>
                                            <li className='mx-3 font-medium text-md active'><a href="http://" target="_blank" rel="noopener noreferrer">Jobs</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="hidden lg:block">
                                    <div className="aciton-area flex items-center">
                                        <div className="login-btn rounded-full border px-4 py-1 border-[#dee8ff] ">
                                            <a href="" className='text-[#0057ff] font-medium text-md'>Login</a>
                                        </div>
                                        <div className="login-btn mx-4 rounded-full border px-4 py-1 border-[#dee8ff] bg-[#0057ff]">
                                            <a href="" className='text-white font-medium text-md'>Sign Up</a>
                                        </div>
                                        <span className='text-gray-300'>|</span>
                                        <div className="free-btn mx-4 flex items-center border rounded-full px-4 py-1">
                                            <div className="cloud-icon pr-2">
                                                <img src={adobe_cloude} alt={adobe_cloude} className="w-5 h-5" />
                                            </div>
                                            <a href="">Free Trial</a>
                                        </div>
                                        <div className="adobe-btn mx-4 flex items-center hover:opacity-70">

                                            <img src={adobeLogo} alt={adobeLogo} className="w-5 h-5" />
                                            <a href="" className='pl-1 font-bold text-black text-sm'> Adobe</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="phone-search block lg:hidden cursor-pointer pr-3 text-2xl">
                                    <IoSearchSharp />
                                </div>
                            </div>
                        </div>
                        <div className="search-area p-5">
                            <div className="search-area flex items-center">
                                <div className="search-box w-full  border-2 rounded-full bg-[#f9f9f9] overflow-hidden flex items-center justify-between">
                                    <div className="input-box relative lg:w-full">
                                        <input type="text" name="" placeholder='Search the creative world at work' className='bg-transparent outline-none w-[90%] lg:w-full truncate pl-16 text-md lg:text-xl font-bold text-[#222] placeholder:text-[#777]' id="" />
                                        <div className="search-icon text-2xl text-[#777] absolute top-[2px] left-4">
                                            <IoSearchSharp />
                                        </div>
                                    </div>
                                    <div className="tags-search bg-white px-4 py-3 border-l-2 ">
                                        <ul className='flex items-center'>
                                            <li className=' text-black lg:bg-black mx-1 py-1 lg:text-white px-3 rounded-full font-medium text-sm'><a href="">Projects</a></li>
                                            <div className="dt-arrow block lg:hidden">
                                                <MdArrowDropDown />
                                            </div>
                                            {
                                                searchType.map((tags) => (
                                                    <li className='mx-1 font-medium text-sm py-1 px-3 hidden lg:block rounded-full hover:bg-[#eee]'><a href="">{tags.sItems}</a></li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="hidden lg:block">
                            <div className="behance-toools flex items-center justify-between pb-5 px-5   ">
                                <div className='flex items-center'>
                                    {tagName.map((tools) => (
                                        <div className="tools-item flex items-center border rounded-md px-3 py-2 mx-3 justify-between">
                                            <div className="t-icon">
                                                {tools.tagsIcon}
                                            </div>
                                            <div className="tname px-2">
                                                <p className='text-sm font-bold'> {tools.tags}</p>
                                            </div>
                                            <div className="dt-arrow">
                                                <MdArrowDropDown />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="recm-item">
                                    <span className='text-xs font-bold text-[#626161]'>Sort</span>
                                    <div className="flex items-center ">
                                        <p className='text-sm font-medium pr-1'>Recommended</p>
                                        <MdArrowDropDown />
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </header>
        </>
    )
}

export default Header