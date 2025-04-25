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
    <div className="">
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
       
       <div>
        <figure className='img-box'>
          <img src="imgSrc" alt={name}
          width={44}
          height={44}
          leading="lazy"
          />
        </figure>
       </div>

       <div>
        <p>
          {name}
        </p>
        <p>
          {company}
        </p>
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