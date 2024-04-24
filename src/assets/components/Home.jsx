import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';


const Home=()=> {
    return (
        <div>
           <div className='bg-pink-300 h-screen p-2 '>
            <div className='bg-green-300 p-2 w-full flex  border-2 border-blue-600 rounded-lg mb-[2px] '>
                <h3>Rita Mireille</h3>
            </div>
            <div className='flex'>
            <div className=' '>
                <Navbar/>
            </div>
            <div className='bg-orange-300 h-[86vh] w-full border-2 border-blue-600 rounded-lg pt-2 pl-2 text-[17px]'>
                <h1>About me</h1>
                <Outlet/>
            </div>
            </div>
           </div>
        </div>
    );
}

export default Home;