import React from 'react'

const AboutMe = () => {
  return (
    <div className='bg-bgaboutme min-h-screen w-full bg-cover -mt-40'>
        <div id='about' className='max-w-5xl bg-[#F4F4F4] md:h-[395px] h-[40%] relative top-80 flex p-10'>
          <div className=' max-w-2xl sm:max-w-3xl mx-auto flex flex-col md:flex-row py-16'>
            <div className='w-[150px] mx-auto mb-6'><img src='./img/hajime.png' className='reveal' /></div>
            <div className='pl-10 max-w-xl relative'>
              <h1 className='text-4xl font-bold pb-5 reveal'>Hajime Hakamada</h1>
              <p className=' reveal'>
                I am a Japanese web designer and photographer.
                I have worked at a Web design company in Japan for 2 years before coming to Melbourne.
                I came to Australia in 2019 and am now a permanent resident.
                I am happy to have a chat: please contact me for any
                enquires.
              </p>
              <div className='pt-5 m-2'>
                <a className='mr-2' href='tel:0403185643'><i class="fa-solid fa-square-phone fa-bounce fa-2xl"></i></a>
                <a className='mr-2' href='mailto:hajijme.hakamada.web@gmail.com' target='blank'><i class="fa-regular fa-envelope fa-bounce fa-2xl"></i></a>
                <a className='mr-2' href='https://www.facebook.com/hajime.hakamada.3' target='blank'><i class="fa-brands fa-square-facebook fa-bounce fa-2xl"></i></a>
                <a className='mr-2' href='https://www.instagram.com/hajimefilms/' target='blank'><i class="fa-brands fa-instagram fa-bounce fa-2xl"></i></a>
                <a className='mr-2' href='https://github.com/hjha0907' target='blank'><i class="fa-brands fa-square-github fa-bounce fa-2xl"></i></a>
              </div>
            </div>
          </div>
        </div>
      <div className='ml-auto max-w-2xl bg-[#E6B422] h-[480px]'></div>
    </div>  
    )
}

export default AboutMe