import React from 'react'
import "./homeTestimonials.css"

const HomeTestimonials = ({name, content}) => {
  return (
    <div className='homeTestimonials'>
        <p>
            {content}
        </p>
        <h3>{name}</h3>
    </div>
  )
}

export default HomeTestimonials