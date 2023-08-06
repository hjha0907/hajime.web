import React from 'react'


const Categories = ({Categories,filterItem})
return(
    <div>
        {
            Categories.map((category,index)=>{
                return(
                    <button type="button"
                    className='filter-btn'
                    key={index}
                    onClick={()=>filtterItem(category)}>

                    </button>
                )
            })
        }

    </div>
)

export default Categories ;