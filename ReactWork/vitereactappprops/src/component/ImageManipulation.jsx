import React, { useState } from 'react'
import photo from './images.jpeg'

function ImageManipulation() {
    const [catHeight, setCatHeight]=useState(200)
    const [catWidth, setCatWidth]=useState(200)
  return (
    <div>
      <h2>image manipulation</h2>
      <div style={{border:'2px solid red', height:"400px", width:'400px'}}>
        <img src={photo} height={catHeight} width={catWidth} alt="" />
      </div>
      <div>
        <button onClick={()=>setCatHeight(catHeight+50)}>increase height</button>
        <br />
        <br />
        <button onClick={()=>setCatWidth(catWidth+50)}>increase width</button>
        <br />
        <br />
        <button onClick={()=>setCatHeight(catHeight-50)}>decrease height</button>
        <br />
        <br />
        <button onClick={()=>setCatWidth(catWidth-50)}>decrease width</button>
      </div>
    </div>
  )
}

export default ImageManipulation
