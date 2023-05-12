import React, {useContext} from 'react'
import {FaGithub, FaInstagram, FaLinkedin, FaDiscord, FaTelegram} from 'react-icons/fa';
import{ AiFillCopyrightCircle} from 'react-icons/ai'

const Footer = () => {
  return (
    <div className="flex flex-col w-full md:justify-center  items-center gradient-bg-footer">
      <h3 className="text-2xl text-white mt-5"> Contact</h3>
      <div className= "w-full flex sm:flex-row  justify-between my-2 ">
        <div className=" flex-row w-full text-center flex flex-1 justify-center justify-around sm:mt-0 mt-0 w-full">
          <p className="item-link text-white text-base text-center cursor-pointer" href="https://instagram.com/niccodes_"><FaInstagram className='mx-7' onClick={() => window.location = 'https://instagram.com/niccodes_'}/>Instagram </p>
          <p className="item-link text-white text-base text-center cursor-pointer" href="https://www.linkedin.com/in/nicholas-feliberti-b56623201/"><FaLinkedin className='mx-6' onClick={()=> window.location='https://www.linkedin.com/in/nicholas-feliberti-b56623201/'}/>LinkedIn </p>
          <p className="item-link text-white text-base text-center cursor-pointer" href="https://github.com/nfeliberti"><FaGithub className='mx-5' onClick={() => window.location = 'https://github.com/nfeliberti'}/>Github </p>
          <p className="item-link text-white text-base text-center cursor-pointer" href="https://discord.com/channels/niccodes#0789"><FaDiscord className='mx-5' onClick={() => window.location = 'https://discord.com/channels/niccodes#0789'}/>Discord </p>
          <p className="item-link text-white text-base text-center cursor-pointer" ><FaTelegram className='mx-6' />Telegram </p>

        
        </div>
        
      </div>
      <p className ="text-white text-sm text-center"> @Niccodes 2023</p>
         <p className ="flex text-white text-sm text-center"> All Rights Reserved <AiFillCopyrightCircle className='mt-1 ml-1 ' /></p>
    </div>
  )
}

export default Footer