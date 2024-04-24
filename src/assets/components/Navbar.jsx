import React from 'react';
import { Link } from 'react-router-dom';


const Navbar=()=> {
    return (
        <div className='w-[200px]'>
            <nav className='text-[17px] pl-10 '>
          <ul className='leading-10'>
            <li><a href=''> Home</a></li>
            <li><a href=''>About me</a></li>
            <li><a href=''>Contact me</a></li>
            <li><a href='/SignIn' className=''>Sign In</a></li></ul>  
            </nav>
        </div>
    );
}

export default Navbar;