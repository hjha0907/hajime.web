import React from 'react'
import { useState, useEffect } from 'react'

const images=[
  {
      id: 1,
      title: "Shinya Ramen",
      category: "Design",
      category: "Coding",
      img: '../../public/gallery/web-work-001.png',
      desc:"Design and Coding"
  },
  {
      id: 2,
      title: "Wedding hall in Japan",
      category: "Design",
      img: '../../public/gallery/web-work-002.png',
      desc:"Web Design"
  },
  {
    id: 3,
    title: "Family Photoshoot",
    category: "Photo",
    img: '../../public/gallery/photo-work-001.jpg',
    desc:"Web Design"
},
{
  id: 4,
  title: "Fashion Photoshoot",
  category: "Photo",
  img: '../../public/gallery/photo-work-002.jpg',
  desc:"Web Design"
},
{
id: 5,
title: "Engage Photoshoot",
category: "Photo",
img: '../../public/gallery/photo-work-003.jpg',
desc:"Web Design"
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

    const [model, setModel] = useState(false);
    const [tempimg, setTempImg] = useState('');
    const getImg =(img) =>{
      setTempImg(img);
      setModel(true);
    }

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


        
        <div className=' max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
            {filteredImages.map(image => 
            <div className=''>
                <div className='w-[150px]  h-[260px] sm:w-[250px]  sm:h-[360px] bg-white rounded-xl mt-10 mx-auto' 
                  key={image.id}>
                  <img className='w-[150px] h-[200px] sm:w-[250px] sm:h-[300px] object-cover rounded-t-xl object-top' src={image.img} />
                  <p className='text-left pl-4 mt-3'>{image.title}</p>
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
    <div className=' bg-gray-400 ml-3 py-1 px-2 rounded-md text-xs hover:bg-black hover:text-white'>
        {name.toUpperCase()}
    </div>
  </button>)  
};

export default WorkGalley;