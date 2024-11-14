import React from 'react'
import Marketing from '../assets/marketing.png';
import MarketingLogo from '../assets/marketinglogo.png';
import Management from '../assets/management.png';
import ManagementLogo from '../assets/managementlogo.png';

const Services = () => {
  return (
    <section className="p-5 bg-[#f8f8f8] py-10">
      <div className="flex justify-center items-center text-4xl font-bold text-center mb-5">We're provide <br /> invest & business services</div>

      <div className='grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-3 lg:gap-8 place-items-center lg:px-[110px] xl:px-[240px] 2xl:px-[330px]'>

        <div className='w-full md:w-96 bg-white h-[330px] grid justify-center items-center p-8 gap-2'>
          <div className='flex justify-center'>
            <img src={MarketingLogo} alt="" width={50} height={50} />
          </div>
          <div className="font-bold text-xl text-center">Marketing strategy</div>
          <div className='text-center text-sm'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit culpa excepturi quos possimus corporis. Vitae, qui sit recusandae totam culpa autem error asperiores ratione consectetur quis at est illum aut?
          </div>
          <div className='flex justify-center'>
            <button className="px-5 py-2.5 w-32 bg-[#007BFF] text-white text-base cursor-pointer rounded transition-colors duration-300 hover:bg-[#0056b3] ">
              Read More
            </button>
          </div>
        </div>

        <div className='w-full md:w-96 md:h-[330px] flex justify-center'>
          <img src={Marketing} alt="image" />
        </div>

        <div className='w-full md:w-96 md:h-[330px] flex justify-center'>
          <img src={Management} alt="image" />
        </div>

        <div className='w-full md:w-96 bg-white h-[330px] grid justify-center items-center p-8 gap-2'>
          <div className='flex justify-center'>
            <img src={ManagementLogo} alt="" width={50} height={50} />
          </div>
          <div className="font-bold text-xl text-center">Management strategy</div>
          <div className='text-center text-sm'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit culpa excepturi quos possimus corporis. Vitae, qui sit recusandae totam culpa autem error asperiores ratione consectetur quis at est illum aut?
          </div>
          <div className='flex justify-center'>
            <button className="px-5 py-2.5 w-32 bg-[#007BFF] text-white text-base cursor-pointer rounded transition-colors duration-300 hover:bg-[#0056b3] ">
              Read More
            </button>
          </div>
        </div>
        
      </div>
    </section>
  )
}

export default Services