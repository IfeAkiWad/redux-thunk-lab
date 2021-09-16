import React from 'react'

const CatList = (props) => {
   const catPic =  props.catPics.map(cat => <img key={cat.id} src={cat.url} alt={cat.id} />)
    return (
        <div>
           {catPic} 
        </div>
    )
}

export default CatList