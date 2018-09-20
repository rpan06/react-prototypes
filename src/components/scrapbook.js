import React from 'react';
import './scrapbook.css'
import ScrapbookImages from './scrapbook_images'
import imageData from './image_data'

export default prop => {
    const images = imageData.map((item,index)=>{
        return <ScrapbookImages key={index} about={item}/>
    })
    return (
        <div className="scrapbook-container">
            {images}
        </div>
    )
}
