import React from 'react'
import NavLogo from '/src/assets/images/nav_logo.png'
import {Link} from 'react-scroll'

const Navbar = () => {
  return (
    <>
        <div className='flex justify-around items-center '>
            <div>
                <img src={NavLogo} className='w-[200px]'/>
            </div>
            <div className='flex justify-end flex-1 items-center gap-[64px]'>
                <div className='font-custom font-[400] text-[20px]'>Home</div>
                <div className='font-custom font-[400] text-[20px]'>About</div>
                <div className='font-custom font-[400] text-[20px]'>Tokenomics</div>
                <div className='font-custom font-[400] text-[20px]'>Whitepaper</div>
                <div className='font-custom font-[400] text-[20px]'>Socials</div>
                <div className='font-custom font-[400] text-[20px] border-2 border-white rounded-2xl py-[10px] px-[20px]'>Join the community</div>
            </div>
        </div>
    </>
  )
}

export default Navbar