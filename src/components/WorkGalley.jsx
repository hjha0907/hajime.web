import React from 'react'
import { useState, useEffect } from 'react'

const images=[
  {
      id: 1,
      title: "Design and Coding",
      category: "Coding",
      img: 'gallery/web-work-001-s.png',
      link: 'https://shinyaramen.com.au/',
      desc:"Design and Coding for Shinya ramen in Geelong"
  },
  {
      id: 2,
      title: "Web Design",
      category: "Design",
      img: 'gallery/web-work-002-s.png',
      link: 'gallery/web-work-002.png',
      desc:"Web Design for wedding hall in Japan"
  },
  {
    id: 3,
    title: "Photo",
    category: "Photo",
    img: 'gallery/photo-work-001-s.jpg',
    link: 'gallery/photo-work-001.jpg',
    desc:"Family Photoshoot in Victoria market"
},
{
  id: 4,
  title: "Photo",
  category: "Photo",
  img: 'gallery/photo-work-002-s.jpg',
  link: 'gallery/photo-work-002.jpg',
  desc:"Fashion Photoshoot in Melborune CBD"
},
{
id: 5,
title: "Photo",
category: "Photo",
img: 'gallery/photo-work-003-s.jpg',
link: 'gallery/photo-work-003.jpg',
desc:"Engagement Photoshoot in Victoria Garden"
},
]


const WorkGalley = () => {
  const [category, setCategory] = useState('all');
  const [filteredImages, setFilteredImages] = useState([]);  
    useEffect(
      () => {
      category === 'all' ? setFilteredImages(images) : setFilteredImages(images.filter(image=>image.category === category))
    },
    [category]
    );


    return (
    <>

      <img className='mt-2 w-full' src='./img/bgLine.png' />
      <div id='works' className='bg-[#E5F6FF] w-[100%] mx-auto text-center font-bold pb-10'>
        <p className='text-2xl pb-8'><i class="fa-solid fa-house-laptop"></i> Works</p>

        <div className='' handleSetCategory ={setCategory} >
          <TagButton name="all" handleSetCategory ={setCategory} />
          <TagButton name="Coding" handleSetCategory ={setCategory} />
          <TagButton name="Design" handleSetCategory ={setCategory} />
          <TagButton name="Photo" handleSetCategory ={setCategory} />


        
        <div className='max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
            {filteredImages.map(image => 
            <div className='reveal'>
                <div className='w-[80%] h-[300px] sm:w-[250px] sm:h-[360px] bg-white rounded-xl mt-10 mx-auto overflow-hidden drop-shadow-lg'  key={image.id}>
                  <a href={image.link} target='blank'>
                    <img className='w-[100%] h-[200px] sm:w-[250px] sm:h-[250px] object-cover rounded-t-xl object-center mx-auto transform transition duration-500 hover:scale-110' src={image.img}/>     
                  </a>             
                  <p className='text-left px-4 mt-4 leading-tight'>{image.desc}</p>
                  <p className='text-left pl-4 mt-3 leading-tight text-white text-xs'><span className='bg-slate-500 p-1 rounded-md'>{image.title}</span></p>
                </div>
            </div>
            )}
        </div>

        </div>

      </div> 
      </>

)
}

const TagButton = ({name,handleSetCategory}) => {
  return (
  <button onClick={()=>handleSetCategory(name)}>
    <div className=' bg-slate-500 ml-3 py-1 px-2 rounded-md text-xs hover:bg-black text-white transform transition duration-500 hover:scale-110'>
        {name.toUpperCase()}
    </div>
  </button>)  
};


export default WorkGalley;