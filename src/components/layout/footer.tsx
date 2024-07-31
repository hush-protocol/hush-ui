import React from 'react'
import Image from "next/image";
import logo from "../../../public/HUSH Logo.svg"
const Footer = () => {
  return (
    <div style={{
      borderTop: '1px solid',
     borderImage: 'linear-gradient(to right, #000000, #ffffff, #000000) 1',
      borderImageSlice: 1,
    }} className='overflow-hidden w-full relative text-white bg-black'>
      <div className='flex py-[32px] mt-[30px] px-[9%] gap-12 justify-between'>
        <div>
          <Image className='h-[45px] w-[11%]  ' alt='logo' src={logo} draggable="false" />
          <p className='p-[6px]'>Discover the future of wallet security. Our protocol ensures that your seed phrase is stored and recovered in a fully decentralised and trustless environment, powered by Internet Computer Protocol (ICP).</p>
        </div>
        <div className='grid w-full grid-cols-3'>
          <div>
            <p className='text-[18px] font-[600]  '>Company</p>
            <p className='opacity-50 text-[14px] font-[400]'>Blog</p>
            <p className='opacity-50 text-[14px] font-[400]'>About Us</p>
            <p className='opacity-50 text-[14px] font-[400]'>use cases</p>
          </div>
          <div>
            <p className='text-[18px] font-[600]  '>Navigation</p>
            <p className='opacity-50 text-[14px] font-[400]'>Home</p>
            <p className='opacity-50 text-[14px] font-[400]'>Products</p>
            <p className='opacity-50 text-[14px] font-[400]'>Pricing</p>
            <p className='opacity-50 text-[14px] font-[400]'>Contact</p>
          </div>
          <div>
            <p className='text-[18px] font-[600]  '>Services</p>
            <p className='opacity-50 text-[14px] font-[400]'>Wallet Security</p>
            <p className='opacity-50 text-[14px] font-[400]'>Decentralization</p>
            <p className='opacity-50 text-[14px] font-[400]'> Onboarding</p>
            <p className='opacity-50 text-[14px] font-[400]'>Integration</p>
            <p className='opacity-50 text-[14px] font-[400]'>User Support</p>
            <p className='opacity-50 text-[14px] font-[400]'>Training</p>
          </div>

        </div>
      </div>
      <hr className='w-full border opacity-20' />
      <div className='px-[9%] flex justify-between my-[34px] '>
        <p className='font-[400] text-[14px] '>© 2024 Hush Protocol. All Rights Reserved.</p>
        <p className='font-[400] text-[14px] '>User Terms & Conditions | Privacy Policy</p>
      </div>
      <div className="absolute bottom-0 md:-bottom-[300px] md:-right-[200px] rounded-full h-[700px] blur-lg opacity-70 w-[700px] pointer-events-none" style={{
                    backgroundImage: 'radial-gradient(circle, rgba(255, 255, 255, 0.4), rgba(0, 0, 0, 0.2), transparent)',
                }}>
      </div>
    </div>
  )
}

export default Footer