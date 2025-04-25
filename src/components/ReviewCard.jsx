import React, { lazy } from 'react'
import PropTypes from 'prop-types'
const ReviewCard = ({content, imgSrc, name, company}) => {
const ratings = new Array(5);
ratings.fill({
  icons: 'star',
  style:{fontVariationSettings:'"Fill" 1'}
})

console.log(ratings) 
    return ( 
    <div className="bg-zinc-800 p-5 rounded-xl  ">
        <div className=""> 
          {ratings.map(({icons, style}, key)=>(
            <span 
            key={key}
               className='material-symbols-outlined text-yellow-300 text-[18px] '
               style={style}>
              {icons}
            
            </span>
          ))}
        </div>

        <p className='text-zinc-400 mb-8'>
          {content}
        </p>
       
       <div className='flex items-center gap-2 mt-auto'>
        <figure className='img-box rounded-lg'>
          <img src={imgSrc} alt={name}
          width={44}
          height={44}
          leading="lazy"
          />
        </figure>

       <div>
       <p>
          {name}
        </p>
        <p className='text-xs text-zinc-400 traking-wider'>
          {company}
        </p>
       </div>
       </div>

       
        
       

      </div>
  )
}
ReviewCard.PropTypes = {
    content: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
   
}


export default ReviewCard