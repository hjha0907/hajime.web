const MyWorks = () => {

    return (
      <>
      <img className='mt-2 w-full' src='./img/bgLine.png' />
      <div id='works' className='bg-[#E5F6FF] mx-auto text-center font-bold pb-10'>
      <p className='text-2xl pb-8'><i class="fa-solid fa-house-laptop"></i> Works</p>
      <div className='max-w-7xl px-5 grid sm:grid-cols-3 grid-cols-2 mx-auto gap-10 place-content-center place-items-center'>
        <div className='flex'><img src='./img/web-work-01.png'/></div>
        <div className='flex'><img src='./img/web-work-02.png'/></div>
        <div className='flex'><img src='./img/comingsoon.png'/></div>
        <div className='flex'><img src='./img/photo-work-01.png'/></div>
        <div className='flex'><img src='./img/photo-work-02.png'/></div>
        <div className='flex'><img src='./img/photo-work-03.png'/></div>
      </div> 
    </div>
    </>
    )
}
export default MyWorks;