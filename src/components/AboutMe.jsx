import React from 'react'

const AboutMe = () => {
  return (
    <div className='bg-bgaboutme min-h-screen w-full bg-cover -mt-40'>
        <div id='about' className='max-w-5xl bg-[#F4F4F4] md:h-[395px] h-[40%] relative top-96 flex p-10'>
          <div className=' max-w-2xl sm:max-w-3xl mx-auto flex flex-col md:flex-row py-16'>
            <div className='w-[150px] mx-auto'><img src='./img/hajime.png' className='' /></div>
            <div className='pl-10 max-w-xl'>
              <h1 className='text-4xl font-bold pb-5'><i class="fa-regular fa-user"></i> Hajime Hakamada</h1>
              <p>I am a Japanese web designer and photographer.
                  I have worked at a Web design company in Japan for 2 years before coming to Melbourne.
                  I came to Australia in 2019 and am now a permanent resident.
                  I am happy to have a chat: please contact me for any
                  enquires.
              </p>
            </div>
          </div>
        </div>
      <div className='ml-auto max-w-2xl bg-[#E6B422] h-[480px]'></div>
    </div>  
    )
}

export default AboutMe