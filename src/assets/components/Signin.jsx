import React from 'react';

const SignIn=()=> {
    return (
        <div>
            <div className='bg-green-300 h-screen f-full  text-full'>
             <div className='bg-orange-300 w-[50%] h-[50%] '>
                <input type="text" placeholder='email' className='h-8 px-4 mb-2'/> <br />
                <input type="text" placeholder='Password' className='h-8 px-4 mb-2'/> <br /> 
                <input type="submit" value='Sign Out' className='h-8 px-4 bg-green-300 rounded-lg'/>

             </div>
            </div>
        </div>
    );
}

export default SignIn;