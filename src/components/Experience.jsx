import React from 'react'

const Experience = () => {
  return (
    <>
    <div className='text-center'>
        <h1 className=' text-3xl mt-8'>Experience</h1>
        <div className='text-left'>
            <div className='w-[80%] md:w-[50%] mx-auto mt-8'><i class="fa-solid fa-graduation-cap"/> Education</div>
            <div className='border-l-4 pl-4 w-[80%] md:w-[50%] mx-auto'>
                <p className='text-xs text-gray-400'>Finished 2015</p>
                <p className='text-2xl'>Diploma of Graphic Design and Web Design</p>
                <p>Renaissance Design Academy in Japan</p>
            </div>
            <div className='w-[80%] md:w-[50%] mx-auto mt-8'><i class="fa-solid fa-briefcase"/> Career history</div>
            <div className='border-l-4 pl-4 w-[80%] md:w-[50%] mx-auto'>
            <p className=' text-xs text-gray-400'>Apr 2015 - Dec 2017 (2 years 9 months)</p>
            <p className='text-2xl'>Web Designer and Developer</p>
                <p>D-Net Incorporated in Japan</p>
            </div>
            <div className='w-[80%] md:w-[50%] mx-auto mt-8'><i class="fa-solid fa-briefcase"/> Freelance</div>
            <div className='border-l-4 pl-4 w-[80%] md:w-[50%] mx-auto'>
            <p className=' text-xs text-gray-400'>Apr 2016 - Present</p>
            <p className='text-2xl'>Photographer</p>
                <p>Freelance</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Experience