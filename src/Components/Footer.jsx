import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#212731] m-2 text-white p-20 w-[135vw] justify-between text-center md:text-left'>
      <div className='flex flex-col md:flex-row md:gap-96 gap-32'>
        <div className="catagories space-y-6">
            <h1 className='text-3xl'>CATEGORIES</h1>
            <p>Web Builder</p>
            <p>Hosting</p>
            <p>Data Center</p>
            <p>Robotic-Automation</p>
        </div>
        <div className="contact space-y-6">
            <h1 className='text-3xl'>Contact</h1>
            <p>Contact</p>
            <p>Privacy policy</p>
            <p>Terms of service</p>
            <p>Categories</p>
            <p>About</p>
        </div>
        <div className="selector text-gray-400  ">
        <select name="United State"  className ="bg-[#212731]"id="">
            <option value="">United State</option>
        </select>
      </div>
      </div>
     
    </div>
  )
}

export default Footer
