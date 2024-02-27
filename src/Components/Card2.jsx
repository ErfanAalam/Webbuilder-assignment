import React from 'react'

const Card2 = () => {
  return (
    <div className='flex flex-col gap-4 p-2 justify-center items-center'>
        <img className='w-56' src="card-img.svg" alt="" />
        <div className='text-[#074786] space-x-4 mr-20'>
            <span className='p-1 bg-[#F2F4F7] rounded'>20% off</span>
            <span className='p-1 bg-[#F2F4F7] rounded'>Limited time</span>
        </div>
        <h1 className='text-[23px] font-bold'>Webbuilder1</h1>
        <p className='p-4'>Computer Modern clasic with wix support</p>
        <div className="price space-x-4">
            <span className='font-bold text-[20px]'>$39.96</span>
            <span className='text-gray-500'>$49.96</span>
            <span className='text-red-500'>(20% off)</span>
        </div>
        <button className='py-4 px-28 bg-[#1B88F4] rounded-lg text-white mb-3'>View Deals</button>
    </div>
  )
}

export default Card2
