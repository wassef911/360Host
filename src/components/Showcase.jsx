import React from 'react'
import Preview from './Preview'
import"./Showcase.style.scss"

const Data = [
    {
        name:"London Tower",
        uploadDate:"6 January",
        previewImage:"./assets/img1.jpg"
    },
    {
        name:"Lyon",
        uploadDate:"6 June",
        previewImage:"./assets/img2.jpg"
    },
    {
        name:"Tunisia",
        uploadDate:"6 April",
        previewImage:"./assets/img3.jpg"
    },
    {
        name:"Paris ",
        uploadDate:"6 May",
        previewImage:"./assets/img4.jpg"
    }
]

function Showcase() {
    return (
        <div className="Showcase">
            {Data.map((item,i)=>
                <Preview key={i} item={item}/>
            )}
        </div>
    )
}

export default Showcase
